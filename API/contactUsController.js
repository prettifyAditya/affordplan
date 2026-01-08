const db = require('../db');

// Get all leads
exports.getAllLeads = (req, res) => {
  const sql = ` 
    SELECT 
      ROW_NUMBER() OVER (ORDER BY ContactID DESC) AS SerialNo, 
      ContactID, 
      FullName, 
      PhoneNo, 
      EmailID,
      City,
      State,
      Pincode,
      Product,
      Message, 
      EnquiryType, 
      EnquiryFor, 
      PageName, 
      DATE_FORMAT(PostedDate, '%d %b %Y') AS PostedDate 
    FROM mst_contact_us 
    ORDER BY ContactID DESC 
  `;
  db.query(sql, (err, results) => {
    if (err) {
      console.error('MySQL error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
};

exports.saveNewEnquiry = (req, res) => {
  const {
    FullName,
    EmailID,
    PhoneNo,
    City,
    State,
    Pincode,
    Product,
    Message,
    EnquiryType,
    EnquiryFor,
    PageName = "/thank-you",
  } = req.body;
  const currentTime = new Date();
  const IsRead = 0;
  const insertSql = `
    INSERT INTO mst_contact_us (
      FullName,
      EmailID,
      PhoneNo,
      City,
      State,
      Pincode,
      Product,
      Message,
      EnquiryType,
      EnquiryFor,
      PageName,
      PostedDate,
      IsRead
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    FullName,
    EmailID,
    PhoneNo,
    City,
    State,
    Pincode,
    Product,
    Message,
    EnquiryType,
    EnquiryFor,
    PageName,
    currentTime,
    IsRead,
  ];
  db.query(insertSql, values, (err, result) => {
    if (err) {
      console.error("DB Error:", err);
      return res.status(500).json({
        success: false,
        message: "Failed to save enquiry",
        error: err.message
      });
    }
    res.json({
      success: true,
      message: "Enquiry submitted successfully",
      contactId: result.insertId
    });
  });
};

// Delete a lead
exports.deleteEnquiry = (req, res) => {
  const ContactID = req.params.ContactID;
  const sql = 'DELETE FROM mst_contact_us WHERE ContactID = ?';
  db.query(sql, [ContactID], (err, result) => {
    if (err) {
      console.error('MySQL error:', err);
      return res.status(500).json({
        success: false,
        message: 'Database error'
      });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Enquiry not found'
      });
    }
    res.json({
      success: true,
      message: 'Enquiry deleted successfully'
    });
  });
};