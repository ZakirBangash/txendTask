// // import {createSlice} from '@reduxjs/toolkit';

// // const initialState = [];

// // export const cart = createSlice({
// //   name: 'contact',
// //   initialState: initialState,
// //   reducers: {
// //     addContacts: (state, action) => {
// //       state.push(action.payload);
// //     },
// //     // Add more reducer functions here if needed
// //   },
// // });

// // export const {addContacts} = cart.actions;

// // export default cart.reducer;

// import {createSlice} from '@reduxjs/toolkit';
// import Contacts from 'react-native-contacts'; // Import the library you use for fetching contacts

// const initialState = {
//   contacts: [],
//   loading: false,
//   error: null,
// };

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     fetchContactsStart: state => {
//       state.loading = true;
//       state.error = null;
//     },
//     fetchContactsSuccess: (state, action) => {
//       state.loading = false;
//       state.contacts = action.payload;
//     },
//     fetchContactsFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const {fetchContactsStart, fetchContactsSuccess, fetchContactsFailure} =
//   contactsSlice.actions;

// // Thunk function to handle asynchronous operation
// export const fetchContacts = () => dispatch => {
//   dispatch(fetchContactsStart());
//   Contacts.getAll()
//     .then(contacts => {
//       const formattedContacts = contacts.map(contact => ({
//         name: contact.displayName,
//         phoneNumbers: contact.phoneNumbers.map(phone => phone.number),
//       }));
//       console.log('formatted contacts: ', formattedContacts);
//       dispatch(fetchContactsSuccess(formattedContacts));
//     })
//     .catch(error => {
//       dispatch(fetchContactsFailure(error));
//     });
// };

// export const selectContacts = state => state.contacts.contacts;
// export const selectContactsLoading = state => state.contacts.loading;
// export const selectContactsError = state => state.contacts.error;

// export default contactsSlice.reducer;

// contactSlice.js

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts',
          message: 'This app would like to view your contacts.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return new Promise((resolve, reject) => {
          Contacts.getAll((err, contacts) => {
            if (err === 'denied') {
              reject('Permission to access contacts was denied');
            } else {
              resolve(contacts);
            }
          });
        });
      } else {
        throw new Error('Permission to access contacts denied');
      }
    } catch (error) {
      throw error;
    }
  },
);

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default contactSlice.reducer;
