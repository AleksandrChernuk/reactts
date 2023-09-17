import { FC } from "react";
import s from "./ImageGalleryItem.module.css";

interface IImageGalleryItemProps {
  imgurl: string;
  imgalt: string;
  getSelectedImg: () => void;
  toggleModal: () => void;
}

const ImageGalleryItem: FC<IImageGalleryItemProps> = ({ imgurl, imgalt, getSelectedImg, toggleModal }) => {
  const handleClick = () => {
    getSelectedImg();
    toggleModal();
  };

  return (
    <li className={s.ImageGalleryItem} onClick={() => handleClick()}>
      <img src={imgalt} alt={imgurl} className={s.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
