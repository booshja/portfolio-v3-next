import { Schema, model, models } from 'mongoose';

const messageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  received: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  is_archived: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Message = models.message || model('message', messageSchema);

export default Message;
