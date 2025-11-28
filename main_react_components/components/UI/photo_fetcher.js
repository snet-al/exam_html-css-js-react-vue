"use client"
import { useEffect, useState } from "react"
import fetch_photos from "@/services/apiFetcher"

export default function PhotoFetcher() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function getPics() {
            const photos = await fetch_photos()
            setData(photos)
        }
        getPics()
    })

    return (
        <div className="grid grid-cols-2 gap-4">
            {data.map((pic) => (
                <div key={pic.id} className="relative">
                    <img src={pic.download_url} className="h-full w-full" />
                    <div className="absolute bg-black text-white bottom-0.5 w-full p-2 opacity-70">
                        <p>{pic.author}</p>
                        <p>{pic.download_url}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
