'use strict';

import mongoose from 'mongoose';

var QuoteSchema = new mongoose.Schema({
  name: String,
  email: String,
  org: String,
  phone: Number,
  address: String,
  product_required: String,
  size_quantity:{
    s: Number,
    m: Number,
    l: Number,
    xl: Number,
    xxl: Number,
  },
  photo: String,
  upload: Boolean,
  quantity: Number
});

export default mongoose.model('Quote', QuoteSchema);
