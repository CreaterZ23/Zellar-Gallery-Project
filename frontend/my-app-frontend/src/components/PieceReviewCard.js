import React, {useState} from "react";


function PieceReviewCard({comment, rating}) {
    let paintEmoji = "🎨"
    let newRating = paintEmoji.repeat(rating)
    

  return (
    <li className="review-card">
      <h4>Rating: {newRating}</h4>
      <p>{comment}</p>
    </li>
  );
}

export default PieceReviewCard;
