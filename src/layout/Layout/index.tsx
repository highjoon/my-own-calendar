import { LayoutContainer } from "@layout/Layout/styles";

interface IProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
