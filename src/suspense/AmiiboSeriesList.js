import React from 'react';
import { createAutoFetcher } from './fantasy';

import { fetchAmiiboSeries } from './api';
import AmiiboSerie from './AmiiboSerie';

const amiiboSeriesFetcher = createAutoFetcher(fetchAmiiboSeries);

export default function AmiiboSeriesList({ onAmiiboSerieClick, loadingId }) {
    const series = amiiboSeriesFetcher['amiiboSeries'];
    const listItems = series.amiibo.map(serie =>
        <AmiiboSerie key={serie.key}
                     serie={serie}
                     onAmiiboSerieClick={onAmiiboSerieClick}
                     isLoading={serie.key === loadingId} />
    );

    return <ul>{listItems}</ul>;
}