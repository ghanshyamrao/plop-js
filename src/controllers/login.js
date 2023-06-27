import express from 'express';
import { loginActionTypes } from '../actionTypes/login';
import { login } from '../store/actions/login';

const loginController = express.Router();

loginController.post('/', (req, res) => {
  // Handle login creation logic here
  res.json({ message: 'login created successfully' });
});

export default loginController;
