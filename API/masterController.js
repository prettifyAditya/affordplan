const db = require("../db");

exports.getPartnerPageData = (req, res) => {
  const sqlPartnerTestimonials = `
    SELECT 
      TestimonialID,
      TestimonialName,
      TestimonialNameURL,
      TestimonialImage,
      Description,
      Location,
      DisplayOrder
    FROM mst_testimonialdata
    WHERE ActiveStatus = 1 AND TestimonialType = 'Partner'
    ORDER BY DisplayOrder ASC
  `;
  const sqlPartnerLogo = `
    SELECT 
      PartnerLogoID, 
      PartnerLogoImage, 
      DisplayOrder
    FROM mst_partnerlogodata
    WHERE ActiveStatus = 1
    ORDER BY DisplayOrder ASC
  `;
  Promise.all([
    new Promise((resolve, reject) => {
      db.query(sqlPartnerTestimonials, (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    }),
    new Promise((resolve, reject) => {
      db.query(sqlPartnerLogo, (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    })
  ])
    .then(([partnerTestimonials, partnerLogos]) => {
      res.json({
        partnerTestimonials,
        partnerLogos
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};


exports.getMediaPageData = (req, res) => {
  const { home } = req.query;
  let sqlMediaData = `
    SELECT 
      MediaID,
      Title,
      MediaDate,
      MediaImage,
      ThirdPartyLink,
      DisplayOrder
    FROM mst_mediadata
    WHERE ActiveStatus = 1
  `;
  if (home === 'true' || home === '1') {
    sqlMediaData += ` AND DisplayOnHome = 1`;
  }
  sqlMediaData += ` ORDER BY DisplayOrder ASC`;
  db.query(sqlMediaData, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
};


exports.getJobCategoryData = (req, res) => {
  const sqlJobCategoryData = `
     SELECT 
      JobCategoryID,
      JobCategoryName,
      JobCategoryDescription,
      SmallDescription,
      JobLocation,
      DisplayOrder,
      ActiveStatus
    FROM mst_jobcategorydata
    WHERE ActiveStatus = 1
    ORDER BY DisplayOrder ASC
  `;
  const sqlTestimonials = `
    SELECT 
      TestimonialID,
      TestimonialName,
      TestimonialNameURL,
      TestimonialImage,
      Description,
      Location,
      DisplayOrder
    FROM mst_testimonialdata
    WHERE ActiveStatus = 1 AND TestimonialType = 'Career'
    ORDER BY DisplayOrder ASC
  `;
  db.query(sqlJobCategoryData, (err, jobResults) => {
    if (err) {
      return res.status(500).json({ error: "Database error on JobCategory" });
    }
    db.query(sqlTestimonials, (err2, testimonialResults) => {
      if (err2) {
        return res.status(500).json({ error: "Database error on Testimonials" });
      }
      res.json({
        jobData: jobResults,
        testimonialData: testimonialResults,
      });
    });
  });
};
