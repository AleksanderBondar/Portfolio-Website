import React from 'react';
import { Header } from '../components/molecules/Header';
import PhotosSite from '../components/molecules/PhotoSite';
import { Layout } from '../layouts/layout';


const HomePage = () => {
    return (
        <Layout title="HomePage">
            <Header />
            <PhotosSite content={[]} />
        </Layout>
    );
};

export default HomePage;
