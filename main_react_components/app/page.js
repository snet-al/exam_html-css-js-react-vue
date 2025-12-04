import PhotoFetcher from "@/components/UI/photo_fetcher";
import Layout from "@/layout/layout";

export default function Home() {

  

  return (
    <Layout>
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
        <PhotoFetcher/>
    </Layout>
      
      
  );
}
