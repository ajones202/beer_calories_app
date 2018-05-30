class ListController < ApplicationController
  def create
    @lists = lists.new(list_params)

    if lists.save
      render json: @lists

    else
      render json: @lists.errors, status: :unprocessable_entity
    end


  end

  def index
    @lists = Lists.all
    render json: {
      message: "nailed the index method.",
      all: @lists

    }
  end
  def show
     @lists = Lists.find(params[:id])
      render json: {
      id: @lists

    }
  end
end
