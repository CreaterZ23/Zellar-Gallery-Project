class PiecesController < ApplicationController
    get '/pieces' do 
        Piece.all.to_json
    end
    
    delete '/pieces/:id' do
        piece = Piece.find(params[:id])
        piece.destroy
    end
    
    get '/pieces/:id' do
        piece = Piece.find(params[:id])
        piece.to_json(include: :reviews)
    end

    post '/piece' do 
        newPiece = Piece.create( title: params[:title],
          image:params[:image],
          date:params[:date],
          artist:params[:artist],
          medium: params[:medium],
          dimensions: params[:dimensions],
          city:params[:city],
          price: params[:price],
          in_stock: params[:in_stock],
          seller_id: Seller.find_by(seller_name: params[:seller_name]).id )
        newPiece.to_json
      end
      
end