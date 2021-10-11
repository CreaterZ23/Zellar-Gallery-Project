class SellersController < ApplicationController
    get '/sellers' do
        Seller.all.to_json
    end
    
    get '/sellers/:id' do
        seller = Seller.find(params[:id])
        seller.to_json(include: :pieces)
    end
    
    post '/seller' do
        newSeller = Seller.create(seller_name:params[:seller_name], password:params[:password])
        newSeller.to_json
    end
    
    delete '/sellers/:id' do
        seller = Seller.find(params[:id])
        seller.destroy
    end
    
end