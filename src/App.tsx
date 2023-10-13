import React from 'react';

import { AppHeader } from 'components/app-header/app-header';
import { MainInfoSection } from 'components/sections/main-info-section';

export const App = () => {
    return (
        <>
            <AppHeader />

            <main>
                <MainInfoSection />
            </main>
        </>
    );
};
