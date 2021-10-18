import axios from 'axios';

export default axios.create({
  baseURL: `https://t-vault-rest-api.herokuapp.com/safe`
});