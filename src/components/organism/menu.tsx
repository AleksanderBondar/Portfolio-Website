import React from 'react';
import Link from 'next/link';

const WrapperMenu: React.FC = ({ children }) => (
    <ul className="flex flex-row pl-16 pt-4">{children}</ul>
);
const WrapperLi: React.FC = ({ children }) => (
    <li className="text-base ml-4 text-blue-200 cursor-pointer hover:underline">{children}</li>
);

export const Menu = () => {
    return (
        <WrapperMenu>
            <WrapperLi>
                <Link href="/">
                    <a>Strona główna</a>
                </Link>
            </WrapperLi>
            <WrapperLi>
                <Link href="/Projects">
                    <a>Projekty</a>
                </Link>
            </WrapperLi>
            <WrapperLi>
                <Link href="/AboutMe">
                    <a>O mnie</a>
                </Link>
            </WrapperLi>
        </WrapperMenu>
    );
};
