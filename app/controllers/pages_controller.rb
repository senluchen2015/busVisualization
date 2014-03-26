class PagesController < ApplicationController
  def index
  	@buses=Cta.find(:all);
  end	
end
