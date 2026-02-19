const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Vidya Institute CRM Backend is running");
});

app.get("/students", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Demo Student",
      course: "CCC",
      fee: 5000
    }
  ]);
});

app.get("/fees", (req, res) => {
  res.json([
    {
      id: 1,
      student: "Demo Student",
      amount: 2000
    }
  ]);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
