import React,{useEffect} from "react";
import "./review.css";
import { useNavigate } from "react-router-dom";

function Review() {

  return (
    <div className="review-wrapper">
      <h1 className="review-title">Customer Reviews</h1>

      <form className="review-form">
        <div className="input-group">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="input-group">
          <label>Rating</label>
          <select>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
        </div>

        <div className="input-group">
          <label>Comment</label>
          <textarea rows="4" placeholder="Write your review here..." />
        </div>

        <button type="submit" className="submit-btn">Submit Review</button>
      </form>

      
    </div>
  );
}

export default Review;