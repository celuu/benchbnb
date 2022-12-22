
json.benches do 
    @benches.each do |bench|
        json.set! bench.title do
            json.extract! bench, :title, :description, :price, :seating, :lat, :lng, :id
        end
    end
end