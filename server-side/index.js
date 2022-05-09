const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0g2tu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const itemsCollection = client.db("bookStock").collection("books");

    // ------->Items API Start<------- 
    // GET API
    app.get("/items", async (req, res) => {
      const query = {};
      const cursor = itemsCollection.find(query);
      const items = await cursor.toArray();
      res.send(items);
    });

    app.get("/item/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const item = await itemsCollection.findOne(query);
      res.send(item);
    });

    app.get("/items/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const cursor = itemsCollection.find(query);
      const items = await cursor.toArray();
      res.send(items);
    });


    // POST API
    app.post("/item", async (req, res) => {
      const data = req.body;
      const result = await itemsCollection.insertOne(data);
      res.send(result);
    });
    // ------->Items API End<-------

     // Delete API
     app.delete("/item/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await itemsCollection.deleteOne(query);
      res.send(result);
    });

    // PUT API for update stock value
    app.put("/item/:id", async (req, res) => {
      const id = req.params.id;
      const updateItem = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          stock: updateItem.stock,
        },
      };
      const result = await itemsCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });
  
  } finally {
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening port ${port}`);
});
