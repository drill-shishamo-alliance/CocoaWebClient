import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_COCOA_MOOD_API,
});
