export const PlayTrailer = () => {
  return (
    <div>
      <div className="mt-12">
        <button className="flex inline-flex items-center bg-orange-400 text-gray-900 rounded font-semibold px-5 py-4 hover:bg-orange-600 transition ease-in-out duration-150">
          <svg className="w-6 fill-current" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
          </svg>
          <span className="ml-2">Play Trailer</span>
        </button>
      </div>

      <template x-if="isOpen">
        <div
          //style="background-color: rgba(0, 0, 0, .5);"
          className="fixed top-0 left-0 w-full h-full flex items-center shadow-lg overflow-y-auto"
        >
          <div className="container mx-auto lg:px-32 rounded-lg overflow-y-auto">
            <div className="bg-gray-900 rounded">
              <div className="flex justify-end pr-4 pt-2">
                <button className="text-3xl leading-none hover:text-gray-300">
                  ×
                </button>
              </div>
              <div className="modal-body px-8 py-8">
                <div
                  className="responsive-container overflow-hidden relative"
                  //style="padding-top: 56.25%"
                >
                  <iframe
                    className="responsive-iframe absolute top-0 left-0 w-full h-full"
                    //style="border:0;"
                    allow="autoplay; encrypted-media"
                    //allowfullscreen=""
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  );
};

export default PlayTrailer;
