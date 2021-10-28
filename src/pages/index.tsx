import React from 'react';
import { Menu } from '../components/organism/menu';
import { Layout } from '../layouts/layout';

const WrapperBackground: React.FC = ({ children }) => <div className="bg-black max-w-full pb-20">{children}</div>;
const WrapperCard: React.FC = ({ children }) => <div className="flex justify-left pl-20 pt-20">{children}</div>;
const WrapperObjects: React.FC = ({ children }) => <div className="flex flex-col">{children}</div>;
const WrapperTitle: React.FC = ({ children }) => <div className="text-white text-3xl">{children}</div>;
const WrapperDescription: React.FC = ({ children }) => <div className="text-white text-xl w-5/12">{children}</div>;

const HomePage = () => {
    return (
        <Layout title="HomePage">
            <WrapperBackground>
                <Menu />
                <WrapperCard>
                    <WrapperObjects>
                        <WrapperTitle>Aleksander Bondar</WrapperTitle>
                        <WrapperDescription>Technik mechatronik, początkujący front-end developer, przyszły inżynier.</WrapperDescription>
                    </WrapperObjects>
                </WrapperCard>
            </WrapperBackground>
        </Layout>
    );
};

export default HomePage;
