import React from "react";

const SingleContact = ({contact}) => {
    return (
        <div id="single-contact">
            <div id="contact-info">
                <p><b>Name:</b>{contact.name}</p>
                <p><b>Email:</b>{contact.email} </p>
                <p><b>Phone:</b>{contact.phone} </p>
                <div>
                    <b>Address:</b>
                    <p>
                        <b>Street: </b> {contact.address.street}
                        <br />
                        <b>City/State:</b> {contact.address.city}
                    </p>
                </div>
                <p><b>Company:</b></p>{contact.company.name}
            </div>
        </div>
    )
}

export default SingleContact;