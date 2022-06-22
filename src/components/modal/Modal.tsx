import { SyntheticEvent, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../redux/store";
import "./Modal.css";

const Modal: React.FC = () => {
  const modal = useRef(null);
  const isOpen = useSelector((store: { value: boolean }) => store.value);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    dispatch(toggleModal());
  }, [dispatch]);

  const onOutsideClick = useCallback(
    (e: SyntheticEvent) => {
      if (modal.current === e.target) {
        dispatch(toggleModal());
      }
    },
    [dispatch]
  );

  if (isOpen) {
    return (
      <div ref={modal} className="modal" onClick={onOutsideClick}>
        <div className="modalBody">
          <h2 className="modalTitle">Для того чтобы сконвертировать одну валюту в другую:</h2>
          <ul className="listTips">
            <li>
              введите сумму (если сумма дробное число в качестве разделителя
              используйте точку
            </li>
            <li>
              выберите валюту которую вы хотите преобразовать в выпадющем списке
            </li>
            <li>
              выберите валюту в которую вы хотите преобразовать введенную сумму
            </li>
            <li>
              после этого вы можете редактировать полученный результат
              пересчитав значение в исходном поле ввода (калькулятор работает в
              обе стороны)
            </li>
          </ul>
          <button className="buttonModal" onClick={onCloseModal}>Close</button>
        </div>
      </div>
    );
  } else return null;
};

export default Modal;
