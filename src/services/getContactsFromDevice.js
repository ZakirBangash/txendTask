import Contacts from 'react-native-contacts';

export const fetchContacts = async () => {
  try {
    const contacts = await Contacts.getAll();
    const formattedContacts = contacts.map(contact => {
      return {
        name: contact.displayName,
        phoneNumbers: contact.phoneNumbers.map(phone => phone.number),
      };
    });
    return formattedContacts;
  } catch (error) {
    console.error('Error fetching contacts: ', error);
    return []; // Return an empty array in case of an error
  }
};
