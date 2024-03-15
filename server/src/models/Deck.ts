import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const DeckSchema = new Schema({
  title: String,
});

// compile Schema into model
const Deck = mongoose.model("Deck", DeckSchema);

export default Deck;
