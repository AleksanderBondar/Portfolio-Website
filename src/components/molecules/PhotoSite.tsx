import React from 'react';
import { getAllPhotos } from '@/ssg/photos';
import { InferGetStaticPropsType } from 'next';
import { Photos } from '../atoms/Photos';

const PhotosSite = ({ content }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            {content.map((photo) => {
                <Photos title={photo.title} description={photo.description} imgPath={photo.imgPath}></Photos>
            })}
        </div>
    );
};

export default PhotosSite;

export const getStaticProps = () => {
    return {
        props: {
            content: getAllPhotos(),
        },
    };
};
