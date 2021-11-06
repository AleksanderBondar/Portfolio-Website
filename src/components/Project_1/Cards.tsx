import { addImagePrefix } from '@/src/utils/addImagePrefix';
import React from 'react';

const CardWrapper: React.FC<{ key: React.Key }> = ({ children, key }) => (
    <div key={key} className="relative">
        {children}
    </div>
);
const CardFront: React.FC<{ src: string }> = ({ children, src }) => (
    <img src={src} className="w-full block border-2 rounded-2xl animate__animated animate__flipInY">
        {children}
    </img>
);
const CardBack: React.FC<{ onClick: React.MouseEventHandler }> = ({ children, onClick }) => (
    <img
        onClick={onClick}
        src={addImagePrefix("/images/project1/images/cover.png")}
        className="w-full block border-2 rounded-2xl animate__animated animate__flipInY cursor-pointer hover:opacity-50"
    >
        {children}
    </img>
);
const FlipCheck: React.FC<{ flipped: boolean, card: any, disabled: boolean, onClick: any }> = ({ disabled, flipped, card, onClick }) => {
    if(flipped) {
        return <CardFront src={card.src} />;
    } else {
        if(!disabled) {
            return <CardBack onClick={card.onClick} />;
        } else return <CardBack onClick={onClick} />;
    }
}
interface SingleCardProps {
    id: React.Key,
    src: string,
    onClick: React.MouseEventHandler,
    flipped: boolean,
    disabled: boolean,
}

export const SingleCard: React.FC<SingleCardProps> = (card) => {

    return (
        <CardWrapper key={card.id}>
            <FlipCheck card={card} flipped={card.flipped} disabled={card.disabled} onClick={undefined}>
  
            </FlipCheck>
        </CardWrapper>
    );
}