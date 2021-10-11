class BuyersController < ApplicationController
    get '/buyers' do
        Buyer.all.to_json
    end
    
    get '/buyers/:id' do
        buyer = Buyer.find(params[:id])
        buyer.to_json(include: :pieces)
    end
    
    post '/buyer' do
        newBuyer = Buyer.create(buyer_name:params[:buyer_name], password:params[:password])
        newBuyer.to_json
    end

    delete '/buyers/:id' do
        buyer = Buyer.find(params[:id])
        buyer.destroy
    end
end