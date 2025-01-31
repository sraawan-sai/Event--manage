const express = require("express");
const router = express.Router();
const eventRouter = router;
const Event = require("../schemas/EventSchema");

// Post Event
eventRouter.post("/", async (req, res) => {
  const { eventName, eventDate, venue, eventTime,isRegister } = req.body;

  try {
    const createEvent = new Event({
      eventName,
      eventDate,
      venue,
      eventTime,isRegister
    });
    await createEvent.save();
    res.status(201).json({ message: "Event Created" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Saved Events
eventRouter.get("/", async (req, res) => {
  try {
    const getEvent = await Event.find();
    if (!getEvent || getEvent.length === 0) {
      return res.status(404).json({ message: "Event data not found" }); // Return 404 if no events found
    }
    res.status(200).json(getEvent); // Send JSON response
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Event by ID
eventRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  
  try {
    const getById = await Event.findById(id);
    if (!getById) {
      return res.status(404).json({ message: "ID not found" });
    }
    res.status(200).json(getById);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = eventRouter;
