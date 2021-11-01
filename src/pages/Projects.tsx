import React from 'react';
import { Header } from '../components/molecules/Header';
import { Layout } from '../layouts/layout';

const PageTitle: React.FC = ({ children }) => <div className="text-5xl text-center mt-4 font-black">{children}</div>;

const Projects = () => {
    return (
        <Layout title="Projects">
            <Header />
            <PageTitle>Realizowane projekty:</PageTitle>
            
        </Layout>
    );
};

export default Projects;
