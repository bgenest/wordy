
require "faraday"
class Api::V1::ForecastController < ApplicationController
  OPEN_WEATHER_API_KEY = "c69164a3ec0a0d18a3351042b67b1e31"

  def show

  end

  def index
    url = "ttp://api.openweathermap.org/data/2.5/weather?q=#{city_name}&appid=#{OPEN_WEATHER_API_KEY}&units=imperial"
    api_response = Faraday.get(url)
    parsed_response = JSON.parse(api_response.body)
  
    status 200
    content_type :json
  
    json parsed_response
    binding.pry
  end

end