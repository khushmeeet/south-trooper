'use strict';

import mongoose from 'mongoose';

var ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

export default mongoose.model('Contact', ContactSchema);
