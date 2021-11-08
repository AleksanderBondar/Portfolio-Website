import { addImagePrefix } from '@/src/utils/addImagePrefix';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import { SingleCard } from './Cards';

const Background: React.FC = ({children}) =>
 <div className="bg-white w-full">{children}</div>;
const Wrapper: React.FC = ({ children }) =>
 <div className="flex flex-wrap justify-center">{children}</div>;
const Button: React.FC<{ onClick: React.MouseEventHandler }> = ({ onClick, children }) => (
    <button onClick={onClick} className="w-56 h-24 bg-blue-400 mt-20 mx-auto shadow-2xl cursor-pointer rounded-2xl hover:opacity-40 hover:shadow-xl">
        {children}
    </button>
);
const CardsGrid: React.FC = ({ children }) =>
 <div className="mt-10 grid grid-cols-4 gap-5 mb-10">{children}</div>;

const initialValue = [{ src: '', id: 0, matched: false }];

const cardImages = [
    { src: '/images/project1/images/angry.png', matched: false },
    { src: '/images/project1/images/cool.png', matched: false },
    { src: '/images/project1/images/funny.png', matched: false },
    { src: '/images/project1/images/nice.png', matched: false },
    { src: '/images/project1/images/smile.png', matched: false },
    { src: '/images/project1/images/swag.png', matched: false },
];

export const AppMemory: React.FC = () =>
{
    const [cards, setCards] = useState(initialValue)
    const [turns, setTurns] = useState(0)
    const [passed, setPass] = useState(0)
    const [choiceOne, setChoiceOne] = useState<any>(null)
    const [choiceTwo, setChoiceTwo] = useState<any>(null);
    const [disabled, setDisabled] = useState(false);

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(()=>Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))
        setPass(0)
        setChoiceOne(null)
        setChoiceTwo(null)
        setCards(shuffledCards)
        setTurns(0)
    }

    const handleChoice = (card: any) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    useEffect(() => {
        if (choiceOne && choiceTwo){
            setDisabled(true);
            if(choiceOne.src === choiceTwo.src)
            {
                setPass(passed + 1)
                setCards(prevCards => {
                    return prevCards.map((card) => {
                        if (card.src === choiceOne.src) {
                            return {...card, matched: true}
                        } else {
                            return card;
                        }
                    })
                })
                resetTurn();
            } else {
                setTimeout(()=>resetTurn(), 1000)
            }
        }
    }, [choiceOne, choiceTwo])

    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisabled(false)
    }

    useEffect(() => {
        shuffleCards()
    }, [])

    return (
        <Background>
            <Wrapper>
                <div className="flex flex-col items-center mr-2">
                    <Button onClick={shuffleCards as MouseEventHandler}>
                        <div className="my-8 text-center font-bold">New Game</div>
                    </Button>
                    <div className="flex flex-col w-56 text-center mt-10">
                        <div> Rozegrane rundy: {turns}</div>
                        <div className="mt-5"> Trafione pary: {passed}</div>
                    </div>
                </div>
                <CardsGrid>
                    {cards.map((card) => (
                        <SingleCard
                        id={card.id}
                        src={addImagePrefix(card.src)}
                        onClick={()=>handleChoice(card)}
                        flipped={card === choiceOne || card === choiceTwo || card.matched}
                        disabled={disabled}
                        ></SingleCard>
                    ))}
                </CardsGrid>
                
            </Wrapper>
        </Background>
    );};