import React from 'react';
import {AiOutlineHeart} from "react-icons/ai";
import { ImgWrapper, Img, Button } from '../styles/PhotoCardStyles';

const DEFAULT_IMG = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({id, likes=0, src=DEFAULT_IMG})=>{
    return (
        <article>
            <a href={`/detail/${id}`}>
                <ImgWrapper>
                    <Img src={src} />
                </ImgWrapper>
            </a>
            <Button> <AiOutlineHeart size='32px'/> {likes} likes!</Button>
        </article>
    )
}