import React from 'react'
import { ButtonContainer } from '../Button/Button.styled';


const Button = ({ loadMoreClick }) => {

    const handleClickLoadButton = () => {
        loadMoreClick();
    }

    return (
        <ButtonContainer onClick={handleClickLoadButton} >Load more</ButtonContainer>
    )
}

export default Button