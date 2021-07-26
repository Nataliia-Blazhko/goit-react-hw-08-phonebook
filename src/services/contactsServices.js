import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContactsQuery = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContactQuery = async contact => {
  await axios.post('/contacts', contact);
};

export const deleteContactQuery = async id => {
  await axios.delete('/contacts/' + id);
};
