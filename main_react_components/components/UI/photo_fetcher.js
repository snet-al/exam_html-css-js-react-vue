export default function PhotoFetcher() {
    const id = [1, 2, 3, 4]
    return (
        <div className="grid grid-cols-2 gap-4">
            {id.map((id) => (
                <div key={id} className="relative">
                    <img src={`https://picsum.photos/id/237/367/280`} className="h-full w-full" />
                    <div className="absolute bg-black text-white bottom-0.5 w-full p-2 opacity-70">
                        <p>Author</p>
                        <p>https://picsum.photos/id/237/367/280</p>
                    </div>
                </div>
            ))}

        </div>


    )
}