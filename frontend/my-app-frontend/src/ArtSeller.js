import SellerPieceCard from "./SellerPieceCard";

function ArtSeller({sellerData, sellerPieces,}){
    const{seller_name} = sellerData
    console.log(sellerPieces)
    const eachSellerPiece = sellerPieces.map(sellerPiece=> (
        <div key={sellerPiece.id}>
            <h2>{sellerPiece.artist}</h2>
            <p>{sellerPiece.title}</p>
            <img src={sellerPiece.image}></img>
            <p>${sellerPiece.price}</p>
        </div>
    ))
   
    
    return (
    <div className="details">
        <h1>{seller_name}</h1>
        <>{eachSellerPiece}</>
    </div>
    )

}

export default ArtSeller;