json.user do 
    json.extract! @bench, :title, :description, :price, :seating, :lat, :lng
end 