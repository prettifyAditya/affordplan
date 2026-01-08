const db = require('../db');
const multer = require('multer');

// GET all blogs
exports.getAllBlogs = (req, res) => {
  const sql = `
    SELECT ROW_NUMBER() OVER (ORDER BY BlogID DESC) AS SerialNo,
           BlogID, BlogName, BlogNameURL, BlogImage, BlogBannerImage,
           ActiveStatus, DATE_FORMAT(PostedDate, '%d %b %Y') AS PostedDate
    FROM mst_blogdata ORDER BY BlogID DESC
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.json(results);
  });
};


// GET blog by ID
exports.getBlogById = (req, res) => {
  const BlogID = req.query.BlogID;
  if (!BlogID) {
    return res
      .status(400)
      .json({ success: false, message: "Missing Blog ID" });
  }
  const blogSql = "SELECT * FROM mst_blogdata WHERE BlogID = ? LIMIT 1";
  db.query(blogSql, [BlogID], (err, blogResults) => {
    if (err) {
      console.error("Error fetching blog:", err);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
    if (blogResults.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }
    return res.status(200).json({
      success: true,
      data: blogResults[0],
    });
  });
};

// CREATE or UPDATE blog
exports.saveOrUpdateBlog = (req, res) => {
  const {
    BlogID, BlogName, BlogNameURL, SmallDescription, Description,
    ActiveStatus, MetaTitle, MetaKeywords, MetaDescriptions,
    MetaSchema, UpdatedBy
  } = req.body;
  const currentTime = new Date();
  const BlogImage = req.files?.BlogImage?.[0]?.filename || null;
  const BlogBannerImage = req.files?.BlogBannerImage?.[0]?.filename || null;
  const selectedTags = req.body.SelectedTags ? JSON.parse(req.body.SelectedTags) : [];
  const checkDuplicateSql = ` SELECT BlogID FROM mst_blogdata WHERE (BlogName = ? OR BlogNameURL = ?) ${BlogID ? "AND BlogID != ?" : ""} `;
  const checkParams = BlogID ? [BlogName, BlogNameURL, BlogID] : [BlogName, BlogNameURL];
  db.query(checkDuplicateSql, checkParams, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: "Database error" });
    if (results.length > 0) {
      return res.status(400).json({ success: false, message: "Blog with the same name or URL already exists" });
    }
    if (BlogID) {
      const getOldSql = "SELECT BlogImage, BlogBannerImage FROM mst_blogdata WHERE BlogID = ?";
      db.query(getOldSql, [BlogID], (err, oldResults) => {
        if (err || oldResults.length === 0) {
          return res.status(400).json({ success: false, message: "Invalid BlogID" });
        }
        const old = oldResults[0];
        const finalBlogImage = BlogImage || old.BlogImage;
        const finalBannerImage = BlogBannerImage || old.BlogBannerImage;
        const updateSql = `
          UPDATE mst_blogdata SET 
            BlogName = ?, BlogNameURL = ?, BlogImage = ?, BlogBannerImage = ?,
            SmallDescription = ?, Description = ?, ActiveStatus = ?, 
            MetaTitle = ?, MetaKeywords = ?, MetaDescriptions = ?, MetaSchema = ?, 
            UpdatedBy = ?, UpdatedOn = ? 
          WHERE BlogID = ?
        `;
        db.query(updateSql, [
          BlogName, BlogNameURL, finalBlogImage, finalBannerImage,
          SmallDescription, Description, ActiveStatus,
          MetaTitle, MetaKeywords, MetaDescriptions, MetaSchema,
          UpdatedBy, currentTime, BlogID
        ], (err) => {
          if (err) return res.status(500).json({ success: false, message: "Update failed" });
          db.query("DELETE FROM mst_blogtagdata WHERE BlogID = ?", [BlogID], (err) => {
            if (!err && selectedTags.length > 0) {
              const insertTagSQL = `INSERT INTO mst_blogtagdata (BlogID, TagID) VALUES ?`;
              const tagValues = selectedTags.map(tagID => [BlogID, tagID]);
              db.query(insertTagSQL, [tagValues], (err) => {
                if (err) console.error("Tag insert failed:", err);
              });
            }
          });
          return res.json({ success: true, message: "Blog updated successfully" });
        });
      });
    } else {
      const insertSql = `
        INSERT INTO mst_blogdata (
          BlogName, BlogNameURL, BlogImage, BlogBannerImage, SmallDescription,
          Description, ActiveStatus, MetaTitle, MetaKeywords, MetaDescriptions,
          MetaSchema, PostedDate, UpdatedBy, UpdatedOn
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      db.query(insertSql, [
        BlogName, BlogNameURL, BlogImage, BlogBannerImage,
        SmallDescription, Description, ActiveStatus,
        MetaTitle, MetaKeywords, MetaDescriptions, MetaSchema,
        currentTime, UpdatedBy, currentTime
      ], (err, result) => {
        if (err) return res.status(500).json({ success: false, message: "Insert failed" });
        const newBlogID = result.insertId;
        if (selectedTags.length > 0) {
          const insertTagSQL = `INSERT INTO mst_blogtagdata (BlogID, TagID) VALUES ?`;
          const tagValues = selectedTags.map(tagID => [newBlogID, tagID]);
          db.query(insertTagSQL, [tagValues], (err) => {
            if (err) console.error("Tag insert failed:", err);
          });
        }
        return res.json({ success: true, message: "Blog created successfully" });
      });
    }
  });
};


// DELETE blog
exports.deleteBlog = (req, res) => {
  const BlogID = req.params.BlogID;
  const sql = 'DELETE FROM mst_blogdata WHERE BlogID = ?';
  db.query(sql, [BlogID], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error' });
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }
    res.json({ success: true, message: 'Blog deleted successfully' });
  });
};


//Update status
exports.updateActiveStatus = (req, res) => {
  const { BlogID, ActiveStatus } = req.body;
  if (!BlogID || ActiveStatus === undefined) {
    return res.status(400).json({ success: false, message: "Missing ID or ActiveStatus" });
  }
  const sql = `
    UPDATE mst_blogdata 
    SET ActiveStatus = ?, UpdatedOn = NOW() 
    WHERE BlogID = ?
  `;
  db.query(sql, [ActiveStatus, BlogID], (err, result) => {
    if (err) {
      console.error("Error updating status:", err);
      return res.status(500).json({ success: false, message: "Database error" });
    }

    res.json({ success: true, message: "Status updated successfully" });
  });
};


//All Blog For Front
exports.getAllActiveBlogs = (req, res) => {
  const sql = `
    SELECT BlogName, BlogNameURL, BlogImage, BlogBannerImage,
           ActiveStatus, DATE_FORMAT(PostedDate, '%d %b %Y') AS PostedDate
    FROM mst_blogdata Where ActiveStatus=1 ORDER BY PostedDate DESC
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.json(results);
  });
};