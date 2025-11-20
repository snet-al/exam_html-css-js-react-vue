export default function Home() {

  const id = [1,2,3,4]

  return (
    <div className="max-w-[750px] justify-self-center">
      
      {/*Header*/}
      <div className="w-full p-4">
        <p className="text-4xl">Photo Fetcher</p>
        <div className="flex justify-between my-3">
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
            />
            <p>Make photos grayscale</p>
          </div>
          <button
            className="text-white bg-purple-700 px-3 py-1 rounded-sm"
          >
            Fetch New Photos
          </button>
        </div>
      </div>

      {/*photo fetcher*/}
        <div className="grid grid-cols-2 gap-4">

            <div className="relative">
              <img src={`https://picsum.photos/id/237/367/280`} className="h-full w-full"/>
              <div className="absolute bg-black text-white bottom-0.5 w-full p-2 opacity-70">
                <p>Author</p>
                <p>https://picsum.photos/id/237/367/280</p>
              </div>
            </div>

            <div className="relative">
              <img src={`https://picsum.photos/id/237/367/280`} className="h-full w-full"/>
              <div className="absolute bg-black text-white bottom-0.5 w-full p-2 opacity-70">
                <p>Author</p>
                <p>https://picsum.photos/id/237/367/280</p>
              </div>
            </div>

            <div className="relative">
              <img src={`https://picsum.photos/id/237/367/280`} className="h-full w-full"/>
              <div className="absolute bg-black text-white bottom-0.5 w-full p-2 opacity-70">
                <p>Author</p>
                <p>https://picsum.photos/id/237/367/280</p>
              </div>
            </div>

            <div className="relative">
              <img src={`https://picsum.photos/id/237/367/280`} className="h-full w-full"/>
              <div className="absolute bg-black text-white bottom-0.5 w-full p-2 opacity-70">
                <p>Author</p>
                <p>https://picsum.photos/id/237/367/280</p>
              </div>
            </div>

        </div>
    </div>
  );
}
