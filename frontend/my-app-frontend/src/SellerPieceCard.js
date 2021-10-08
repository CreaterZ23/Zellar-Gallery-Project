function SellerPieceCard(sellerPiece){
    const{title, price}=sellerPiece
console.log(sellerPiece)
    return(
        <div className="details">
        <h1>{title}</h1>
        <p>{price}</p>
    </div>
    )
}


export default SellerPieceCard;