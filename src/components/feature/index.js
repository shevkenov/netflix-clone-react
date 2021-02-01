import React from 'react';

import { Container, Title, SubTitle } from './styled/feature';

const Feature = ({children}) => {
    return <Container>{children}</Container>
};

Feature.Title = function FeatureTitle({children}) {
    return <Title>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({children}) {
    return <SubTitle>{children}</SubTitle>;
};

export default Feature;