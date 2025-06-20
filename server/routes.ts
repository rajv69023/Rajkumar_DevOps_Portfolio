import type { Express } from "express";
import { createServer, type Server } from "http";
import express from "express";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve attached assets (profile picture, resume, etc.)
  app.use("/attached_assets", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  app.use("/attached_assets", express.static(path.join(process.cwd(), "attached_assets")));

  // Resume download endpoint
  app.get("/api/download-resume", (req, res) => {
    try {
      // In a real application, you would serve the actual resume file
      // For now, we'll serve the uploaded PDF file
      const resumePath = path.join(process.cwd(), "attached_assets", "Rajkumar_Devops_Resume_1750385906256.pdf");
      
      if (fs.existsSync(resumePath)) {
        res.download(resumePath, "Raj_Kumar_DevOps_Resume.pdf", (err) => {
          if (err) {
            console.error("Error downloading resume:", err);
            res.status(500).json({ message: "Error downloading resume" });
          }
        });
      } else {
        res.status(404).json({ message: "Resume file not found" });
      }
    } catch (error) {
      console.error("Resume download error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // In a real application, you would:
      // 1. Validate the input data
      // 2. Save to database
      // 3. Send email notification
      // 4. Return appropriate response
      
      console.log("Contact form submission:", { name, email, subject, message });
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! I will get back to you soon." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Error sending message. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
