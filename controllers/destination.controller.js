const { prisma } = require("../config/prisma");

async function createDestination(req, res) {
  const { title, content, image } = req.body;
  console.log(req.body);

  try {
    await prisma.destinations.create({
      data: {
        title,
        content,
        image,
      },
    });
    res.status(201).json({
      success: true,
      message: "data recorded!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error!",
    });
  }
}

async function getDestinations(req, res) {
  try {
    const destinations = await prisma.destinations.findMany();
    res.status(201).json({
      success: true,
      message: "here is your data!",
      data: destinations
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error!",
    });
  }
}

module.exports = {
  createDestination,
  getDestinations
}
