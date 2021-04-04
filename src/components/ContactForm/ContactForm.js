import React, { Component } from "react";
import propTypes from "prop-types";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handlChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    // value - это намбер  в форме
  };

  handlSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    this.props.formSubmitHandler(this.state);
    this.reset();
    this.props.onAddContact(this.state);
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handlSubmit}>
          <label htmlFor="">
            Name
            <input
              onChange={this.handlChange}
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label htmlFor="">
            Number
            <input
              onChange={this.handlChange}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};

export default ContactForm;
