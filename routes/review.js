const express = require("express");
const router = express.Router({mergeParams:true});
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const Listing = require("../models/listing.js")
const reviewController = require("../controllers/reviews.js");

const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");

// Post route
router.post("/" ,isLoggedIn,validateReview,wrapAsync(reviewController.createReview));
//Delete reviews route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports= router;