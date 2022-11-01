import Footer from "./footer";
import NavBar from "./navBar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
};
export default Layout;
