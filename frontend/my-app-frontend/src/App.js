import React, { useState, useEffect }  from "react";
import Header from "./components/Header";
import ArtGallery from "./components/ArtGallery";
import ArtForm from "./components/ArtForm";
import ArtSellers from "./components/ArtSellers";
import ArtSeller from "./ArtSeller";
import ArtDetails from "./components/ArtDetails";

import {Switch, Route} from 'react-router-dom';


function App() {
  const[artworks, setArtworks] = useState([]);
  const[piece, setPiece]=useState([]);
  const[reviews, setReviews]=useState([]);
  const[update, setUpdate] = useState(false);
  const[sellers, setSellers] = useState([])
  const[sellerData, setSellerData]= useState([])
  const[sellerPieces, setSellerPieces]=useState([])
  function getPieces(){
    fetch(`http://localhost:9292/pieces`)
    .then(resp => resp.json())
    .then(artworks => setArtworks(artworks))
  }

  useEffect(()=>{
    getPieces();
  },[update]);

  function handleDeletion(id){
    fetch(`http://localhost:9292/pieces/${id}`,{
      method: 'Delete'
    })
    .then(
      setUpdate(!update)
    )
  }

  function handleOnePiece(id){
    fetch(`http://localhost:9292/pieces/${id}`)
    .then(resp => resp.json())
    .then(piece=>{
      setPiece(piece)
      setReviews(piece.reviews)
    })
  }

  function handleOneSeller(id){
    fetch(`http://localhost:9292/sellers/${id}`)
    .then(resp => resp.json())
    .then(data=>{
      setSellerData(data)
      setSellerPieces(data.pieces)
    })
  }  
 
    fetch(`http://localhost:9292/sellers`)
      .then(resp=> resp.json())
      .then(data=>{
        setSellers(data)
      })

      function handleSellerDeletion(id){
        fetch(`http://localhost:9292/sellers/${id}`,{
          method: 'Delete'
        })
        .then(setUpdate(!update))
    }
  

  return (
    <div className="app">
      <Header />

      <Switch>

        <Route path="/art/new">
          <ArtForm />
        </Route>

        <Route path="/art/sellers">
          <ArtSellers 
          sellers={sellers}
          handleOneSeller={handleOneSeller}
          sellerPieces={sellerPieces}
          handleSellerDeletion={handleSellerDeletion}
          />
        </Route>

        <Route path="/art/details">
          <ArtDetails
            piece={piece}
            reviews={reviews}
          />
        </Route>

        <Route path="/art/seller">
          <ArtSeller
            sellerData={sellerData}
            sellerPieces={sellerPieces}
            reviews={reviews}
          />
        </Route>

        <Route path="/">
          <ArtGallery 
          artworks={artworks}
          handleDeletion={handleDeletion}
          handleOnePiece={handleOnePiece}
          />
        </Route>
        

      </Switch>
    
    </div>
  );
}

export default App;
