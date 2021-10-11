import React from "react";


function PieceReviewCard({comment, rating}) {
    let paintEmoji = "🎨"
    let newRating = paintEmoji.repeat(rating)
    

  return (
    <div className="review-card">
      <h4>Rating: {newRating}</h4>
      <p>{comment}</p>
    </div>
  );
}

export default PieceReviewCard;
