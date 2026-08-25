const express = require("express");
const app = express();

const { initializeDatabase } = require("./db/db.connect");
const Hotel = require("./models/hotel.models");

initializeDatabase();

app.use(express.json());

// Read hotel by name

app.get("/hotels/:hotelName", async (req, res) => {
  try {
    const hotel = await readHotelByName(req.params.hotelName);

    if (hotel) {
      res.json(hotel);
    } else {
      res.status(404).json({ error: "Hotel not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch hotel." });
  }
});

async function readHotelByName(hotelName) {
  try {
    const hotel = await Hotel.findOne({ name: hotelName });
    return hotel;
  } catch (error) {
    throw error;
  }
}

// Read all hotels

app.get("/hotels", async (req, res) => {
  try {
    const hotels = await readAllHotels();

    if (hotels.length != 0) {
      res.json(hotels);
    } else {
      res.status(404).json({ error: "No hotels found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch hotels." });
  }
});

async function readAllHotels() {
  try {
    const hotels = await Hotel.find();
    return hotels;
  } catch (error) {
    console.log(error);
  }
}

// Read hotel by phone number

app.get("/hotels/directory/:phoneNumber", async (req, res) => {
  try {
    const hotel = await readHotelByPhoneNumber(req.params.phoneNumber);

    if (hotel) {
      res.json(hotel);
    } else {
      res.status(404).json({ error: "Hotel not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch hotel." });
  }
});

async function readHotelByPhoneNumber(phoneNumber) {
  try {
    const hotel = await Hotel.findOne({ phoneNumber: phoneNumber });
    return hotel;
  } catch (error) {
    console.log(error);
  }
}

// Read hotels by rating

app.get("/hotels/rating/:hotelRating", async (req, res) => {
  try {
    const hotels = await readHotelByRating(req.params.hotelRating);

    if (hotels.length != 0) {
      res.json(hotels);
    } else {
      res.status(404).json({ error: "No hotels found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch hotels." });
  }
});

async function readHotelByRating(hotelRating) {
  try {
    const hotels = await Hotel.find({ rating: Number(hotelRating) });
    return hotels;
  } catch (error) {
    console.log(error);
  }
}

// Read hotels by category

app.get("/hotels/category/:hotelCategory", async (req, res) => {
  try {
    const hotels = await readHotelByCategory(req.params.hotelCategory);

    if (hotels.length != 0) {
      res.json(hotels);
    } else {
      res.status(404).json({ error: "No hotels found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch hotels." });
  }
});

async function readHotelByCategory(hotelCategory) {
  try {
    const hotels = await Hotel.find({ category: hotelCategory });
    return hotels;
  } catch (error) {
    console.log(error);
  }
}

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
