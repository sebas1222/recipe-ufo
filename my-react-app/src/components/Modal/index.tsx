import React, { useRef } from "react";
import { MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import "./index.scss";
import { useOnClickOutside } from "../../hooks/useClickOutside";

interface ModalProps {
  content?: React.ReactNode;
  title?: string;
  isOpen: boolean;
  maxWidth?: number;
  maxHeight?: number;
  height?: number;
  onClose: () => void;
}

const Modal = ({
  content,
  isOpen,
  onClose,
  title,
  height,
  maxWidth,
  maxHeight,
}: ModalProps) => {
  const modalRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  useOnClickOutside(modalRef, onClose);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal--main--container"
        >
          <div
            ref={modalRef}
            style={{
              maxWidth: `${maxWidth}px`,
              maxHeight: `${maxHeight}px`,
              height: `${height}px`,
            }}
            className="modal--main--body--container"
          >
            <div className="modal--main--header--container">
              <strong>{title}</strong>
              <MdClose onClick={onClose} />
            </div>
            <div className="modal--main--content--container">{content}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
