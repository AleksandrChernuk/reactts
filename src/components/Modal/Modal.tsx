import { Box, Modal } from "@mui/material";
import { FC } from "react";
import { createPortal } from "react-dom";
import { useAppContext } from "../../utils/AppContext";
import s from "./Modal.module.css";

const modalRoot = document.getElementById("root-modal")!;

interface IModalProps {
  imgurl?: string;
}

const ModalWindown: FC<IModalProps> = ({ imgurl }) => {
  const { isOpen, toggleModal } = useAppContext()!;

  return createPortal(
    <>
      <Modal
        className={s.Overlay}
        open={isOpen}
        onClose={toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={s.Modal}>
          <img src={imgurl} alt="big" />
        </Box>
      </Modal>
    </>,
    modalRoot,
  );
};

export default ModalWindown;
