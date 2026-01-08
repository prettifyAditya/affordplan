const db = require('../db');
const multer = require('multer');
// GET all seos
exports.getAllSeos = (req, res) => {
  const sql = `
    SELECT ROW_NUMBER() OVER (ORDER BY SeoID DESC) AS SerialNo,
           SeoID, SeoName, SeoNameURL, SeoBannerImage,
           ActiveStatus, DATE_FORMAT(PostedDate, '%d %b %Y') AS PostedDate
    FROM mst_seodata ORDER BY SeoID DESC
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.json(results);
  });
};

// GET seo by ID
exports.getSeoById = (req, res) => {
  const SeoID = req.query.SeoID;
  if (!SeoID) { return res.status(400).json({ success: false, message: "Missing Seo ID" }); }
  const seoSql = "SELECT * FROM mst_seodata WHERE SeoID = ? LIMIT 1";
  db.query(seoSql, [SeoID], (err, seoResults) => {
    if (err) {
      console.error("Error fetching seo:", err);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
    if (seoResults.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Seo not found" });
    }
    return res.status(200).json({
      success: true,
      data: seoResults[0],
    });
  });
};

// CREATE or UPDATE seo
exports.saveOrUpdateSeo = (req, res) => {
  const {
    SeoID, SeoName, SeoNameURL, SmallDescription, Description,
    ActiveStatus, MetaTitle, MetaKeywords, MetaDescriptions,
    MetaSchema, UpdatedBy
  } = req.body;
  const currentTime = new Date();
  const SeoBannerImage = req.files?.SeoBannerImage?.[0]?.filename || null;
  const selectedTags = req.body.SelectedTags ? JSON.parse(req.body.SelectedTags) : [];
  const checkDuplicateSql = `
    SELECT SeoID FROM mst_seodata 
    WHERE (SeoName = ? OR SeoNameURL = ?) 
    ${SeoID ? "AND SeoID != ?" : ""}
  `;
  const checkParams = SeoID ? [SeoName, SeoNameURL, SeoID] : [SeoName, SeoNameURL];
  db.query(checkDuplicateSql, checkParams, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: "Database error" });
    if (results.length > 0) {
      return res.status(400).json({ success: false, message: "Seo with the same name or URL already exists" });
    }
    if (SeoID) {
      const getOldSql = "SELECT  SeoBannerImage FROM mst_seodata WHERE SeoID = ?";
      db.query(getOldSql, [SeoID], (err, oldResults) => {
        if (err || oldResults.length === 0) {
          return res.status(400).json({ success: false, message: "Invalid SeoID" });
        }
        const old = oldResults[0];
        const finalBannerImage = SeoBannerImage || old.SeoBannerImage;
        const updateSql = `
          UPDATE mst_seodata SET 
            SeoName = ?, SeoNameURL = ?, SeoBannerImage = ?,
            SmallDescription = ?, Description = ?, ActiveStatus = ?, 
            MetaTitle = ?, MetaKeywords = ?, MetaDescriptions = ?, MetaSchema = ?, 
            UpdatedBy = ?, UpdatedOn = ? 
          WHERE SeoID = ?
        `;
        db.query(updateSql, [
          SeoName, SeoNameURL, finalBannerImage,
          SmallDescription, Description, ActiveStatus,
          MetaTitle, MetaKeywords, MetaDescriptions, MetaSchema,
          UpdatedBy, currentTime, SeoID
        ], (err) => {
          if (err) return res.status(500).json({ success: false, message: "Update failed" });
          db.query("DELETE FROM mst_seotagdata WHERE SeoID = ?", [SeoID], (err) => {
            if (!err && selectedTags.length > 0) {
              const insertTagSQL = `INSERT INTO mst_seotagdata (SeoID, TagID) VALUES ?`;
              const tagValues = selectedTags.map(tagID => [SeoID, tagID]);
              db.query(insertTagSQL, [tagValues], (err) => {
                if (err) console.error("Tag insert failed:", err);
              });
            }
          });
          return res.json({ success: true, message: "Seo updated successfully" });
        });
      });
    } else {
      const insertSql = `INSERT INTO mst_seodata (  SeoName, SeoNameURL, SeoBannerImage, SmallDescription,  Description, ActiveStatus, MetaTitle, MetaKeywords, 
      MetaDescriptions,  MetaSchema, PostedDate, UpdatedBy, UpdatedOn)VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      const values = [
        SeoName, SeoNameURL, SeoBannerImage,
        SmallDescription, Description, ActiveStatus,
        MetaTitle, MetaKeywords, MetaDescriptions, MetaSchema,
        currentTime, UpdatedBy, currentTime
      ];
      db.query(insertSql, values, (err, result) => {
        if (err) {
          console.error("❌ Insert failed:", err);
          return res.status(500).json({ success: false, message: "Insert failed" });
        }
        const newSeoID = result.insertId;
        return res.json({
          success: true,
          message: "SEO created successfully",
          SeoID: newSeoID
        });
      });

    }
  });
};


// DELETE seo
exports.deleteSeo = (req, res) => {
  const SeoID = req.params.SeoID;
  const sql = 'DELETE FROM mst_seodata WHERE SeoID = ?';
  db.query(sql, [SeoID], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error' });
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Seo not found' });
    }
    res.json({ success: true, message: 'Seo deleted successfully' });
  });
};



//Update status
exports.updateActiveStatus = (req, res) => {
  const { SeoID, ActiveStatus } = req.body;
  if (!SeoID || ActiveStatus === undefined) {
    return res.status(400).json({ success: false, message: "Missing ID or ActiveStatus" });
  }
  const sql = `
    UPDATE mst_seodata 
    SET ActiveStatus = ?, UpdatedOn = NOW() 
    WHERE SeoID = ?
  `;
  db.query(sql, [ActiveStatus, SeoID], (err, result) => {
    if (err) {
      console.error("Error updating status:", err);
      return res.status(500).json({ success: false, message: "Database error" });
    }
    res.json({ success: true, message: "Status updated successfully" });
  });
};


//All Seo For Front
exports.getAllActiveSeos = (req, res) => {
  const sql = ` SELECT SeoName, SeoNameURL, SeoBannerImage, ActiveStatus, DATE_FORMAT(PostedDate, '%d %b %Y') AS PostedDate FROM mst_seodata 
  Where ActiveStatus=1 ORDER BY PostedDate DESC `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.json(results);
  });
};


exports.getSeoDataBySlug = (req, res) => {
  const { slug } = req.params;
  if (!slug || typeof slug !== "string") {
    return res.status(400).json({ success: false, message: "Invalid slug" });
  }
  const sqlMain = `SELECT SeoID, SeoName, SeoNameURL, SeoBannerImage, SmallDescription, Description, ActiveStatus, MetaTitle, MetaKeywords, 
  MetaDescriptions, MetaSchema, PostedDate, UpdatedBy, UpdatedOn FROM mst_seodata WHERE SeoNameURL = ? AND ActiveStatus = 1 LIMIT 1 `;
  db.query(sqlMain, [slug], (err, results) => {
    if (err) return res.status(500).json({ success: false, error: err.message });
    if (!results || results.length === 0) {
      return res.status(404).json({ success: false, message: "Seo not found" });
    }
    const seo = results[0];
    const sqlMoreSeos = ` SELECT SeoID, SeoName, SeoNameURL, SmallDescription, PostedDate FROM mst_seodata WHERE ActiveStatus = 1 AND SeoNameURL != ? ORDER BY PostedDate DESC LIMIT 10 `;
    db.query(sqlMoreSeos, [slug], (err2, moreResults) => {
      if (err2) return res.status(500).json({ success: false, error: err2.message });
      seo.moreSeos = moreResults || [];
      return res.json({
        success: true,
        type: "seo",
        data: seo,
      });
    });
  });
};




