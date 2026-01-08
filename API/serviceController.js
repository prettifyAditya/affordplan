const db = require('../db');


// GET all services
exports.getAllServices = (req, res) => {
  const sql = ` SELECT ROW_NUMBER() OVER (ORDER BY ServiceID DESC) AS SerialNo, ServiceID, ServiceName, ServiceNameURL, ServiceImage,
   ServiceBannerImage, DisplayOnHome, ActiveStatus, DisplayOrder, DATE_FORMAT(PostedDate, '%d %b %Y') AS PostedDate FROM mst_servicedata ORDER BY ServiceID DESC `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.json(results);
  });
};


// GET service by ID
exports.getServiceById = (req, res) => {
  const ServiceID = req.query.ServiceID;
  if (!ServiceID) {
    return res
      .status(400)
      .json({ success: false, message: "Missing Service ID" });
  }
  const serviceSql = "SELECT * FROM mst_servicedata WHERE ServiceID = ? LIMIT 1";
  db.query(serviceSql, [ServiceID], (err, serviceResults) => {
    if (err) {
      console.error("Error fetching service:", err);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
    if (serviceResults.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Service not found" });
    }
    return res.status(200).json({
      success: true,
      data: serviceResults[0],
    });
  });
};

// CREATE or UPDATE service
exports.saveOrUpdateService = (req, res) => {
  const { ServiceID, ServiceName, ServiceNameURL, SmallDescription, Description, ActiveStatus, MetaTitle, MetaKeywords, MetaDescriptions, MetaSchema,
    UpdatedBy, DisplayOnHome, DisplayOrder } = req.body;
  const currentTime = new Date();
  const ServiceImage = req.files?.ServiceImage?.[0]?.filename || null;
  const ServiceBannerImage = req.files?.ServiceBannerImage?.[0]?.filename || null;
  const checkDuplicateSql = `
    SELECT ServiceID FROM mst_servicedata 
    WHERE (ServiceName = ? OR ServiceNameURL = ?) 
    ${ServiceID ? "AND ServiceID != ?" : ""}
  `;
  const checkParams = ServiceID ? [ServiceName, ServiceNameURL, ServiceID] : [ServiceName, ServiceNameURL];
  db.query(checkDuplicateSql, checkParams, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    if (results.length > 0) {
      return res.status(400).json({ success: false, message: "Service with the same name or URL already exists" });
    }
    if (ServiceID) {
      const getOldSql = "SELECT ServiceImage, ServiceBannerImage FROM mst_servicedata WHERE ServiceID = ?";
      db.query(getOldSql, [ServiceID], (err, oldResults) => {
        if (err || oldResults.length === 0) {
          return res.status(400).json({ success: false, message: "Invalid ServiceID" });
        }
        const old = oldResults[0];
        const finalServiceImage = ServiceImage || old.ServiceImage;
        const finalBannerImage = ServiceBannerImage || old.ServiceBannerImage;
        const updateSql = `
          UPDATE mst_servicedata SET 
            ServiceName = ?, 
            ServiceNameURL = ?, 
            ServiceImage = ?, 
            ServiceBannerImage = ?, 
            SmallDescription = ?, 
            Description = ?, 
            ActiveStatus = ?, 
            MetaTitle = ?, 
            MetaKeywords = ?, 
            MetaDescriptions = ?, 
            MetaSchema = ?, 
            UpdatedBy = ?, 
            UpdatedOn = ?, 
            DisplayOnHome = ? ,
            DisplayOrder = ?
          WHERE ServiceID = ?
        `;
        db.query(updateSql, [
          ServiceName,
          ServiceNameURL,
          finalServiceImage,
          finalBannerImage,
          SmallDescription,
          Description,
          ActiveStatus,
          MetaTitle,
          MetaKeywords,
          MetaDescriptions,
          MetaSchema,
          UpdatedBy,
          currentTime,
          DisplayOnHome,
          DisplayOrder,
          ServiceID
        ], (err) => {
          if (err) return res.status(500).json({ success: false, message: "Update failed", error: err.message });
          return res.json({ success: true, message: "Service updated successfully" });
        });
      });
    } else {
      const insertSql = `
        INSERT INTO mst_servicedata (
          ServiceName, ServiceNameURL, ServiceImage, ServiceBannerImage, SmallDescription,
          Description, ActiveStatus, MetaTitle, MetaKeywords, MetaDescriptions,
          MetaSchema, PostedDate, UpdatedBy, UpdatedOn, DisplayOnHome , DisplayOrder
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?)
      `;
      db.query(insertSql, [
        ServiceName || "",
        ServiceNameURL || "",
        ServiceImage,
        ServiceBannerImage,
        SmallDescription || "",
        Description || "",
        ActiveStatus,
        MetaTitle || "",
        MetaKeywords || "",
        MetaDescriptions || "",
        MetaSchema || "",
        currentTime,
        UpdatedBy || "Admin",
        currentTime,
        DisplayOnHome,
        DisplayOrder
      ], (err, result) => {
        if (err) return res.status(500).json({ success: false, message: "Insert failed", error: err.message });
        return res.json({ success: true, message: "Service created successfully" });
      });
    }
  });
};




// DELETE service
exports.deleteService = (req, res) => {
  const ServiceID = req.params.ServiceID;
  const sql = 'DELETE FROM mst_servicedata WHERE ServiceID = ?';
  db.query(sql, [ServiceID], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error' });
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Service not found' });
    }
    res.json({ success: true, message: 'Service deleted successfully' });
  });
};


//Update status
exports.updateActiveStatus = (req, res) => {
  const { ServiceID, ActiveStatus } = req.body;
  if (!ServiceID || ActiveStatus === undefined) {
    return res.status(400).json({ success: false, message: "Missing ID or ActiveStatus" });
  }
  const sql = ` UPDATE mst_servicedata SET ActiveStatus = ?, UpdatedOn = NOW() WHERE ServiceID = ? `;
  db.query(sql, [ActiveStatus, ServiceID], (err, result) => {
    if (err) {
      console.error("Error updating status:", err);
      return res.status(500).json({ success: false, message: "Database error" });
    }
    res.json({ success: true, message: "Status updated successfully" });
  });
};




// UPDATE display order for services
exports.updateDisplayOrder = (req, res) => {
  const updates = req.body;
  if (!Array.isArray(updates)) {
    return res.status(400).json({ success: false, message: 'Invalid data format' });
  }
  const updatePromises = updates.map(({ ServiceID, DisplayOrder }) => {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE mst_servicedata SET DisplayOrder = ? WHERE ServiceID = ?';
      db.query(sql, [DisplayOrder, ServiceID], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  });
  Promise.all(updatePromises)
    .then(() => res.json({ success: true, message: 'Display order updated successfully' }))
    .catch(err => {
      console.error('Error updating display order:', err);
      res.status(500).json({ success: false, message: 'Database error', error: err.message });
    });
};




// GET max display order for services
exports.getMaxDisplayOrder = (req, res) => {
  const sql = 'SELECT MAX(DisplayOrder) AS maxOrder FROM mst_servicedata';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err.message });
    const maxOrder = results[0]?.maxOrder || 0;
    res.json({ success: true, maxOrder });
  });
};
