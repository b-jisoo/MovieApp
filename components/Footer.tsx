export const Footer = () => {
  return (
    <footer className="border border-t">
      <div className="container mx-auto text-sm px-4 py-6">
        Powered by
        <a
          href="https://www.themoviedb.org/documentation/api"
          className="underline hover:text-gray-300"
        >
          TMDb API
        </a>
      </div>
    </footer>
  );
};

export default Footer;
