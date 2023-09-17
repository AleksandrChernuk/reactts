import axios from "axios";

export const getImages = async (text?: string, currentPage?: number) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${text}&page=${currentPage}&key=${process.env.REACT_APP_PIXABAY_API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    );

    return response.data.hits;
  } catch (error) {
    console.error("Произошла ошибка при выполнении запроса:", error);
  }
};
