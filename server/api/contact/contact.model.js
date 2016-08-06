'use strict';

import mongoose from 'mongoose';

var ContactSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Contact', ContactSchema);
