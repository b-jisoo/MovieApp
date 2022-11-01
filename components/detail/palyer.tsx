import { video } from "../../type";
import Modal from "./modal";

interface Iprops {
  onClose: () => void;
  video: video[];
}

export const Palyer = (props: Iprops) => {
  return (
    <Modal onClose={props.onClose}>
      <div className=" rounded w-full ">
        <div className="flex justify-end pr-4 pt-2">
          <button
            className="text-5xl leading-none text-white hover:text-gray-300"
            onClick={props.onClose}
          >
            ×
          </button>
        </div>
        <div className=" px-8 py-4  flex justify-center items-center">
          <div className="w-full h-full overflow-hidden aspect-video">
            <iframe
              className="	w-full h-full md:aspect-square"
              src={`https://www.youtube.com/embed/${props.video[0].key}`}
              allow="autoplay; encrypted-media;"
            ></iframe>
          </div>
        </div>
        <style jsx>{`
          .video {
            border: 0;
          }
        `}</style>
      </div>
    </Modal>
  );
};
