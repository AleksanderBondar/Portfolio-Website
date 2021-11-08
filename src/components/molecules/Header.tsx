import React, { useState } from 'react';
import { Menu } from '../organism/menu';
import Calendar from 'react-calendar';
import { CalendarWrap } from './CalendarWrap';
import 'animate.css';


const WrapperBackground: React.FC = ({ children }) => <div className="bg-black max-w-full pb-14">{children}</div>;
const WrapperCard: React.FC = ({ children }) => <div className="flex flex-wrap mx-auto justify-left pl-20 pt-20">{children}</div>;
const WrapperObjects: React.FC = ({ children }) => <div className="flex flex-row">{children}</div>;
const WrapperTitle: React.FC = ({ children }) => (
    <div className="text-white text-3xl animate__animated animate__bounce">{children}</div>
);

const WrapperDescription: React.FC = ({ children }) => (
    <div className="text-white text-xl w-8/12 animate__animated animate__rotateInUpLeft">{children}</div>
    
);

interface HeaderProps {
    isHomePage?: boolean;
}

export const Header: React.FC<HeaderProps> = ({isHomePage}) => {
    const [value, onChange] = useState(new Date());
    if (isHomePage) {
        return (
            <WrapperBackground>
                <WrapperCard>
                    <WrapperObjects>
                        <div className="flex flex-col">
                        <WrapperTitle>Aleksander Bondar</WrapperTitle>
                        <WrapperDescription>
                            Technik mechatronik, początkujący front-end developer, przyszły inżynier.
                        </WrapperDescription>
                        </div>
                        <CalendarWrap className="w-6/12">
                            <Calendar onChange={onChange} value={value} />
                        </CalendarWrap>
                    </WrapperObjects>
                </WrapperCard>
                <Menu />
            </WrapperBackground>
        );
    } else if (!isHomePage) {
        return (
            <WrapperBackground>
                <WrapperCard>
                    <WrapperObjects>
                        <div className="flex flex-col">
                        <WrapperTitle>Aleksander Bondar</WrapperTitle>
                        <WrapperDescription>
                            Technik mechatronik, początkujący front-end developer, przyszły inżynier.
                        </WrapperDescription>
                        </div>
                    </WrapperObjects>
                </WrapperCard>
                <Menu />
            </WrapperBackground>
        );
    } else return null;
};