import React from 'react'
import { ImageGalleryItemStyles, ImageGalleryItemImgStyles } from './ImageGalleryItem.styled'

const ImageGalleryItem = ({ webformatURL, alt, largeImageURL, toogleModal }) => {
    const handleClickToImage = () => {
        toogleModal(largeImageURL, alt);
    }
    return (
        <ImageGalleryItemStyles onClick={handleClickToImage}>
            <ImageGalleryItemImgStyles src={webformatURL} alt={alt} />
        </ImageGalleryItemStyles>
    )
}

export default ImageGalleryItem

