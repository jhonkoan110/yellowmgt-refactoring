import React, { useEffect } from 'react';

import { Content } from 'components/content';
import { Breadcrumbs } from 'components/breadcrumbs';
import { scrollToTop } from 'utils/scroll-to-top';
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
                            imageLinks={caseItem.cases.slice(0, 4).map((c) => c.imageSrc)}
                            title={caseItem.title}
                            logo={caseItem.productLogo}
                            tasks={caseItem.tasks}
                            text={caseItem.addition}
                            activation={caseItem.activation}
                            creators={caseItem.creators}
                            views={caseItem.views}
                            extra={caseItem.extra}
                            isShorts={caseItem.isShorts}
                        />
                    ))}
                </div>
            </section>
        </Content>
    );
};

export default CasesPage;
