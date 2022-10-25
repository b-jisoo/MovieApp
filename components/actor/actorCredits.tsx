import Link from "next/link";
import { actorCreditsData, atctorDetails } from "../../type";

export const ActorCredit = (data: actorCreditsData) => {
  return (
    <div className="credits border-b border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold">Credits</h2>
        <ul className="list-disc leading-loose pl-5 mt-8">
          {data.cast.map((credits) => (
            <li key={credits.id}>
              {credits.release_date.slice(0, 4)} ·
              <strong>
                <Link href={`../movies/${credits.id}`}>
                  <span className="hover:underline cursor-pointer">
                    {` ${credits.title || credits.original_title}`}
                  </span>
                </Link>
              </strong>
              - {credits.character}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
