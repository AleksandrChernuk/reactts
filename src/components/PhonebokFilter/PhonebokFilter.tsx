import { Box, TextField, Typography } from "@mui/material";
import { ChangeEvent, FC } from "react";

interface PhonebokFilterProps {
  handleFilterChange: (text: string) => void;
}

const PhonebokFilter: FC<PhonebokFilterProps> = ({ handleFilterChange }) => {
  return (
    <Box my={2}>
      <Typography component="h3" variant="h5">
        Filter
      </Typography>
      <Box title="Finde Contact by Name" sx={{ marginTop: "16px" }}>
        <TextField
          fullWidth
          label="Введите Имя для поиска"
          variant="outlined"
          type="text"
          name="filter"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleFilterChange(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default PhonebokFilter;
