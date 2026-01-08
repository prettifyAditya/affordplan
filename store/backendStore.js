// store/backendStore.js
import { configureStore } from "@reduxjs/toolkit";
import { authAPISlice } from "./backendSlice/authAPISlice";
import { dashboardAPISlice } from "./backendSlice/dashboardAPISlice";
import { blogAPISlice } from "./backendSlice/blogAPISlice";
import { staticAPISlice } from "./backendSlice/staticAPISlice";
import { contactUsAPISlice } from "./backendSlice/contactUsAPISlice";
import { testimonialAPISlice } from "./backendSlice/testimonialAPISlice";
import { seoAPISlice } from "./backendSlice/seoAPISlice";
import { serviceAPISlice } from "./backendSlice/serviceAPISlice";
import { categoryAPISlice } from "./backendSlice/categoryAPISlice";
import { partnerLogoAPISlice } from "./backendSlice/partnerLogoAPISlice";
import { careerEnquiryApi } from "./backendSlice/careerEnquiryApi";
import { careerApi } from "./backendSlice/careerAPISlice";
import { teamAPISlice } from "./backendSlice/teamAPISlice";
import { milestoneAPISlice } from "./backendSlice/milestoneAPISlice";
import { admindashboardAPISlice } from "./backendSlice/admindashboardAPISlice";
import { mediaAPISlice } from "./backendSlice/mediaAPISlice";
import { productAPISlice } from "./backendSlice/productAPISlice";


export const backendStore = configureStore({
  reducer: {
    [authAPISlice.reducerPath]: authAPISlice.reducer,
    [dashboardAPISlice.reducerPath]: dashboardAPISlice.reducer,
    [blogAPISlice.reducerPath]: blogAPISlice.reducer,
    [staticAPISlice.reducerPath]: staticAPISlice.reducer,
    [contactUsAPISlice.reducerPath]: contactUsAPISlice.reducer,
    [testimonialAPISlice.reducerPath]: testimonialAPISlice.reducer,
    [seoAPISlice.reducerPath]: seoAPISlice.reducer,
    [serviceAPISlice.reducerPath]: serviceAPISlice.reducer,
    [categoryAPISlice.reducerPath]: categoryAPISlice.reducer,
    [partnerLogoAPISlice.reducerPath]: partnerLogoAPISlice.reducer,
    [careerEnquiryApi.reducerPath]: careerEnquiryApi.reducer,
    [careerApi.reducerPath]: careerApi.reducer,
    [teamAPISlice.reducerPath]: teamAPISlice.reducer,
    [admindashboardAPISlice.reducerPath]: admindashboardAPISlice.reducer,
    [milestoneAPISlice.reducerPath]: milestoneAPISlice.reducer,
    [mediaAPISlice.reducerPath]: mediaAPISlice.reducer,
    [productAPISlice.reducerPath]: productAPISlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authAPISlice.middleware,
      blogAPISlice.middleware,
      staticAPISlice.middleware,
      contactUsAPISlice.middleware,
      testimonialAPISlice.middleware,
      seoAPISlice.middleware,
      serviceAPISlice.middleware,
      categoryAPISlice.middleware,
      partnerLogoAPISlice.middleware,
      careerEnquiryApi.middleware,
      careerApi.middleware,
      teamAPISlice.middleware,
      admindashboardAPISlice.middleware,
      milestoneAPISlice.middleware,
      mediaAPISlice.middleware,
      productAPISlice.middleware,
    ),
});