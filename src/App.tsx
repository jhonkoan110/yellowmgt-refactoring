import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AppHeader } from 'components/app-header/app-header';
import { AppFooter } from 'components/app-footer';
import { Loader } from 'components/loader';

const MainPage = lazy(() => import('pages/main-page'));
const CasesPage = lazy(() => import('pages/cases-page'));
const ConcreteCasePage = lazy(() => import('pages/concrete-case-page'));
const ContactUsPage = lazy(() => import('pages/contact-us-page'));

export const App = () => {
    useEffect(() => {
        const appLoader = document.querySelector('.app-loader');

        if (appLoader) {
            appLoader.remove();
        }
    }, []);

    return (
        <>
            <div>
                <AppHeader />

                <main>
                    <Suspense fallback={<Loader />}>
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/cases" element={<CasesPage />} />
                            <Route path="/cases/:id" element={<ConcreteCasePage />} />
                            <Route path="/contact_us" element={<ContactUsPage />} />
                        </Routes>
                    </Suspense>
                </main>
            </div>

            <AppFooter />
        </>
    );
};
