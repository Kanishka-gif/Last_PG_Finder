



const PG = require('../../models/PG'); 
const fs = require("fs");
const path = require("path");

// const addPG = async (req, res) => {
//   try {
//     const pg = new PG(req.body);
//     await pg.save();
//     res.status(200).json({ message: "PG added successfully!", pg });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to add PG", error: error.message });
//   }
// };

const addPG = async (req, res) => {
  try {
    const { name, location, rent, facilities, security, contact, image } = req.body;

    // Convert Base64 string back to Buffer
   // const buffer = Buffer.from(image.base64, 'base64');

    const newPG = new PG({
      name,
      location,
      rent,
      facilities,
      security,
      contact,
      image,
    });

    await newPG.save();
    res.status(201).json({ message: 'PG added successfully', pg: newPG });
  } catch (error) {
    console.error('Error adding PG:', error);
    res.status(500).json({ error: 'Failed to add PG' });
  }
};

const getAllPGs = async (req, res) => {
  try {
    const pgs = await PG.find();
    res.status(200).json(pgs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching PGs", error: error.message });
  }
};

// const uploadimage= router.post("/upload", (req, res) => {
  const uploadimage= async (req, res) => {
  // Assuming the file is sent under the name 'file'
  const file = req.files.file;
  
  // Set the file name and path
  const fileName = file.name;
  const filePath = path.join(__dirname, "../../uploads", fileName); // Save file in uploads folder

  // Save the file as a buffer
  fs.writeFile(filePath, file.data, (err) => {
    if (err) {
      return res.status(500).send({ message: "File upload failed", error: err });
    }
    res.status(200).send({ message: "File uploaded successfully" });
  });
};
module.exports = { addPG , getAllPGs,uploadimage };
