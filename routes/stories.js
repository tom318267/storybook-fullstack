const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Story = require("../models/Story");
const auth = require("../middleware/auth");
const User = require("../models/User");

// @route GET /stories
// @desc  Show all stories
// @access Private
router.get("/", auth, async (req, res) => {
  try {
    const stories = await Story.find().sort({ date: -1 });
    console.log(stories);
    res.json(stories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route GET /stories/:id
// @desc Get a story by id
// access Private
router.get("/:id", auth, async (req, res) => {
  try {
    const story = await Story.findById(req.params.id).populate("user");
    if (!story) {
      return res.status(404).json({ msg: "Story not found" });
    }
    res.json(story);
  } catch (err) {
    if (err.kind === "ObjectId") {
      res.status(404).json({ mgs: "Story not found" });
    }
    console.error(err.message);
  }
});

// @route POST /stories/add
// @desc  add story
router.post(
  "/add",
  [
    auth,
    [
      check("title", "Title is required").not().isEmpty(),
      check("body", "Text is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { title, body } = req.body;
      const user = await User.findById(req.user.id).select("-password");

      const newStory = new Story({
        title,
        body,
        user: req.user.id,
      });

      const story = await newStory.save();

      res.json(story);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route PUT /stories/:id
// @desc Update story
// @access Private
router.put("/:id", auth, async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);

    if (!story) {
      res.status(404).json({ msg: "Story not found" });
    }

    const updatedStory = await Story.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );

    res.json(updatedStory);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route DELETE /stories/:id
// @desc Delete story by id
// @access Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);

    if (!story) {
      return res.status(404).json({ msg: "Story not found" });
    }

    if (story.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await story.remove();
    res.json({ msg: "Story removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
