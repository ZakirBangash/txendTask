import React, {useCallback, useState} from 'react';
import {View, Text, FlatList, TextInput, StyleSheet} from 'react-native';
import useContacts from '../../hooks/useFetchContacts';

const ContactList = () => {
  const {contacts, loading} = useContacts();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);

  const handleSearch = query => {
    setSearchQuery(query);
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredContacts(filtered);
  };

  const renderItem = useCallback(
    ({item}) => (
      <View style={styles.itemContainer}>
        <Text style={styles.name}>{item.name}</Text>
        {item.phoneNumbers.map((phoneNumber, index) => (
          <Text key={index} style={styles.phoneNumber}>
            {phoneNumber}
          </Text>
        ))}
      </View>
    ),
    [],
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <FlatList
        data={searchQuery ? filteredContacts : contacts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  itemContainer: {
    borderBottomWidth: 1,
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  phoneNumber: {
    fontSize: 16,
  },
});

export default ContactList;
