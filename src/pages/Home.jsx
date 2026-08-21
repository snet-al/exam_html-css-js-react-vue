import GreyScaleBtn from "../components/UI/GrayScaleBtn"
import FetchBtn from '../components/UI/FetchBtn'
import LoadBtn from '../components/UI/LoadBtn'
import PhotoCard from "../components/PhotoCard"
import { useEffect, useState } from "react"
import "../css/Home.css"

function Home () {
    return (
       <main>
        <section className="button-section">
            <GreyScaleBtn/>
            <FetchBtn/>
        </section>

        <section className="photo-grid">
            <PhotoCard/>
            <PhotoCard/>
            <PhotoCard/>
            <PhotoCard/>
        </section>
        <section className="load-more-section">
            <LoadBtn/>
        </section>
       </main>
    )
}

export default Home