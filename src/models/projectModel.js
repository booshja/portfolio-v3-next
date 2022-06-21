import { Schema, model, models } from 'mongoose';

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  thoughts: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    default:
      'https://images.unsplash.com/photo-1614469723922-c043ad9fd036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2709&q=80',
  },
  github_url: {
    type: String,
    required: true,
  },
  live_url: {
    type: String,
    default: null,
  },
  position: {
    type: Number,
    required: true,
    unique: true,
  },
});

const Project = models.project || model('project', projectSchema);

export default Project;
