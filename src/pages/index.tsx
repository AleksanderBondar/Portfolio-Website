import React from 'react';
import { Header } from '../components/molecules/Header';
import { Techbar } from '../components/molecules/Rerousel';
import { Layout } from '../layouts/layout';

const PageTitle: React.FC = ({ children }) => <div className="text-5xl text-center mt-4 font-black">{children}</div>;

const HomePage = () => {
    return (
        <Layout title="HomePage">
            <Header isHomePage={true}/>
            <PageTitle>Technologie które wykorzystuje:</PageTitle>
            <Techbar images={[]}/>
        </Layout>
    );
};

export default HomePage;
