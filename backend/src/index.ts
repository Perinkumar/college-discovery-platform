import express from "express";
import cors from "cors";
import prisma from "./prisma";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("College Platform API Running");
});

// CREATE COLLEGE
app.post("/colleges", async (req, res) => {
  try {
    const college = await prisma.college.create({
      data: req.body,
    });

    res.json(college);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Something went wrong",
    });
  }
});

// GET ALL COLLEGES
app.get("/colleges", async (req, res) => {
  try {
    const search = req.query.search?.toString() || "";
    const location = req.query.location?.toString() || "";

    const colleges = await prisma.college.findMany({
      where: {
        name: {
          contains: search,
          mode: "insensitive",
        },

        location: {
          contains: location,
          mode: "insensitive",
        },
      },

      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(colleges);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch colleges",
    });
  }
});

// GET SINGLE COLLEGE
app.get("/colleges/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const college = await prisma.college.findFirst({
      where: {
        id: id,
      },
    });

    if (!college) {
      return res.status(404).json({
        error: "College not found",
      });
    }

    res.json(college);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Failed to fetch college",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});