import { Box, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import { Component } from "react";
import PhonebokForm from "../PhonebokForm/PhonebokForm";
import PhonebokFilter from "../PhonebokFilter/PhonebokFilter";
import PhonebokList from "../PhonebokList/PhonebokList";

interface Contact {
  name: string;
  number: string;
  id?: string;
}

interface PhonebokState {
  contacts: Contact[];
  filter: string;
}

const LOCAL_KEY = "contact";

class Phonebok extends Component<{}, PhonebokState> {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidUpdate(prevProps: {}, prevState: PhonebokState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount(): void {
    const local = localStorage.getItem(LOCAL_KEY);
    if (local) {
      const parseLocal = JSON.parse(local);
      this.setState({ contacts: [...parseLocal] });
    }
  }

  addNewContact = (data: Contact) => {
    console.log(data);
    const includes = this.state.contacts.some(
      (el: Contact) => el.name.toLowerCase().trim() === data.name.toLowerCase(),
    );
    if (includes) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    this.setState((prev) => ({ contacts: [...prev.contacts, { ...data, id: nanoid() }] }));
  };

  handleFilterChange = (text: string) => {
    this.setState({ filter: text });
  };

  handleDelete = (id: string | undefined) => {
    this.setState((prev) => ({ contacts: prev.contacts.filter((el: Contact) => el.id !== id) }));
  };

  render() {
    const { contacts } = this.state;
    const visibalContact = contacts.filter((el: Contact) =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
    return (
      <Box my={2}>
        <Typography variant="h5" component="h3">
          Phonebook
        </Typography>
        <PhonebokForm addNewContact={this.addNewContact} />
        <PhonebokFilter handleFilterChange={this.handleFilterChange} />
        <PhonebokList visibalContact={visibalContact} handleDelete={this.handleDelete}></PhonebokList>
        {contacts.length !== 0 && <Box title="Contacts"></Box>}
      </Box>
    );
  }
}

export default Phonebok;
