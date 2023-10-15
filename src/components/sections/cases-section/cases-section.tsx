import React from 'react';

import { SectionTitle } from 'components/section-title';
import { CasesSectionItem } from './cases-section-item';

import styles from './cases-section.module.css';
import { NavLink } from 'react-router-dom';
import { Content } from 'components/content';

export const CasesSection = () => {
    return (
        <section>
            <SectionTitle title="cases" />

            <ul className={styles['cases-list']}>
                <CasesSectionItem />
                <CasesSectionItem />
                <CasesSectionItem />
            </ul>

            <Content>
                <NavLink to="/cases" className={styles.link}>
                    <button>see all cases</button>
                </NavLink>
            </Content>
        </section>
    );
};
