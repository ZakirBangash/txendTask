import {useEffect, useState} from 'react';
import {fetchContacts} from '../services/getContactsFromDevice';
import {requestContactsPermission} from '../utils/RequestContactsPermission';

const useContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const granted = requestContactsPermission();
    if (granted) {
      getAllContacts();
    }
  }, []);

  const getAllContacts = async () => {
    const allContacts = await fetchContacts();

    setContacts(allContacts);
    setLoading(false);
  };
  return {contacts, isLoading};
};

export default useContacts;
