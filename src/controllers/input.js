import express from 'express';
import { inputActionTypes } from '../actionTypes/input';
import { input } from '../store/actions/input';

const inputController = express.Router();

inputController.post('/', (req, res) => {
  // Handle input creation logic here
  res.json({ message: 'input created successfully' });
});

export default inputController;
