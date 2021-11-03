import React from 'react';
import { Header } from '../components/molecules/Header';
import { Techbar } from '../components/molecules/Rerousel';
import { Layout } from '../layouts/layout';
import { Grid } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';

const gf = new GiphyFetch('MabKQ2XmAORoYLeZGfIppgTluDBYpq8Y');

const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 });

const PageTitle: React.FC = ({ children }) => <div className="text-5xl text-center mt-4 font-black">{children}</div>;

const HomePage = () => {
    return (
        <Layout title="HomePage">
            <Header isHomePage={true} />
            <PageTitle>Technologie które wykorzystuje:</PageTitle>
            <Techbar images={[]} />
            <Grid className="mx-auto mt-5 max-w-full" width={1500} columns={6} fetchGifs={fetchGifs} />
        </Layout>
    );
};

export default HomePage;
