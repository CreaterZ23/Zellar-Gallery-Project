class ReviewsController < ApplicationController
    get '/reviews' do
        Review.all.to_json
    end
    post '/reviews' do
        newReview = Review.create(rating: params[:rating], comment: params[:comment], piece_id: params[:piece_id])
        newReview.to_json
    end

end