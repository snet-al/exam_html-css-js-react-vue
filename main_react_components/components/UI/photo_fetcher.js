import { dummyData } from "@/store/data"

export default function PhotoFetcher() {
    const id = [1, 2, 3, 4]
    return (
        <div className="grid grid-cols-2 gap-4">
            {id.map((id) => (
                <div key={id} className="relative">
                    <img src={dummyData[id-1]} className="h-full w-full" />
                    <div className="absolute bg-black text-white bottom-0.5 w-full p-2 opacity-70">
                        <p>Author</p>
                        <p>{dummyData[id-1]}</p>
                    </div>
                </div>
            ))}

        </div>


    )
}