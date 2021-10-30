import React from 'react';

const WrapperMenu: React.FC = ({ children }) => <ul className="flex flex-row justify-end mr-6 mt-10">{children}</ul>;
const WrapperLi: React.FC = ({ children }) => (
    <li className="text-base pl-4 text-blue-200 cursor-pointer hover:underline">{children}</li>
);

export const Menu = () => {
    return (
        <WrapperMenu>
                <WrapperLi>Strona główna</WrapperLi>
                <WrapperLi>Projekty</WrapperLi>
                <WrapperLi>O mnie</WrapperLi>
        </WrapperMenu>
    );
};
