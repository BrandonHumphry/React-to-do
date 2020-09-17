import React from "react";

function ContactCard(props) {
    return (
        <div>
            <img src={props.contact.imgUrl}></img>
            <h2>Name: {props.contact.name}</h2>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )
}

export default ContactCard