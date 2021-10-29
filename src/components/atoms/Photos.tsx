
import React from 'react';

const WrapperBackground: React.FC = ({ children }) => <div className="bg-gray-200 w-2/3 mt-20 ml-20">{children}</div>;
const WrapperCard: React.FC<{ className: string }> = ({ children, className }) => (
    <div className={className}>{children}</div>
);
const WrapperObjects: React.FC = ({ children }) => <div className="flex flex-row">{children}</div>;
const WrapperText: React.FC = ({ children }) => <div className="flex flex-col ml-4">{children}</div>;
const WrapperTitle: React.FC<{ title: string }> = ({ title }) => <div className="text-white text-3xl">{title}</div>;
const WrapperDescription: React.FC<{ description: string }> = ({ description }) => (
    <div className="text-white text-xl w-5/12">{description}</div>
);
const WrapperImage: React.FC<{src: string;}> = ({ children, src }) => <img className="w-1/3 h-auto" src={src}>{children}</img>


interface PhotosProps {
    title:string;
    description: string;
    imgPath: string;
}

export const Photos: React.FC<PhotosProps> =({
    title,
    description,
    imgPath,
}) => {
    return (
    <WrapperBackground>
        <WrapperCard className="">
            <WrapperObjects>
                <WrapperImage src={imgPath} />
                <WrapperText>
                    <WrapperTitle title={title}></WrapperTitle>
                    <WrapperDescription description={description}></WrapperDescription>
                </WrapperText>
            </WrapperObjects>
        </WrapperCard>
    </WrapperBackground>
    );
};