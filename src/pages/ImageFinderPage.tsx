import { FC, useEffect, useState } from "react";
import ModalWindown from "../components/Modal/Modal";
import { useAppContext } from "../utils/AppContext";
import { getImages } from "../api/pixabayApi";
import Searchbar from "../components/Searchbar/Searchbar";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import ImageGalleryItem from "../components/ImageGalleryItem/ImageGalleryItem";
import { ColorRing } from "react-loader-spinner";
import { Box, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Image {
  id: number;
  largeImageURL: string;
  previewURL: string;
  tags: string;
  userImageURL: string;
  webformatURL: string;
}

interface ImageFinderPageProps {}

const ImageFinderPage: FC<ImageFinderPageProps> = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedImg, setSelectedImg] = useState<Image | undefined>({
    id: 0,
    largeImageURL: "",
    previewURL: "",
    tags: "",
    userImageURL: "",
    webformatURL: "",
  });
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    if (!searchText.trim()) {
      return;
    }
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const data = await getImages(searchText, currentPage);
        setImages((prev) => [...prev, ...data]);
        setIsLoading(false);
        if (!data.length) {
          toast.error("Ничего не найдено", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      } catch (error) {
        console.error("Произошла ошибка при загрузке данных:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [currentPage, searchText]);

  useEffect(() => {
    setImages([]);
    setCurrentPage(1);
  }, [searchText]);

  const { toggleModal, isOpen } = useAppContext()!;

  const getSelectedImg = (id: number) => {
    console.log(id);
    return setSelectedImg(images.find((e: Image) => e.id === id));
  };
  const isEmpy = images.length > 0;

  return (
    <div>
      <ToastContainer />
      <Searchbar setSearchText={setSearchText} />
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </Box>
      )}
      <Box my={2}>
        <ImageGallery>
          {images.map((e: Image) => (
            <ImageGalleryItem
              key={e.id}
              imgalt={e.webformatURL}
              imgurl={e.tags}
              getSelectedImg={() => getSelectedImg(e.id)}
              toggleModal={toggleModal}
            />
          ))}
        </ImageGallery>{" "}
        {isEmpy && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" color="warning" onClick={() => setCurrentPage(currentPage + 1)}>
              Load more
            </Button>
          </Box>
        )}
      </Box>

      {isOpen && <ModalWindown imgurl={selectedImg?.largeImageURL} />}
    </div>
  );
};

export default ImageFinderPage;
