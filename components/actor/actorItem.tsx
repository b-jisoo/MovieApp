import Image from "next/image";
import Link from "next/link";
import useLocalStorage from "use-local-storage";
import { atctorDetails } from "../../type";

export const ActorItem = (actor: atctorDetails) => {
  const BASE_URL = "https://image.tmdb.org/t/p/w235_and_h235_face";
  const [scrollY, setScrollY] = useLocalStorage("actor_list_scroll", 0);

  return (
    <div className="actor mt-8">
      <div className="cursor-pointer max-w-full h-auto box-border  hover:scale-105 hover:-translate-y-3 transition-all">
        <Link href="https://movies.andredemos.ca/actors/2473962">
          <Image
            layout="responsive"
            src={
              actor.profile_path
                ? `${BASE_URL}${actor.profile_path}`
                : "/300x450.png"
            }
            alt={actor.name}
            height={235}
            width={235}
          />
        </Link>
      </div>

      <div className="mt-2">
        <Link
          href="https://movies.andredemos.ca/actors/2473962"
          className="text-lg hover:text-gray-300"
        >
          <a
            className="text-lg mt-2 hover:text-gray-300"
            onClick={() => setScrollY(window.scrollY)}
          >
            {actor.name}
          </a>
        </Link>
        <div className="text-sm truncate text-gray-400">
          <span>{actor.known_for.map((title) => `${title.title} `)}</span>
        </div>
      </div>
    </div>
  );
};

export default ActorItem;
