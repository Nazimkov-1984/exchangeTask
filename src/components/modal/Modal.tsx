import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../redux/store";
import "./Modal.css";

const Modal: React.FC = () => {
  const isOpen = useSelector((store: { value: boolean }) => store.value);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    dispatch(toggle());
  }, [dispatch]);

  if (isOpen) {
    return (
      <div className="modal">
        <div className="modalBody">
          <button onClick={onCloseModal}>Close</button>
        </div>
      </div>
    );
  } else return null;
};

export default Modal;
