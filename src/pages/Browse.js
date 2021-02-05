import React from 'react';

import { useContent } from "../hooks/";
import { BrowseContainer } from '../containers/browse';
import selectionMap from '../utils/selection-map';

export default function Browse() {
    
    const {series} = useContent("series");
    const {films} = useContent("films");
    const slides = selectionMap({films, series});

    return <BrowseContainer content={slides}/>
}