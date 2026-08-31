const express = require("express");
const app = express();

const { initializeDatabase } = require("./db/db.connect");
const Restaurant = require("./models/restaurant.models");

initializeDatabase();

app.use(express.json());

// const newRestaurant = {
//   name: "Somi",
//   cuisine: ["Greek"],
//   location: "11 Main Road, Gem",
//   rating: 4.3,
//   reviews: [],
//   website: "https://somi-example.com",
//   phoneNumber: "+1234997390",
//   openHours: "Tue-Sun: 11:00 AM - 10:00 PM",
//   priceRange: "$$ (11-30)",
//   reservationsNeeded: false,
//   isDeliveryAvailable: true,
//   menuUrl: "https://somi-example.com/menu",
//   photos: [
//     "https://example.com/somi-photo1.jpg",
//     "https://example.com/somi-photo2.jpg",
//   ],
// };

async function createRestaurant(newRestaurant) {
  try {
    const restaurant = new Restaurant(newRestaurant);
    const savedRestaurant = await restaurant.save();
    return savedRestaurant;
  } catch (error) {
    throw error;
  }
}

app.post("/restaurants", async (req, res) => {
  try {
    const savedRestaurant = await createRestaurant(req.body);

    res.status(201).json({
      message: "Restaurant added successfully.",
      restaurant: savedRestaurant,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to add restaurant.",
    });
  }
});

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

// Delete restaurant by ID
async function deleteRestaurantById(restaurantId) {
  try {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(restaurantId);
    return deletedRestaurant;
  } catch (error) {
    throw error;
  }
}

app.delete("/restaurants/:restaurantId", async (req, res) => {
  try {
    const deletedRestaurant = await deleteRestaurantById(
      req.params.restaurantId
    );

    if (deletedRestaurant) {
      res.status(200).json({
        message: "Restaurant deleted successfully.",
      });
    } else {
      res.status(404).json({
        error: "Restaurant not found.",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to delete restaurant.",
    });
  }
});


// Update restaurant cuisine by ID
async function updateRestaurantById(restaurantId, dataToUpdate) {
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      restaurantId,
      dataToUpdate,
      { new: true }
    );
    return updatedRestaurant;
  } catch (error) {
    throw error;
  }
}

app.post("/restaurants/:restaurantId", async (req, res) => {
  try {
    const updatedRestaurant = await updateRestaurantById(
      req.params.restaurantId,
      req.body
    );

    if (updatedRestaurant) {
      res.status(200).json({
        message: "Restaurant updated successfully.",
        restaurant: updatedRestaurant,
      });
    } else {
      res.status(404).json({
        error: "Restaurant not found.",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to update restaurant.",
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
