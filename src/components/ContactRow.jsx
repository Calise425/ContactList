import React from "react";

const ContactRow = ({person, func}) => {
    return <tr onClick={() => {func(person.id)}}>
    <td>{person.name}</td>
    <td>{person.phone}</td>
    <td>{person.email}</td>
    </tr>
};

export default ContactRow;