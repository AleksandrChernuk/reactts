import { List, ListItem, Typography } from "@mui/material";
import { FC } from "react";

interface IHomePageProps {}

const HomePage: FC<IHomePageProps> = () => {
  return (
    <List>
      <ListItem>
        <Typography variant="h5" component="h3">
          1. Книга контактов
        </Typography>
      </ListItem>
      <ListItem>
        <Typography variant="h5" component="h3">
          2. Счетчик отзывов
        </Typography>
      </ListItem>
      <ListItem>
        <Typography variant="h5" component="h3">
          3. Поиск изображений
        </Typography>
      </ListItem>
    </List>
  );
};

export default HomePage;
