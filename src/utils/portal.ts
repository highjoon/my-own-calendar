import reactDom from "react-dom";

interface IProps {
  children?: React.ReactNode;
}

const Portal = ({ children }: IProps) => {
  const el = document.getElementById("modal") as Element;
  return reactDom.createPortal(children, el);
};

export default Portal;
