import { Fragment, PropsWithChildren } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  onClose: () => void;
}
const BackDrop = (props: ModalProps) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center shadow-lg overflow-y-auto modalContainer bg-gray-800 opacity-50 z-50"
      onClick={props.onClose}
    ></div>
  );
};
const ModalOverlay = ({ children }: PropsWithChildren) => {
  return (
    <div className="fixed container top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50">
      {children}
    </div>
  );
};

const Modal = (props: PropsWithChildren<ModalProps>) => {
  const selectedElement = document.getElementById("_modal");
  if (selectedElement === null) {
    //null에 대한 에러 처리를 할 수 있다.
    return <div></div>;
  }
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        selectedElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        selectedElement
      )}
    </Fragment>
  );
};

export default Modal;
