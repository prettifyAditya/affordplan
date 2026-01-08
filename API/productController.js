const db = require("../db");

// GET all products
exports.getAllProducts = (req, res) => {
  const sql = ` 
        SELECT 
            ROW_NUMBER() OVER (ORDER BY ProductId DESC) AS SerialNo, 
            p.ProductId, 
            p.ProductName,
            p.Section1MediaUrl, 
            p.ActiveStatus, 
            DATE_FORMAT(p.CreatedAt, '%d %b %Y') AS CreatedAt,
            GROUP_CONCAT(pc.CategoryID) AS ProductCategories
        FROM mst_productdata p
        LEFT JOIN mst_product_categories pc ON p.ProductId = pc.ProductId
        GROUP BY p.ProductId
        ORDER BY p.ProductId DESC 
    `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    const parsedResults = results.map((row) => ({
      ...row,
      ProductCategories: row.ProductCategories
        ? row.ProductCategories.split(",").map((id) => parseInt(id))
        : [],
    }));
    res.json(parsedResults);
  });
};

// GET product by ID
exports.getProductById = (req, res) => {
  const ProductId = req.query.ProductId;
  if (!ProductId) {
    return res
      .status(400)
      .json({ success: false, message: "Missing Product ID" });
  }
  const productSql =
    "SELECT * FROM mst_productdata WHERE ProductId = ? LIMIT 1";
  const categorySql =
    "SELECT CategoryID FROM mst_product_categories WHERE ProductId = ?";
  db.query(productSql, [ProductId], (err, productResults) => {
    if (err) {
      console.error("Error fetching product:", err);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
    if (productResults.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    db.query(categorySql, [ProductId], (err, categoryResults) => {
      if (err) {
        console.error("Error fetching categories:", err);
        return res
          .status(500)
          .json({ success: false, message: "Internal server error" });
      }
      const product = productResults[0];
      product.ProductCategories = categoryResults.map((row) => row.CategoryID);
      return res.status(200).json({
        success: true,
        data: product,
      });
    });
  });
};

// CREATE or UPDATE product
exports.saveOrUpdateProduct = (req, res) => {
  const {
    ProductId,
    ProductName,
    ProductNameURL,
    ProductSmallDescription,
    ProductCategory,
    Section1Title,
    Section1Subtitle,
    Section1Description,
    Section1ButtonText,
    Section2Title,
    Section2Subtitle,
    Section2Description,
    Section2ButtonText,
    Section3Title,
    Section3Subtitle,
    Section4Title,
    Section4Subtitle,
    Section4Description,
    Section4ButtonText,
    ActiveStatus,
    DisplayOnHome,
    DisplayOnHeader,
  } = req.body;
  const currentTime = new Date();
  const Section1MediaUrl = req.files?.Section1MediaUrl?.[0]?.filename || null;
  const Section2MediaUrl = req.files?.Section2MediaUrl?.[0]?.filename || null;
  const Section3MediaUrl = req.files?.Section3MediaUrl?.[0]?.filename || null;
  const Section4MediaUrl = req.files?.Section4MediaUrl?.[0]?.filename || null;
  let categories = [];
  try {
    categories = JSON.parse(ProductCategory || "[]");
  } catch (e) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid category format" });
  }
  if (!Array.isArray(categories) || categories.length === 0) {
    return res
      .status(400)
      .json({ success: false, message: "At least one category is required" });
  }
  if (!ProductSmallDescription || !ProductSmallDescription.trim()) {
    return res
      .status(400)
      .json({
        success: false,
        message: "Product small description is required",
      });
  }
  const checkDuplicateSql = `
        SELECT ProductId FROM mst_productdata 
        WHERE (ProductName = ? OR ProductNameURL = ?) 
        ${ProductId ? "AND ProductId != ?" : ""}
    `;
  const checkParams = ProductId
    ? [ProductName, ProductNameURL, ProductId]
    : [ProductName, ProductNameURL];
  db.query(checkDuplicateSql, checkParams, (err, results) => {
    if (err)
      return res.status(500).json({ success: false, message: err.message });
    if (results.length > 0) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Product with the same name or URL already exists",
        });
    }
    if (ProductId) {
      const getOldSql = ` 
                SELECT Section1MediaUrl, Section2MediaUrl, Section3MediaUrl, Section4MediaUrl 
                FROM mst_productdata WHERE ProductId = ? 
            `;
      db.query(getOldSql, [ProductId], (err, oldResults) => {
        if (err || oldResults.length === 0) {
          return res
            .status(400)
            .json({ success: false, message: "Invalid ProductId" });
        }
        const old = oldResults[0];
        const finalSection1Media = Section1MediaUrl || old.Section1MediaUrl;
        const finalSection2Media = Section2MediaUrl || old.Section2MediaUrl;
        const finalSection3Media = Section3MediaUrl || old.Section3MediaUrl;
        const finalSection4Media = Section4MediaUrl || old.Section4MediaUrl;
        const updateSql = ` 
                    UPDATE mst_productdata SET 
                        ProductName = ?, ProductNameURL = ?, ProductSmallDescription = ?,
                        Section1Title = ?, Section1Subtitle = ?, Section1Description = ?, 
                        Section1MediaUrl = ?, Section1ButtonText = ?, 
                        Section2Title = ?, Section2Subtitle = ?, Section2Description = ?, 
                        Section2MediaUrl = ?, Section2ButtonText = ?, 
                        Section3Title = ?, Section3Subtitle = ?, Section3MediaUrl = ?, 
                        Section4Title = ?, Section4Subtitle = ?, Section4Description = ?, 
                        Section4MediaUrl = ?, Section4ButtonText = ?, 
                        ActiveStatus = ?, DisplayOnHome = ?, DisplayOnHeader = ?, 
                        UpdatedAt = ? 
                    WHERE ProductId = ? 
                `;
        db.query(
          updateSql,
          [
            ProductName,
            ProductNameURL,
            ProductSmallDescription,
            Section1Title,
            Section1Subtitle,
            Section1Description,
            finalSection1Media,
            Section1ButtonText,
            Section2Title,
            Section2Subtitle,
            Section2Description,
            finalSection2Media,
            Section2ButtonText,
            Section3Title,
            Section3Subtitle,
            finalSection3Media,
            Section4Title,
            Section4Subtitle,
            Section4Description,
            finalSection4Media,
            Section4ButtonText,
            ActiveStatus,
            DisplayOnHome,
            DisplayOnHeader,
            currentTime,
            ProductId,
          ],
          (err) => {
            if (err)
              return res
                .status(500)
                .json({ success: false, message: "Update failed" });
            updateProductCategories(ProductId, categories, (catErr) => {
              if (catErr) {
                return res
                  .status(500)
                  .json({
                    success: false,
                    message: "Failed to update categories",
                  });
              }
              return res.json({
                success: true,
                message: "Product updated successfully",
              });
            });
          }
        );
      });
    } else {
      const insertSql = ` 
                INSERT INTO mst_productdata ( 
                    ProductName, ProductNameURL, ProductSmallDescription,
                    Section1Title, Section1Subtitle, Section1Description, Section1MediaUrl, Section1ButtonText, 
                    Section2Title, Section2Subtitle, Section2Description, Section2MediaUrl, Section2ButtonText, 
                    Section3Title, Section3Subtitle, Section3MediaUrl, 
                    Section4Title, Section4Subtitle, Section4Description, Section4MediaUrl, Section4ButtonText, 
                    ActiveStatus, DisplayOnHome, DisplayOnHeader, CreatedAt, UpdatedAt 
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) 
            `;
      db.query(
        insertSql,
        [
          ProductName,
          ProductNameURL,
          ProductSmallDescription,
          Section1Title,
          Section1Subtitle,
          Section1Description,
          Section1MediaUrl,
          Section1ButtonText,
          Section2Title,
          Section2Subtitle,
          Section2Description,
          Section2MediaUrl,
          Section2ButtonText,
          Section3Title,
          Section3Subtitle,
          Section3MediaUrl,
          Section4Title,
          Section4Subtitle,
          Section4Description,
          Section4MediaUrl,
          Section4ButtonText,
          ActiveStatus,
          DisplayOnHome,
          DisplayOnHeader,
          currentTime,
          currentTime,
        ],
        (err, result) => {
          if (err) {
            return res.status(500).json({
              success: false,
              message: err.sqlMessage || err.message,
            });
          }
          const newProductId = result.insertId;
          updateProductCategories(newProductId, categories, (catErr) => {
            if (catErr) {
              return res
                .status(500)
                .json({
                  success: false,
                  message: "Product created but failed to assign categories",
                });
            }
            return res.json({
              success: true,
              message: "Product created successfully",
              ProductId: newProductId,
            });
          });
        }
      );
    }
  });
};

function updateProductCategories(productId, categories, callback) {
  const deleteSql = "DELETE FROM mst_product_categories WHERE ProductId = ?";
  db.query(deleteSql, [productId], (err) => {
    if (err) return callback(err);
    if (categories.length === 0) {
      return callback(null);
    }
    const insertSql =
      "INSERT INTO mst_product_categories (ProductId, CategoryID) VALUES ?";
    const values = categories.map((catId) => [productId, catId]);
    db.query(insertSql, [values], (err) => {
      if (err) return callback(err);
      callback(null);
    });
  });
}

// DELETE product
exports.deleteProduct = (req, res) => {
  const ProductId = req.params.ProductId;
  const sql = "DELETE FROM mst_productdata WHERE ProductId = ?";
  db.query(sql, [ProductId], (err, result) => {
    if (err)
      return res
        .status(500)
        .json({ success: false, message: "Database error" });
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, message: "Product deleted successfully" });
  });
};

// Update status
exports.updateActiveStatus = (req, res) => {
  const { ProductId, ActiveStatus } = req.body;
  if (!ProductId || ActiveStatus === undefined) {
    return res
      .status(400)
      .json({ success: false, message: "Missing ID or ActiveStatus" });
  }
  const sql = `
    UPDATE mst_productdata 
    SET ActiveStatus = ?, UpdatedAt = NOW() 
    WHERE ProductId = ?
  `;
  db.query(sql, [ActiveStatus, ProductId], (err, result) => {
    if (err) {
      console.error("Error updating status:", err);
      return res
        .status(500)
        .json({ success: false, message: "Database error" });
    }
    res.json({ success: true, message: "Status updated successfully" });
  });
};


exports.getActiveProducts = (req, res) => {
  const sql = `
    SELECT 
      ProductId,
      ProductName
    FROM mst_productdata
    WHERE ActiveStatus = 1
    ORDER BY ProductId DESC
  `;

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }

    res.json({
      products: results
    });
  });
};
