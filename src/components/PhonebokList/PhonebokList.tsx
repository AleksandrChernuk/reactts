import { Button, List, ListItem, ListItemText } from "@mui/material";
import { FC } from "react";

interface Contact {
  name: string;
  number: string;
  id?: string;
}

interface PhonebokListProps {
  visibalContact: Contact[];
  handleDelete: (id: string | undefined) => void;
}

const PhonebokList: FC<PhonebokListProps> = ({ visibalContact, handleDelete }) => {
  return (
    <List style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {visibalContact.map((el: Contact) => (
        <ListItem key={el.id} style={{ display: "flex", gap: "10px" }}>
          <ListItemText>
            {el.name} {el.number}
          </ListItemText>
          <Button type="button" onClick={() => handleDelete(el.id)} variant="contained" color="warning">
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default PhonebokList;
