import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Controls from '../components/Controls'
import Grid from '../components/Grid'
import Footer from '../components/Footer'

const photoCount = 4;

function getPhotos(count){
    const photos = [];
    for (let i = 0; i < count; i++) {
        photos.push(`https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`);
    }
    return photos;
}
