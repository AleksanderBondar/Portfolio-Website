import React, { useState } from 'react';
import { Menu } from '../organism/menu';
import Calendar from 'react-calendar';
import { CalendarWrap } from './CalendarWrap';
import 'animate.css';

const WrapperBackground: React.FC = ({ children }) => <div className="bg-black max-w-full pb-14">{children}</div>;
const WrapperCard: React.FC = ({ children }) => <div className="flex flex-wrap mx-auto justify-left pl-20 pt-20">{children}</div>;
const WrapperObjects: React.FC = ({ children }) => <div className="flex flex-col">{children}</div>;
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
                        <WrapperTitle>Aleksander Bondar</WrapperTitle>
                        <WrapperDescription>
                            Technik mechatronik, początkujący front-end developer, przyszły inżynier.
                        </WrapperDescription>
                    </WrapperObjects>
                </WrapperCard>
                <CalendarWrap className="w-full">
                    <Calendar onChange={onChange} value={value} />
                </CalendarWrap>
                <Menu />
            </WrapperBackground>
        );
    } else if (!isHomePage) {
        return (
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
        );
    } else return null;
};