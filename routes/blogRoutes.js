const express = require('express');
const router = express.Router();
const multer = require('multer');
const blogController = require('../API/blogController');
const basicAuth = require('../middleware/basicAuth'); // << Import the middleware
const upload = require('../middleware/upload');

router.get('/all-blogs', basicAuth, blogController.getAllBlogs);
router.get('/fill-blog-data', basicAuth, blogController.getBlogById);
router.post(
  '/save-or-update-blog',
  upload.fields([
    { name: 'BlogImage', maxCount: 1 },
    { name: 'BlogBannerImage', maxCount: 1 }
  ]),
  basicAuth, blogController.saveOrUpdateBlog
);
router.delete('/delete-blog/:BlogID', basicAuth, blogController.deleteBlog);
router.post("/update-status", basicAuth, blogController.updateActiveStatus);
router.get('/blogs', basicAuth, blogController.getAllActiveBlogs);
module.exports = router;
