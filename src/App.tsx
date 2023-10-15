import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AppHeader } from 'components/app-header/app-header';
import { AppFooter } from 'components/app-footer';
import { MainPage } from 'pages/main-page';
import { CasesPage } from 'pages/cases-page';
import { ConcreteCasePage } from 'pages/concrete-case-page/concrete-case-page';

export const App = () => {
    return (
        <>
            <div>
                <AppHeader />

                <main>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/cases" element={<CasesPage />} />
                        <Route path="/cases/:id" element={<ConcreteCasePage />} />
                    </Routes>
                </main>
            </div>

            <AppFooter />
        </>
    );
};
