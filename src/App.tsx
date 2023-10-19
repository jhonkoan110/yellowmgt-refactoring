import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AppHeader } from 'components/app-header/app-header';
import { AppFooter } from 'components/app-footer';
// import { MainPage } from 'pages/main-page';
// import { CasesPage } from 'pages/cases-page';
// import { ConcreteCasePage } from 'pages/concrete-case-page/concrete-case-page';
// import { ContactUsPage } from 'pages/contact-us-page';

const MainPage = lazy(() => import('pages/main-page'));
const CasesPage = lazy(() => import('pages/cases-page'));
const ConcreteCasePage = lazy(() => import('pages/concrete-case-page'));
const ContactUsPage = lazy(() => import('pages/contact-us-page'));

export const App = () => {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <div>
                <AppHeader />

                <main>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/cases" element={<CasesPage />} />
                        <Route path="/cases/:id" element={<ConcreteCasePage />} />
                        <Route path="/contact_us" element={<ContactUsPage />} />
                    </Routes>
                </main>
            </div>

            <AppFooter />
        </Suspense>
    );
};
