const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  projectTitle: String,
  serviceSelect: String,
  projectOwner: String,
  status: String,
  credsConsumed: String,
  slack: String,
  assets: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date
});

mongoose.model('projects', projectSchema);
