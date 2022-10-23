import { Movie, TvShow } from "../../type";
import TvItem from "./tvItem";

export const TvList = ({ list }: { list: { results: TvShow[] }[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {list.map((page) =>
        page.results.map((result) => <TvItem {...result} key={result.id} />)
      )}
    </div>
  );
};

export default TvList;
