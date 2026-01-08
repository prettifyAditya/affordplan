const db = require('../db');

// GET all milestones
exports.getAllMilestones = (req, res) => {
  const sql = `
    SELECT 
      ROW_NUMBER() OVER (ORDER BY MilestoneID DESC) AS SerialNo,
      MilestoneID,
      Title,
      Description,
      MilestoneImage,
      ActiveStatus,
      DATE_FORMAT(PostedDate, '%d %b %Y') AS PostedDate
    FROM mst_milestonedata
    ORDER BY MilestoneID DESC
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.json(results);
  });
};

// GET milestone by ID
exports.getMilestoneById = (req, res) => {
  const MilestoneID = req.query.MilestoneID;
  if (!MilestoneID) {
    return res.status(400).json({
      success: false,
      message: "Missing Milestone ID"
    });
  }
  const milestoneSql = "SELECT * FROM mst_milestonedata WHERE MilestoneID = ? LIMIT 1";
  db.query(milestoneSql, [MilestoneID], (err, milestoneResults) => {
    if (err) {
      console.error("Error fetching milestone:", err);
      return res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
    if (milestoneResults.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Milestone not found"
      });
    }
    return res.status(200).json({
      success: true,
      data: milestoneResults[0],
    });
  });
};

// CREATE or UPDATE milestone
exports.saveOrUpdateMilestone = (req, res) => {
  const {
    MilestoneID,
    Title,
    Description,
    ActiveStatus,
    UpdatedBy
  } = req.body;
  const currentTime = new Date();
  const MilestoneImage = req.files?.MilestoneImage?.[0]?.filename || null;
  const checkDuplicateSql = `
    SELECT MilestoneID FROM mst_milestonedata 
    WHERE Title = ? 
    ${MilestoneID ? "AND MilestoneID != ?" : ""}
  `;
  const checkParams = MilestoneID ? [Title, MilestoneID] : [Title];
  db.query(checkDuplicateSql, checkParams, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    if (results.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Milestone with the same title already exists"
      });
    }
    if (MilestoneID) {
      const getOldSql = "SELECT MilestoneImage FROM mst_milestonedata WHERE MilestoneID = ?";
      db.query(getOldSql, [MilestoneID], (err, oldResults) => {
        if (err || oldResults.length === 0) {
          return res.status(400).json({
            success: false,
            message: "Invalid MilestoneID"
          });
        }
        const old = oldResults[0];
        const finalMilestoneImage = MilestoneImage || old.MilestoneImage;
        const updateSql = `
          UPDATE mst_milestonedata SET 
            Title = ?, 
            Description = ?, 
            MilestoneImage = ?, 
            ActiveStatus = ?, 
            UpdatedBy = ?, 
            UpdatedOn = ?
          WHERE MilestoneID = ?
        `;
        db.query(updateSql, [
          Title,
          Description,
          finalMilestoneImage,
          ActiveStatus,
          UpdatedBy,
          currentTime,
          MilestoneID
        ], (err) => {
          if (err) return res.status(500).json({
            success: false,
            message: "Update failed",
            error: err.message
          });
          return res.json({
            success: true,
            message: "Milestone updated successfully"
          });
        });
      });
    } else {
      const insertSql = `
        INSERT INTO mst_milestonedata (
          Title, 
          Description, 
          MilestoneImage, 
          ActiveStatus, 
          PostedDate, 
          UpdatedBy, 
          UpdatedOn
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;
      db.query(insertSql, [
        Title || "",
        Description || "",
        MilestoneImage,
        ActiveStatus,
        currentTime,
        UpdatedBy || "Admin",
        currentTime
      ], (err, result) => {
        if (err) return res.status(500).json({
          success: false,
          message: "Insert failed",
          error: err.message
        });
        return res.json({
          success: true,
          message: "Milestone created successfully"
        });
      });
    }
  });
};

// DELETE milestone
exports.deleteMilestone = (req, res) => {
  const MilestoneID = req.params.MilestoneID;
  const sql = 'DELETE FROM mst_milestonedata WHERE MilestoneID = ?';
  db.query(sql, [MilestoneID], (err, result) => {
    if (err) return res.status(500).json({
      success: false,
      message: 'Database error'
    });

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Milestone not found'
      });
    }
    res.json({
      success: true,
      message: 'Milestone deleted successfully'
    });
  });
};

// Update ActiveStatus
exports.updateActiveStatus = (req, res) => {
  const { MilestoneID, ActiveStatus } = req.body;
  if (!MilestoneID || ActiveStatus === undefined) {
    return res.status(400).json({
      success: false,
      message: "Missing MilestoneID or ActiveStatus"
    });
  }
  const sql = `
    UPDATE mst_milestonedata 
    SET ActiveStatus = ?, UpdatedOn = NOW() 
    WHERE MilestoneID = ?
  `;
  db.query(sql, [ActiveStatus, MilestoneID], (err, result) => {
    if (err) {
      console.error("Error updating status:", err);
      return res.status(500).json({
        success: false,
        message: "Database error"
      });
    }

    res.json({
      success: true,
      message: "Status updated successfully"
    });
  });
};