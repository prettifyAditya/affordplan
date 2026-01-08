const express = require('express');
const router = express.Router();
const multer = require('multer');
const seoController = require('../API/seoPageController');
const basicAuth = require('../middleware/basicAuth');
const upload = require('../middleware/upload');

router.get('/all-seos', basicAuth, seoController.getAllSeos);
router.get('/fill-seo-data', basicAuth, seoController.getSeoById);
router.post(
  '/save-or-update-seo',
  upload.fields([
    { name: 'SeoBannerImage', maxCount: 1 }
  ]),
  basicAuth, seoController.saveOrUpdateSeo
);
router.delete('/delete-seo/:SeoID', basicAuth, seoController.deleteSeo);
router.post("/update-status", basicAuth, seoController.updateActiveStatus);
router.get('/seos', basicAuth, seoController.getAllActiveSeos);
router.get('/fetch-seo/:slug', basicAuth, seoController.getSeoDataBySlug);

module.exports = router;
