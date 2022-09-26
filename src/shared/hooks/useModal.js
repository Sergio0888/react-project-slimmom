import { useSelector } from "react-redux";
import { getModalState } from "../../redux/modal/modal-selector";

export const useModal = () => {
  return useSelector(getModalState);
};
