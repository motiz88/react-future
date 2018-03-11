import React from 'react';
import { createAutoFetcher } from './fantasy';

const imageFetcher = createAutoFetcher(
    (src) => new Promise(resolve => {
        const image = new Image();
        image.onload = () => resolve(src);
        image.src = src;
    })
);

export default function Img(props) {
    return <img src={imageFetcher[props.src]} alt={props.alt} {...props} />;
}