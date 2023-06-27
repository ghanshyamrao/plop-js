import express from 'express';
import { nocompActionTypes } from '../actionTypes/nocomp';
import { nocomp } from '../store/actions/nocomp';

const nocompController = express.Router();

nocompController.post('/', (req, res) => {
  // Handle nocomp creation logic here
  res.json({ message: 'nocomp created successfully' });
});

export default nocompController;
