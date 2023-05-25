import React from 'react'
import ContactRow from './ContactRow';

const ContactList = ({contacts, func}) => {
    return (
    <table>
        <tbody>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
            {contacts.map(contact =>
               {return <ContactRow  key = {contact.id} person = {contact} func = {func}/>}
            )}
        </tbody>
    </table>)
};

export default ContactList;
