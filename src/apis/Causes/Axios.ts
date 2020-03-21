import axios from 'axios';

export default axios.create({
  headers: {
    post: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=utf-8',
    },
  },
  baseURL: process.env.REACT_APP_COCOA_CAUSE_API,
});
