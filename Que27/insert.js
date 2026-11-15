const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB server");

    // 2. Get the database and collection (created automatically on first insert)
    const db = client.db("college");
    const collection = db.collection("students");

    // 3. Insert one record
    const one = await collection.insertOne({ name: "Varad", city: "Nashik", marks: 85 });
    console.log("Inserted one record, id:", one.insertedId);

    // 4. Insert many records
    const many = await collection.insertMany([
      { name: "Rohan", city: "Pune", marks: 78 },
      { name: "Rohit", city: "Mumbai", marks: 90 },
    ]);
    console.log("Inserted " + many.insertedCount + " records");

    // 5. Read all records to confirm
    const documents = await collection.find({}).toArray();
    console.log("Records in the collection:");
    console.log(documents);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await client.close();
  }
}

run();