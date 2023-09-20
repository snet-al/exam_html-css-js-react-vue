import React from "react";
import ImageItem from "../components/ImageItem";
import MainLayout from "../layout/MainLayout";
import { dummyData } from "../store/data";

const ImageContainer = () => {
    return (
        <MainLayout>
        <section className="image-container">
            {dummyData.map((data) => (
                <ImageItem key={data.id} data={data}/>
            ))}
        </section>
        </MainLayout>
    );
}
export default ImageContainer;