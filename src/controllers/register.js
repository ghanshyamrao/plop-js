import express from 'express';
import { registerActionTypes } from '../actionTypes/register';
import { register } from '../store/actions/register';

const registerController = express.Router();

registerController.post('/', (req, res) => {
  // Handle register creation logic here
  res.json({ message: 'register created successfully' });
});

export default registerController;
