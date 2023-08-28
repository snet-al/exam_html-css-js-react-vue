import React from "react";
import "../../App.css";
import ImageItem from "../../components/ImageItem/ImageItem";
import MainLayout from "../../layout/MainLayout/MainLayout";
import dataDummy from "../../store/data/data";

const ImageGalleryPage = () => {
    return (
        <MainLayout>
            <section className="container">
                {dataDummy.map((data) => (
                    <ImageItem key={data.id} data={data} />
                ))}
            </section>
        </MainLayout>
    );
};

export default ImageGalleryPage;
