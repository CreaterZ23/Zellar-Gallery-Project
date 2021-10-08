

function ArtSeller({sellerData, sellerPieces, reviews}){
    const{seller_name} = sellerData
    const{title, image, date, artist, medium, dimensions, city, price, in_stock} = sellerPieces
   
    const{rating, comment}=reviews
    return (
        <div className="details">
        <h1>{seller_name}</h1>
        <img src={image} alt={"art name"} />
        <h4>{title}</h4>
        <p>Price: ${price}</p>
        <p>Date Item Listed: {date}</p>
        <p>This work originates from {city?city:"unknown"} and was created by {artist}. The medium used was {medium} and the dimensions are {dimensions}.</p>
        <p>{comment}</p>
    </div>
    )

}

export default ArtSeller;