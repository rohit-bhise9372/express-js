const express = require("express");
const app = express();

const { initializeDatabase } = require("./db/db.connect");
const Restaurant = require("./models/restaurant.models");

initializeDatabase();

app.use(express.json());

// Find a restaurant by name
app.get("/restaurants/:restaurantName", async (req, res) => {
  try {
    const restaurant = await readRestaurantByName(req.params.restaurantName);

    if (restaurant) {
      res.json(restaurant);
    } else {
      res.status(404).json({ error: "Restaurant not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurant." });
  }
});

async function readRestaurantByName(restaurantName) {
  try {
    const restaurant = await Restaurant.findOne({ name: restaurantName });
    return restaurant;
  } catch (error) {
    throw error;
  }
}

// Get all restaurants
app.get("/restaurants", async (req, res) => {
  try {
    const restaurants = await readAllRestaurants();

    if (restaurants.length != 0) {
      res.json(restaurants);
    } else {
      res.status(404).json({ error: "No restaurants found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurants." });
  }
});

async function readAllRestaurants() {
  try {
    const allRestaurants = await Restaurant.find();
    return allRestaurants;
  } catch (error) {
    console.log(error);
  }
}

// Get restaurant by phone number
app.get("/restaurants/directory/:phoneNumber", async (req, res) => {
  try {
    const restaurant = await readRestaurantByPhoneNumber(
      req.params.phoneNumber,
    );

    if (restaurant) {
      res.json(restaurant);
    } else {
      res.status(404).json({ error: "Restaurant not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurant." });
  }
});

async function readRestaurantByPhoneNumber(phoneNumber) {
  try {
    const restaurant = await Restaurant.findOne({ phoneNumber: phoneNumber });
    return restaurant;
  } catch (error) {
    console.log(error);
  }
}

// Get restaurants by cuisine
app.get("/restaurants/cuisine/:cuisineName", async (req, res) => {
  try {
    const restaurants = await readRestaurantByCuisine(req.params.cuisineName);

    if (restaurants.length != 0) {
      res.json(restaurants);
    } else {
      res.status(404).json({ error: "No restaurants found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurants." });
  }
});

async function readRestaurantByCuisine(cuisineName) {
  try {
    const restaurants = await Restaurant.find({ cuisine: cuisineName });
    return restaurants;
  } catch (error) {
    console.log(error);
  }
}

// Get restaurants by location
app.get("/restaurants/location/:restaurantLocation", async (req, res) => {
  try {
    const restaurants = await readRestaurantByLocation(
      req.params.restaurantLocation,
    );

    if (restaurants.length != 0) {
      res.json(restaurants);
    } else {
      res.status(404).json({ error: "No restaurants found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurants." });
  }
});

async function readRestaurantByLocation(restaurantLocation) {
  try {
    const restaurants = await Restaurant.find({
      location: restaurantLocation,
    });
    return restaurants;
  } catch (error) {
    console.log(error);
  }
}

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
