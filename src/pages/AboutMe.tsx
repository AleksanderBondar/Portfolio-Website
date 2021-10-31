import React from 'react';
import { Header } from '../components/molecules/Header';
import { Layout } from '../layouts/layout';
import { getAllPhotos } from '@/lib/photos';
import { InferGetStaticPropsType } from 'next';
import { Photos } from '../components/atoms/Photos';
const Wrapper: React.FC = ({ children }) => (
    <div className="flex flex-wrap animate-fade-in-down">{children}</div>
);
const PageTitle: React.FC = ({ children }) => <div className="text-5xl text-center mt-4 font-black">{children}</div>;
export const getStaticProps = () => {
    return {
        props: {
            content: getAllPhotos(),
        },
    };
};


const AboutMe = ({ content }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Layout title="About Me">
            <Header />
            <PageTitle>Odwiedziłem między innymi:</PageTitle>
            <Wrapper>
                {content.map((photo) => {
                    return (
                        <Photos
                            title={photo.title}
                            description={photo.description}
                            imgPath={photo.imgPath}
                            lat={photo.lat}
                            lng={photo.lng}
                            name={photo.name}
                        ></Photos>
                    );
                })}
            </Wrapper>
        </Layout>
    );
};

export default AboutMe;
