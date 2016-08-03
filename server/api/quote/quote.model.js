'use strict';

import mongoose from 'mongoose';

var QuoteSchema = new mongoose.Schema({
  fname: String,
  email: String,
  phone: Number,
  items: Number,
  quality:String,
  artwork:String,
  info:String
});

export default mongoose.model('Quote', QuoteSchema);
