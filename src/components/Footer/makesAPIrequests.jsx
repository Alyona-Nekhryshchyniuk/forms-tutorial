import axios from 'axios';
axios.defaults.baseURL = 'https://63da6ba5b28a3148f686d43d.mockapi.io';

const makesAPIrequests = async values => {
  const response = await axios.post('/submittedData', values);
  return console.log(response.data);
};
export default makesAPIrequests;
