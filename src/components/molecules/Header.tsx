import React from 'react';
import { Menu } from '../organism/menu';

const WrapperBackground: React.FC = ({ children }) => <div className="bg-black max-w-full pb-14">{children}</div>;
const WrapperCard: React.FC = ({ children }) => <div className="flex justify-left pl-20 pt-20">{children}</div>;
const WrapperObjects: React.FC = ({ children }) => <div className="flex flex-col">{children}</div>;
const WrapperTitle: React.FC = ({ children }) => <div className="text-white text-3xl">{children}</div>;
const WrapperDescription: React.FC = ({ children }) => <div className="text-white text-xl w-8/12">{children}</div>;

export const Header: React.FC = () => {return (
    <WrapperBackground>
        <WrapperCard>
            <WrapperObjects>
                <WrapperTitle>Aleksander Bondar</WrapperTitle>
                <WrapperDescription>
                    Technik mechatronik, początkujący front-end developer, przyszły inżynier.
                </WrapperDescription>
            </WrapperObjects>
        </WrapperCard>
        <Menu />
    </WrapperBackground>
);}