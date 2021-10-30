
import React from 'react';
import { Maps } from '../molecules/Maps';

const WrapperBackground: React.FC = ({ children }) => (
    <div className="bg-black rounded-3xl w-96 mt-10 mb-10 pb-4 mx-auto">{children}</div>
);
const WrapperObjects: React.FC = ({ children }) => <div className="flex flex-wrap">{children}</div>;
const WrapperObjects1: React.FC = ({ children }) => <div className="flex flex-row mx-auto">{children}</div>;
const WrapperText: React.FC = ({ children }) => <div className="flex flex-col mt-4">{children}</div>;

const WrapperTitle: React.FC<{ title: string }> = ({ title }) => <div className="text-white text-3xl text-center">{title}</div>;
const WrapperDescription: React.FC<{ description: string }> = ({ description }) => (
    <div className="text-white text-xl h-16 text-center">{description}</div>
);
const WrapperImage: React.FC<{ src: string }> = ({ children, src }) => (
    <img className="w-full h-80 rounded-t-3xl" src={src}>
        {children}
    </img>
);



interface PhotosProps {
    title: string;
    description: string;
    imgPath: string;
    lat: number;
    lng: number;
    name: string;
}

export const Photos: React.FC<PhotosProps> =({
    title,
    description,
    imgPath,
    lat,
    lng,
    name,
}) => {
    return (
        <WrapperBackground>
            <WrapperObjects>
                <WrapperImage src={imgPath} />
                <WrapperObjects1>
                    <WrapperText>
                        <WrapperTitle title={title}></WrapperTitle>
                        <WrapperDescription description={description}></WrapperDescription>
                    </WrapperText>
                </WrapperObjects1>
                <div className="w-80 h-80 mx-auto my-2">
                    <Maps lat={lat} lng={lng} name={name} />
                </div>
            </WrapperObjects>
        </WrapperBackground>
    );
};