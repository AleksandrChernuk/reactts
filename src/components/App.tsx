import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layaut from "./Layaut/Layaut";
import ImageFinderPage from "../pages/ImageFinderPage";
import PhonebookPage from "../pages/PhonebookPage";
import FeedbacksPage from "../pages/FeedbacksPage";

interface IAppProps {}

const App: FC<IAppProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Layaut />}>
        <Route index element={<HomePage />} />
        <Route path="phonebook" element={<PhonebookPage />} />
        <Route path="feedbacks" element={<FeedbacksPage />} />
        <Route path="imagefinder" element={<ImageFinderPage />} />
      </Route>
    </Routes>
  );
};

export default App;
