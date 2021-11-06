
import React from 'react';
import { Header } from '../components/molecules/Header';
import { Layout } from '../layouts/layout';
import { addHrefPrefix } from '../utils/addHrefPrefix';

const ArrowRight: React.FC = ({ children }) => (
    <div className="bg-arrow-right bg-right-top bg-no-repeat animate__animated animate__jackInTheBox animate__delay-1s mx-5 mt-4">
        {children}
    </div>
);
const Wrapper: React.FC=({ children }) => (<div className="bg-sticky-note bg-no-repeat w-103 h-103 mr-10 pl-12 pt-2 mt-10 bg-cover">{children}</div>)
const Link: React.FC<{href: string}> = ({ children, href }) => <a href={href}>{children}</a>
const MemberDescription: React.FC = ({children}) => <div className="text-xl font-bold w-2/3 ml-12 mt-5">{children}</div>
const PageTitle: React.FC = ({ children }) => <div className="text-5xl text-center mt-4 font-black">{children}</div>;
const ProjectLink:React.FC = ({ children }) => <div className="text-5xl mt-4">{children}</div>
const Projects = () => {
    return (
        <Layout title="Projects">
            <Header />
            <PageTitle>Realizowane projekty:</PageTitle>
            <div className="flex flex-wrap">
                <Wrapper>
                    <ProjectLink>
                        <Link href={addHrefPrefix('/ProjectsPages/Project1/')}>
                            <ArrowRight>Projekt 1</ArrowRight>
                        </Link>
                        <MemberDescription>Pierwszy projekt przedstawia Memory Game.</MemberDescription>
                        <div className="bg-project1 bg-no-repeat bg-contain w-80 h-96 mt-10 mx-auto"></div>
                    </ProjectLink>
                </Wrapper>
                <Wrapper>
                    <ProjectLink>
                        <Link href={addHrefPrefix('/ProjectsPages/Project2/')}>
                            <ArrowRight>Projekt 2</ArrowRight>
                        </Link>
                        <MemberDescription>...</MemberDescription>
                        <div className="bg-soon bg-no-repeat bg-contain w-80 h-96 mx-auto"></div>
                    </ProjectLink>
                </Wrapper>
                <Wrapper>
                    <ProjectLink>
                        <Link href={addHrefPrefix('/ProjectsPages/Project3/')}>
                            <ArrowRight>Projekt 3</ArrowRight>
                        </Link>
                        <MemberDescription>...</MemberDescription>
                        <div className="bg-soon bg-no-repeat bg-contain w-80 h-96 mx-auto"></div>
                    </ProjectLink>
                </Wrapper>
            </div>
        </Layout>
    );
};

export default Projects;
