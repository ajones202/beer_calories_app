  create_table "lists", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "beer_id"
    t.string "name"
    t.string "img"
    t.integer "calories"
    t.integer "abv"
    t.integer "oz"
    t.integer "carbs"
    t.integer "walking"
    t.integer "running"
    t.integer "biking"
  end


