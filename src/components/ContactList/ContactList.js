import React from "react";
import propTypes from "prop-types";

const ContactList = ({ contacts, onDeleteButton }) => {
  return (
    <>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name + ":" + contact.number}
            <button
              onClick={() => {
                onDeleteButton(contact.id);
              }}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: propTypes.array.isRequired,
  onDeleteButton: propTypes.func.isRequired,
};

export default ContactList;
