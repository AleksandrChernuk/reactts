import { FC, FormEvent } from "react";
import { Box, Button, TextField } from "@mui/material";

interface ISearchbarProps {
  setSearchText: (text: string) => void;
}

const Searchbar: FC<ISearchbarProps> = ({ setSearchText }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("text") as HTMLInputElement;

    if (input) {
      const inputValue = input.value;
      if (inputValue.trim()) {
        setSearchText(inputValue);
      } else {
        console.log("Повторный поиск");
      }
    }

    form.reset();
  };

  return (
    <Box
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      component="form"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box my={2} sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Button variant="contained" type="submit" color="warning">
          Искать
        </Button>
        <TextField autoFocus={false} name="text" size="small" variant="outlined" label="Введит запрос" />
      </Box>
    </Box>
  );
};

export default Searchbar;
