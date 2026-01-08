const db = require('../db');
const multer = require('multer');

/**********************Admin API*********************/
// GET all Statics
exports.getAllStatics = (req, res) => {
  const sql = `
    SELECT ROW_NUMBER() OVER (ORDER BY StaticID DESC) AS SerialNo,
           StaticID, StaticName, StaticNameURL, StaticImage, StaticBannerImage,
           ActiveStatus, DATE_FORMAT(PostedDate, '%d %b %Y') AS PostedDate
    FROM mst_staticdata ORDER BY StaticID DESC
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.json(results);
  });
};


// GET Static by ID
exports.getStaticById = (req, res) => {
  const StaticID = req.query.StaticID;
  if (!StaticID) return res.status(400).json({ success: false, message: 'Missing Static ID' });

  const sql = 'SELECT * FROM mst_staticdata WHERE StaticID = ? LIMIT 1';
  db.query(sql, [StaticID], (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Internal server error' });
    if (results.length === 0) return res.status(404).json({ success: false, message: 'Static not found' });
    return res.json({ success: true, data: results[0] });
  });
};


// CREATE or UPDATE Static
exports.saveOrUpdateStatic = (req, res) => {
  const {
    StaticID, StaticName, StaticNameURL, SmallDescription, Description,
    ActiveStatus, MetaTitle, MetaKeywords, MetaDescriptions,
    MetaSchema, UpdatedBy
  } = req.body;
  const currentTime = new Date();
  const StaticImage = req.files?.StaticImage?.[0]?.filename;
  const StaticBannerImage = req.files?.StaticBannerImage?.[0]?.filename;
  const StaticImagePath = StaticImage ? `${StaticImage}` : null;
  const StaticBannerPath = StaticBannerImage ? `${StaticBannerImage}` : null;
  const checkDuplicateSql = `
    SELECT StaticID FROM mst_staticdata 
    WHERE (StaticName = ? OR StaticNameURL = ?) 
    ${StaticID ? 'AND StaticID != ?' : ''}
  `;
  const checkParams = StaticID ? [StaticName, StaticNameURL, StaticID] : [StaticName, StaticNameURL];
  db.query(checkDuplicateSql, checkParams, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: "Database error" });

    if (results.length > 0) {
      return res.status(400).json({ success: false, message: "Static with the same name or URL already exists" });
    }
    if (StaticID) {
      const getOldSql = 'SELECT StaticImage, StaticBannerImage FROM mst_staticdata WHERE StaticID = ?';
      db.query(getOldSql, [StaticID], (err, results) => {
        if (err || results.length === 0) {
          return res.status(400).json({ success: false, message: "Invalid StaticID" });
        }
        const old = results[0];
        const finalStaticImage = StaticImagePath || old.StaticImage;
        const finalBannerImage = StaticBannerPath || old.StaticBannerImage;
        const updateSql = `
          UPDATE mst_staticdata SET 
            StaticName = ?, StaticNameURL = ?, StaticImage = ?, StaticBannerImage = ?,
            SmallDescription = ?, Description = ?, ActiveStatus = ?, MetaTitle = ?,
            MetaKeywords = ?, MetaDescriptions = ?, MetaSchema = ?, 
            UpdatedBy = ?, UpdatedOn = ? 
          WHERE StaticID = ?
        `;
        db.query(updateSql, [
          StaticName, StaticNameURL, finalStaticImage, finalBannerImage,
          SmallDescription, Description, ActiveStatus,
          MetaTitle, MetaKeywords, MetaDescriptions, MetaSchema,
          UpdatedBy, currentTime, StaticID
        ], (err) => {
          if (err) return res.status(500).json({ success: false, message: "Update failed" });
          return res.json({ success: true, message: "Static updated successfully" });
        });
      });
    } else {
      const insertSql = `
        INSERT INTO mst_staticdata (
          StaticName, StaticNameURL, StaticImage, StaticBannerImage, SmallDescription,
          Description, ActiveStatus, MetaTitle, MetaKeywords, MetaDescriptions,
          MetaSchema, PostedDate, UpdatedBy, UpdatedOn
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      db.query(insertSql, [
        StaticName, StaticNameURL, StaticImagePath, StaticBannerPath,
        SmallDescription, Description, ActiveStatus,
        MetaTitle, MetaKeywords, MetaDescriptions, MetaSchema,
        currentTime, UpdatedBy, currentTime
      ], (err) => {
        if (err) return res.status(500).json({ success: false, message: "Insert failed" });
        return res.json({ success: true, message: "Static created successfully" });
      });
    }
  });
};


// DELETE Static
exports.deleteStatic = (req, res) => {
  const StaticID = req.params.StaticID;
  const sql = 'DELETE FROM mst_staticdata WHERE StaticID = ?';

  db.query(sql, [StaticID], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error' });
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Static not found' });
    }
    res.json({ success: true, message: 'Static deleted successfully' });
  });
};


/**********************Front End API*********************/
// Select Meta Data
exports.getMataDataById = (req, res) => {
  const StaticID = req.params.ID;
  if (!StaticID)
    return res
      .status(400)
      .json({ success: false, message: "Missing Static ID" });

  const sql = "SELECT * FROM mst_staticdata WHERE StaticID = ? LIMIT 1";
  db.query(sql, [StaticID], (err, results) => {
    if (err) {
      console.error("DB error:", err);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
    if (!results || results.length === 0)
      return res
        .status(404)
        .json({ success: false, message: "Static not found" });
    return res.json({ success: true, data: results[0] });
  });
};


// Select Meta Data
exports.getMataDataByUrl = (req, res) => {
  const url = req.params.url;
  if (!url) {
    console.warn("⚠️ Missing Static url in request params");
    return res
      .status(400)
      .json({ success: false, message: "Missing Static url" });
  }
  const sqlProject =
    "SELECT ProjectID as StaticID, MetaTitle, MetaDescription as MetaDescriptions, MetaKeywords, 'project' AS type FROM mst_projectdata WHERE ProjectNameURL = ? LIMIT 1";
  const sqlService =
    "SELECT ServiceID as StaticID, MetaTitle, MetaDescriptions, MetaKeywords, 'service' AS type FROM mst_servicedata WHERE ServiceNameURL = ? LIMIT 1";
  db.query(sqlProject, [url], (err, projectResults) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
    if (projectResults && projectResults.length > 0) {
      return res.json({ success: true, data: projectResults[0] });
    }
    db.query(sqlService, [url], (err, serviceResults) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, message: "Internal server error" });
      }
      if (serviceResults && serviceResults.length > 0) {
        return res.json({ success: true, data: serviceResults[0] });
      }
      return res
        .status(404)
        .json({ success: false, message: "Meta data not found" });
    });
  });
};

