import { ModalProps } from "../types";
function Modal({ className, open, children, cancel }: ModalProps) {
  return (
    <>
   
        <div
          onClick={cancel}
          className={`bg-[#1e1e1e71] flex justify-center items-center px-3 h-screen w-full fixed z-[70] inset-0 ${
            !open ? "hidden" : ""
          } `}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={` min-h-40 rounded-2xl ${className}`}
          >
            {children}
          </div>
        </div>
      
    </>
  );
}

export default Modal;
