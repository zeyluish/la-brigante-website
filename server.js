import express from "express";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();
const PORT = 3000;

// Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.use(express.static("public"));
app.use(express.json());

// POST - Contact
app.post("/api/contact", async (req, res) => {
  const { nom, prenom, telephone, email, objet, message } = req.body;

  const { error } = await supabase.from("messages_contact").insert([{ nom, prenom, telephone, email, objet, message }]);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur sur http://localhost:${PORT}`);
});
