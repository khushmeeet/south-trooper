'use strict';

import mongoose from 'mongoose';

var QuoteSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Quote', QuoteSchema);
