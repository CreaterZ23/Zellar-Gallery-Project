import React,{useState} from "react"
import PieceReviewCard from "./PieceReviewCard"

function ArtDetails({piece, reviews}){
    const{title, image, date, artist, medium, dimensions, city, price, in_stock}=piece
    const[displayForm, setDisplayForm]=useState(false)
        
    const[formData, setFormData] =useState({
          rating: "",
          comment: "",
          piece_id: piece.id
        })
    let eachReview = reviews.map((review)=>{
        return(
            <PieceReviewCard
                key={review.id}
                comment={review.comment}
                rating={review.rating}
            />
        )})
        console.log(piece.id)
    
        function displayReviewForm(){
          setDisplayForm(!displayForm)
        }
    
        function handleFormChange(event){
          setFormData({ ...formData, [event.target.name]: event.target.value })
        }
    
        function handleReview(event){
          event.preventDefault()
          fetch('http://localhost:9292/reviews',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(resp=>resp.json())
        .then(newData=>{
            
         
            console.log(newData)
        })
        }
    
    
        const reviewForm = 
        <div>
          <form>
            <label> Rating:
              <select name="rating" onChange={handleFormChange}>
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              </select>
            </label>
            <label>Comment:
            <input value={formData.comment} onChange={handleFormChange} type="text" name="comment" placeholder='type here'></input>
            </label>
            <button  onClick={(event)=>handleReview(event)} type="submit">Submit Review</button>
          </form>
        </div>








    return (
        <div className="details">
            <img src={image} alt={"art name"} />
            <h4>{title}</h4>
            <p>Price: ${price}</p>
            <p>Date Item Listed: {date}</p>
            <p>This work originates from {city?city:"unknown"} and was created by {artist}. The medium used was {medium} and the dimensions are {dimensions}.</p>
            <ul>
                {eachReview}
            </ul>
            <button onClick={displayReviewForm}>Add a review</button>
      {displayForm ? reviewForm: null}
      
        </div>
    )

}

export default ArtDetails;