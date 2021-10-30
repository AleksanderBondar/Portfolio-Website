import React from 'react';
import { Header } from '../components/molecules/Header';
import { Layout } from '../layouts/layout';
import { getAllPhotos } from '@/lib/photos';
import { InferGetStaticPropsType } from 'next';
import { Photos } from '../components/atoms/Photos';
const Wrapper: React.FC = ({ children }) => <div className="flex flex-wrap">{children}</div>;
export const getStaticProps = () => {
    return {
        props: {
            content: getAllPhotos(),
        },
    };
};


const HomePage = ({ content }: InferGetStaticPropsType<typeof getStaticProps>) => {
    let i = 0;
    return (
        <Layout title="HomePage">
            <Header />
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

export default HomePage;
