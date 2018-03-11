import React from 'react';
import { createAutoFetcher } from './fantasy';

import { fetchAmiiboSerie } from './api';
import Amiibo from './Amiibo';

const amiiboSerieFetcher = createAutoFetcher(fetchAmiiboSerie);

export default function AmiiboSerieList({ amiiboSerie }) {
    const serie = amiiboSerieFetcher[amiiboSerie.key];
    const listItems = serie.amiibo.map(amiibo =>
            <Amiibo key={amiibo.tail} amiibo={amiibo} />
    );

    return <ul>{listItems}</ul>;
}