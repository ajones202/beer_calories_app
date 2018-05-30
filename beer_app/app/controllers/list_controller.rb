class ListController < ApplicationController
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
