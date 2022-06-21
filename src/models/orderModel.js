import { Schema, model, models } from 'mongoose';

const orderSchema = new Schema({
  customer_first_name: {
    type: String,
    required: true,
  },
  customer_last_name: {
    type: String,
    required: true,
  },
  customer_email: {
    type: String,
    required: true,
  },
  shipping_name: {
    type: String,
    required: true,
  },
  shipping_street: {
    type: String,
    required: true,
  },
  shipping_town_city: {
    type: String,
    required: true,
  },
  shipping_county_state: {
    type: String,
    required: true,
  },
  shipping_postal_zip_code: {
    type: Number,
    required: true,
  },
  shipping_country: {
    type: String,
    required: true,
  },
  billing_name: {
    type: String,
    required: true,
  },
  billing_street: {
    type: String,
    required: true,
  },
  billing_town_city: {
    type: String,
    required: true,
  },
  billing_county_state: {
    type: String,
    required: true,
  },
  billing_postal_zip_code: {
    type: String,
    required: true,
  },
  billing_country: {
    type: String,
    required: true,
  },
  payment_gateway: {
    type: String,
    required: true,
  },
  payment_card_token: {
    type: String,
    required: true,
  },
  list_items: {
    type: Array,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: 'PENDING',
    enum: ['PENDING', 'CONFIRMED', 'COMPLETED'],
  },
});

const Order = models.order || model('order', orderSchema);

export default Order;
