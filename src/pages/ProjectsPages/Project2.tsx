import React from 'react';
import { Header } from '../../components/molecules/Header';
import { Layout } from '../../layouts/layout';
import { addHrefPrefix } from '../../utils/addHrefPrefix';


const PageTitle: React.FC = ({ children }) => <div className="text-5xl text-center mt-4 font-black w-9/12">{children}</div>;
const ProjectLink: React.FC<{ href: string }> = ({ children, href }) => (
    <a href={href} className="text-sm mt-4 text-blue-700 hover:underline hover:text-blue-400">
        {children}
    </a>
);
const ArrowLeft: React.FC = ({ children }) => (
    <div className="bg-arrow-left bg-center bg-no-repeat h-20 animate__animated animate__lightSpeedInLeft">
        {children}
    </div>
);
const Projects = () => {
    return (
        <Layout title="Project 2">
            <Header />
            <div className="flex flex-row max-w-full">
                <div className="flex flex-col w-3/12 items-center">
                    <ProjectLink href={addHrefPrefix('/Projects/')}>
                        Powrót do strony projektów
                        <ArrowLeft></ArrowLeft>
                    </ProjectLink>
                </div>
                <PageTitle>Drugi projekt:</PageTitle>
            </div>
        </Layout>
    );
};

export default Projects;
