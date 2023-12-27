import React from 'react'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import { ImageGalleryContainer } from './ImageGallery.styled'
import { nanoid } from "nanoid";


const ImageGallery = ({ images, toogleModal }) => {
    return (
        <ImageGalleryContainer>
            {images.map(({ webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem
                    key={nanoid()}
                    webformatURL={webformatURL}
                    alt={tags}
                    largeImageURL={largeImageURL}
                    toogleModal={toogleModal}
                />
            ))}
        </ImageGalleryContainer>
    )
}

export default ImageGallery
