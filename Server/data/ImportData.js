const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Blogs = require("../Models/BlogModel");
const Portfolio = require("../Models/PortfolioModel");

dotenv.config({ path: "./Server/config.env" });
// dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
  })
  .then(() => console.log("DATABASE SUCCESSFULLY CONNECTED!"));

const blogs = JSON.parse(fs.readFileSync(`${__dirname}/blogs.json`, "utf-8"));
const portfolio = JSON.parse(
  fs.readFileSync(`${__dirname}/portfolio.json`, "utf-8")
);

const importData = async () => {
  try {
    await Blogs.create(blogs);
    console.log(
      "Data successfully imported from your database! Kindly proceed to your API tester to see the deployed data 😎🤗"
    );
    await Portfolio.create(portfolio);
  } catch (err) {
    console.log(err.message);
  }
  process.exit(1);
};
const deletetData = async () => {
  try {
    await Blogs.deleteMany();
    await Portfolio.deleteMany();
    console.log(
      "Data successfully Deleted from your database! Kindly note that your database is now empty! 😎🤗"
    );
  } catch (err) {
    console.log(err.message);
  }
  process.exit(1);
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deletetData();
}
