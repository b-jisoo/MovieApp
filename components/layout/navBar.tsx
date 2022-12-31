import Link from "next/link";
import { useRouter } from "next/router";
import Search from "../search/search";

export const NavBar = () => {
  const router = useRouter();
  return (
    <nav>
      <div>
        <img src="/vercel.svg" />
        <div>
          <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
          </Link>
          <Link href="/tv/">
            <a className={router.pathname === "/tv" ? "active" : ""}>
              TV Shows
            </a>
          </Link>
          <Link href="/actors/">
            <a className={router.pathname === "/actors" ? "active" : ""}>
              Actors
            </a>
          </Link>
        </div>
      </div>
      <div className="mr-32 flex items-center">
        <Search />
      </div>
      <style jsx>{`
        nav {
          width: 100%;
          display: flex;
          justify-content: space-between;
          gap: 10px;
          align-items: center;
          padding-top: 30px;
          padding-bottom: 20px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          min-width: 1000px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
          margin-left: 50px;
          margin-right: 100px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
          margin-left: 30px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
