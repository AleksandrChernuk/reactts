import { Box, Button, Grid, TextField } from "@mui/material";
import { ChangeEvent, FC, FormEvent, useState } from "react";

interface IformData {
  name: string;
  number: string;
}

interface PhonebokFormProps {
  addNewContact: (data: IformData) => void;
}

const PhonebokForm: FC<PhonebokFormProps> = ({ addNewContact }) => {
  const [formData, setFormaData] = useState<IformData>({ name: "", number: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        return setFormaData({ ...formData, name: value });

      case "number":
        return setFormaData({ ...formData, number: value });

      default:
        return formData;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, number } = formData;
    if (!name.trim() || !number.trim()) {
      alert("Пусто");
    }

    addNewContact(formData);
    setFormaData({ name: "", number: "" });
  };

  return (
    <Grid component="form" onSubmit={(e) => handleSubmit(e)} my={2}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Имя"
            type="text"
            name="name"
            value={formData.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Номер телефона"
            type="tel"
            name="number"
            value={formData.number}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          />
        </Grid>
      </Grid>

      <Box my={2}>
        <Button type="submit" variant="contained" color="warning">
          Добавить
        </Button>
      </Box>
    </Grid>
  );
};

export default PhonebokForm;
