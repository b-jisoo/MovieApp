import { atctor } from "../../type";
import ActorItem from "./actorItem";

export const ActorList = ({ list }: { list: { results: atctor[] }[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {list.map((page) =>
        page.results.map((result) => <ActorItem {...result} key={result.id} />)
      )}
    </div>
  );
};

export default ActorList;
