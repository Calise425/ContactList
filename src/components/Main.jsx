import React,{ useState, useEffect } from 'react';
import ContactList from './ContactList';
import SingleContact from './SingleContact';


const Main = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState({});

  const getContacts = async () => {
    const response = await fetch('http://jsonplace-univclone.herokuapp.com/users');
    const users = await response.json();
    setContacts(users);
  };

  useEffect(()=>{
    getContacts();
  }, []);

  const selectContact = async (contactId) => {
    try {
      const response = await fetch(`http://jsonplace-univclone.herokuapp.com/users/${contactId}`)
      const result = await response.json();
      setSelectedContact(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        {selectedContact.id ? <SingleContact contact = {selectedContact}/> : <ContactList contacts = {contacts} func = {selectContact}/>}
      </div>
    </div>
  );
};

export default Main;
