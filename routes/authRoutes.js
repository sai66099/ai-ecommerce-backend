import express from "express";
const router = express.Router();

// Example route
router.get("/test", (req, res) => {
  res.send("Auth route working ✅");
});

export default router; // <-- This is what was missing
