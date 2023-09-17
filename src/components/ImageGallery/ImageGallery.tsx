import { FC, ReactNode } from "react";
import s from "./ImageGallery.module.css";

interface IImageGalleryProps {
  children: ReactNode;
}

const ImageGallery: FC<IImageGalleryProps> = ({ children }) => {
  return <ul className={s.ImageGallery}>{children}</ul>;
};

export default ImageGallery;
