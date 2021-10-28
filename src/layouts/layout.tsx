import React from 'react';
import { CustomHelmet } from '@/src/components';
interface LayoutProps {
    title: string;
    pageTitle?: string;
}

const Container: React.FC = ({children}) => <div className="w-full">{children}</div>

export const Layout: React.FC<LayoutProps> = ({ children, pageTitle, title }) => {
    return (
        <div className="container max-w-full">
            <CustomHelmet pageTitle={pageTitle ? pageTitle : title} />
            <Container>{children}</Container>
        </div>
    );
};
