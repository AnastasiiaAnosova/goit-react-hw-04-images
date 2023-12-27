import styled from 'styled-components';

export const ImageGalleryContainer = styled.ul`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;

 `;
