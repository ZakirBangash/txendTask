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
      contact?.name?.toLowerCase()?.includes(query.toLowerCase()),
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
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={handleSearch}
        value={searchQuery}
        placeholderTextColor="#777"
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
  itemContainer: {
    borderBottomWidth: 1,
    padding: 10,
  },

  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
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
