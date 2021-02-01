import React from 'react';
import * as ROUTES from '../constants/routes';

import { Header } from '../components/'

export function HeaderContainer({children}) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME}></Header.Logo>
                <Header.ButtonLink to={ROUTES.LOGIN}>sign in</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}