const db = require("../db");

// Helper function to promisify database queries
const runQuery = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.query(sql, params, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getHomeData = (req, res) => {
  const sqlPartnerLogo = `
    SELECT PartnerLogoID, PartnerLogoImage, DisplayOrder
    FROM mst_partnerlogodata
    WHERE ActiveStatus = 1 AND DisplayOnHome = 1
    ORDER BY DisplayOrder ASC
  `;
  const sqlHomeTestimonials = `
    SELECT 
      TestimonialID,
      TestimonialName,
      TestimonialNameURL,
      TestimonialImage,
      Description,
      Location,
      DisplayOrder
    FROM mst_testimonialdata
    WHERE ActiveStatus = 1 AND TestimonialType = 'Home'
    ORDER BY DisplayOrder ASC
  `;
  const sqlMilestones = `
    SELECT 
      MilestoneID,
      Title,
      Description,
      MilestoneImage
    FROM mst_milestonedata
    WHERE ActiveStatus = 1
    ORDER BY MilestoneID ASC
  `;
  Promise.all([
    runQuery(sqlPartnerLogo),
    runQuery(sqlHomeTestimonials),
    runQuery(sqlMilestones),
  ])
    .then(([partnerLogos, homeTestimonials, milestones]) => {
      res.json({
        partnerLogos,
        homeTestimonials,
        milestones,
      });
    })
    .catch((err) => {
      console.error("Home Page SQL Error:", err);
      res.status(500).json({ error: err.message });
    });
};

exports.getProductSectionData = async (req, res) => {
  try {
    const sqlCategories = `
      SELECT DISTINCT
        c.CategoryID,
        c.CategoryName,
        c.CategoryNameURL,
        c.CategoryImage,
        c.SmallDescription,
        c.DisplayOrder
      FROM mst_categorydata c
      INNER JOIN mst_product_categories pc ON c.CategoryID = pc.CategoryID
      INNER JOIN mst_productdata p ON pc.ProductId = p.ProductId
      WHERE c.ActiveStatus = 1 
        AND p.ActiveStatus = 1
        AND c.DisplayOnHome = 1
      ORDER BY c.DisplayOrder ASC
    `;
    const sqlProducts = `
      SELECT 
        p.ProductId,
        p.ProductName,
        p.ProductNameURL,
        p.ProductSmallDescription,
        p.Section1MediaUrl,
        p.Section1ButtonText,
        pc.CategoryID
      FROM mst_productdata p
      INNER JOIN mst_product_categories pc ON p.ProductId = pc.ProductId
      INNER JOIN mst_categorydata c ON pc.CategoryID = c.CategoryID
      WHERE p.ActiveStatus = 1 
        AND c.ActiveStatus = 1
        AND p.DisplayOnHome = 1
      ORDER BY p.ProductId ASC
    `;
    const [categories, products] = await Promise.all([
      runQuery(sqlCategories),
      runQuery(sqlProducts),
    ]);
    const data = categories.map((category) => ({
      categoryId: category.CategoryID,
      categoryName: category.CategoryName,
      categoryNameURL: category.CategoryNameURL,
      categoryImage: category.CategoryImage,
      categoryDescription: category.SmallDescription,
      products: products
        .filter((product) => product.CategoryID === category.CategoryID)
        .map((product) => ({
          productId: product.ProductId,
          productName: product.ProductName,
          productNameURL: product.ProductNameURL,
          productDescription: product.ProductSmallDescription,
          productImage: product.Section1MediaUrl,
          buttonText: product.Section1ButtonText,
        })),
    }));
    res.json(data);
  } catch (err) {
    console.error("Product Section SQL Error:", err);
    res.status(500).json({ error: err.message });
  }
};



exports.getAboutPageData = (req, res) => {
  const teamSql = ` SELECT TeamID, TeamName, TeamDesignation, TeamBio, TeamImage, TeamType, DisplayOrder FROM mst_teamdata WHERE ActiveStatus = 1 ORDER BY TeamType ASC, DisplayOrder ASC `;
  const milestoneSql = `SELECT MilestoneID, Title, Description, MilestoneImage FROM mst_milestonedata WHERE ActiveStatus = 1 ORDER BY MilestoneID ASC; `;
  db.query(teamSql, (err, teamResults) => {
    if (err) return res.status(500).json({ success: false, message: "Database error" });
    db.query(milestoneSql, (err, milestoneResults) => {
      if (err) return res.status(500).json({ success: false, message: "Database error" });
      const groupedTeam = {};
      teamResults.forEach(t => {
        if (!groupedTeam[t.TeamType]) groupedTeam[t.TeamType] = [];
        groupedTeam[t.TeamType].push(t);
      });

      res.json({
        success: true,
        team: groupedTeam,
        milestones: milestoneResults
      });
    });
  });
};
