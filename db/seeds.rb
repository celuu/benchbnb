# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ApplicationRecord.transaction do 
  puts 'Destroying tables...'
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all

  puts 'Resetting primary keys...'
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')

  puts 'Creating users...'
  # Create one user with an easy to remember username, email, and password:
  User.create!({
    username: 'Demo-lition', 
    email: 'demo@user.io', 
    password: 'password'
  })

  # More users
  10.times do 
    User.create!({
      username: Faker::Internet.unique.username(specifier: 3),
      email: Faker::Internet.unique.email,
      password: 'password'
    }) 
  end

  Bench.create!({
    title: "Bench1",
    description: 'nice bench',
    price: 1000,
    seating: 4,
    lat: -10.61081,
    lng: -38.47062
  })
  Bench.create!({
    title: 'Bench2',
    description: 'coolbench',
    price: 500,
    seating: 3,
    lat: -48.82353,
    lng: -69.05150
  })
  Bench.create!({
    title: 'Bench3',
    description: 'crazybench',
    price: 750,
    seating: 6,
    lat: 29.41805,
    lng: 15.62046
  })
  Bench.create!({
    title: 'Bench4',
    description: 'redbench',
    price: 125,
    seating: 2,
    lat: 67.75571,
    lng: 23.03628
  })
  Bench.create!({
    title: 'Bench5',
    description: 'bluebench',
    price: 100,
    seating: 10,
    lat: 58.37861,
    lng: 16.38857
  })

  puts 'Done!'
end