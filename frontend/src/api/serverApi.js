import Axios from 'axios';
import {basePath} from '../utils/constants';

const serverApi = Axios.create({
  baseURL: basePath,
  headers: {}
});

export default serverApi;
