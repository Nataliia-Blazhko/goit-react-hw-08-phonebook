import axios from 'axios';

export const getContactsQuery = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContactQuery = async contact => {
  await axios.post('/contacts', contact);
};

export const deleteContactQuery = async id => {
  await axios.delete(`/contacts/${id}`);
};
