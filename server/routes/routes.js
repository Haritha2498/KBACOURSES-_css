const express = require("express");
const router = express.Router();
const courses = require("../models/courses");


const verifyToken=require("../middleware/authMiddleware")

router.get("/courses",verifyToken, async (req, res) => {
  const details = await courses.find({});
  res.json(details);
});

router.get("/courses/:id", async (req, res) => {
  const courseId = req.params.id;
  const details = await courses.findOne({ courseId: courseId }, { _id: 0 });
  res.json(details);
});
router.post("/courses", async (req, res) => {
  try {
    const data = req.body;
    const result = await courses.create(data);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});


// router.post("/courses", async (req, res) => {
//   try {
//     const data = req.body;
//     console.log("DATAA ", data);
//     const result = new courses(data);
//     await result.save();
//     res.status(201).json(result);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json();
//   }
// });

router.put("/courses/:id", async (req, res) => {
  const data = req.body;
  console.log("fghjk")
  const courseId = req.params.id;
  console.log(courseId)
  console.log(data)
  try {
    const result = await courses.findOneAndUpdate(
      { courseId: courseId },
      req.body,
      { new: true, runValidators: true }
    );
    if (!result) {
      return res.status(404).send("Course not found");
    }
    res.status(200).send("Course updated successfully");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

router.delete("/courses/:id",verifyToken, async (req, res) => {
  const courseId = req.params.id;
  // console.log(courseId,"asd")
  // console.log(req.userType)
  if(req.userType!='admin'){
    return res.status(401);
  }
  try {
    const result = await courses.findOneAndDelete({ courseId: courseId });
    // console.log(courseId,"cvbn")
    console.log(result)
    if (!result) {
      return res.status(404).send("Course not found");
    }
    res.send("Course deleted successfully");
  } catch (error) {
    console.log("dfghj")
    res.status(500).send("Server error");
  }
});

module.exports = router;
