import React from 'react';

import { AboutUsSection } from 'components/sections/about-us-section';
import { CasesSection } from 'components/sections/cases-section';
import { MailSection } from 'components/sections/mail-section';
import { MainInfoSection } from 'components/sections/main-info-section';
import { OurServicesSection } from 'components/sections/our-services-section';
import { WeWorkedWithSection } from 'components/sections/we-worked-with-section';

const MainPage = () => {
    return (
        <>
            <MainInfoSection />
            <AboutUsSection />
            <OurServicesSection />
            <CasesSection />
            <WeWorkedWithSection />
            <MailSection />
        </>
    );
};

export default MainPage;
