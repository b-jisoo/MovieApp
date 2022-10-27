import { video } from "../../type";

interface trailerBtn {
  onClick?: () => void;
  disabled: boolean;
  label: string;
}

export const TrailerBtn = (props: trailerBtn) => {
  return (
    <button
      disabled={props.disabled}
      className={`${props.disabled} flex  items-center  text-gray-900 rounded font-semibold px-5 py-4 transition ease-in-out duration-150 `}
      onClick={props.onClick}
    >
      <svg className="w-6 fill-current" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
      </svg>
      <span className="ml-2">{props.label}</span>
      <style jsx>{`
        .false {
          background-color: #ed8936;
        }
        .false:hover {
          background-color: #dd6b20;
        }
        .true {
          background-color: #a0aec0;
        }
        .true:hover {
          background-color: #718096;
        }
      `}</style>
    </button>
  );
};

export default TrailerBtn;
