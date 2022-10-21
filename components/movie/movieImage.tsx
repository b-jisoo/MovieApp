export const MovieImage = () => {
  return (
    <div className="tv-images">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold">Images</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* <div className="mt-8">
                        <a @click.prevent="
                                isOpen = true
                                image='https://image.tmdb.org/t/p/original//z7yCvlxspWal1BSjBt8XVxuXnlA.jpg'
                            " href="#">
                            <img src="https://image.tmdb.org/t/p/w500//z7yCvlxspWal1BSjBt8XVxuXnlA.jpg" alt="image1" className="hover:opacity-75 transition ease-in-out duration-150">
                        </a>
            </div> */}
        </div>

        <div className="fixed top-0 left-0 w-full h-full flex items-center shadow-lg overflow-y-auto">
          {/* <div className="container mx-auto lg:px-32 rounded-lg overflow-y-auto">
            <div className="bg-gray-900 rounded">
              <div className="flex justify-end pr-4 pt-2">
                <button @click="isOpen = false" @keydown.escape.window="isOpen = false" className="text-3xl leading-none hover:text-gray-300">×</button>
              </div>
              <div className="modal-body px-8 py-8">
                <img src="image" alt="poster" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MovieImage;
