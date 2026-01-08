require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const app = express();
const path = require("path");
const PORT = 3002;


app.use('/OnlineImages', express.static(path.join(__dirname, 'uploads', 'OnlineImages')));
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const staticRoutes = require('./routes/staticRoutes');
const contactUsRoutes = require('./routes/contactUsRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const seoRoutes = require('./routes/seoRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const categoryRoutes = require("./routes/categoryRoutes");
const partnerLogoRoutes = require('./routes/partnerLogoRoutes');
const careerEnquiryRoutes = require("./routes/careerEnquiryRoutes");
const careerRoutes = require("./routes/careerRoutes");
const teamRoutes = require("./routes/teamRoutes");
const milestoneRoutes = require("./routes/milestoneRoutes");
const admindashboardRoutes = require('./routes/admindashboardRoutes');
const mediaRoutes = require('./routes/mediaRoutes');
const productRoutes = require('./routes/productRoutes');
const homeRoutes = require('./routes/homeRoutes');
const masterRoutes = require('./routes/masterRoutes');


app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(session({
  secret: "xjdbckdjbcdkchb",
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    httpOnly: true,
  },
}));


// Use modular routes For Admin
app.use('/api/auth', authRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/page', staticRoutes);
app.use('/api/contact', contactUsRoutes);
app.use('/api/testimonial', testimonialRoutes);
app.use('/api/seo', seoRoutes);
app.use('/api/service', serviceRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/partnerLogo", partnerLogoRoutes);
app.use("/api/careerEnquiry", careerEnquiryRoutes);
app.use("/api/career", careerRoutes);
app.use("/api/team", teamRoutes);
app.use('/api/milestone', milestoneRoutes);
app.use('/api/dashboard', admindashboardRoutes);
app.use('/api/media', mediaRoutes);
app.use('/api/product', productRoutes);
app.use('/api/home', homeRoutes);
app.use('/api/master', masterRoutes);





app.listen(PORT, (err) => {
  if (err) {
    console.error('❌ Failed to start server:', err);
  } else {
    console.log(`✅ Server running at http://localhost:${PORT}`);
  }
});