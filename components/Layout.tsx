import NavBar from "./NavBar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};
export default Layout;
