import React, { useEffect } from 'react';

import { Content } from 'components/content';
import { Breadcrumbs } from 'components/breadcrumbs';
import { scrollToTop } from 'utils/scrollToTop';
import { CasesPageItem } from './cases-page-item';
import { ALL_CASES_2 } from 'constants/data';

import styles from './cases-page.module.css';

const CasesPage = () => {
    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <Content>
            <section>
                <Breadcrumbs />

                <div className={styles.cases}>
                    {ALL_CASES_2.map((caseItem) => (
                        <CasesPageItem
                            imageLinks={caseItem.cases.map((c) => c.imageSrc)}
                            title={`${caseItem.companyName}. ${caseItem.title}`}
                            logo={caseItem.productLogo}
                            tasks={['Creative & Production', 'Creative & Production', 'Creative & Production']}
                            text="We strategized and selected Influencers in line with the goals of the advertising campaign for Lords Mobile. The right choice of Influencers helped to achieve the necessary results and success in the campaign."
                            bloggers={['Brigman', 'Leliya Taxi']}
                        />
                    ))}
                </div>
            </section>
        </Content>
    );
};

export default CasesPage;
