import React from 'react';

import { SectionTitle } from 'components/section-title';
import { CasesSectionItem } from './cases-section-item';

import styles from './cases-section.module.css';
import { NavLink } from 'react-router-dom';
import { Content } from 'components/content';
import { jData } from 'constants/data';
const { 1: case1, 10: case10, 7: case7, 5: case5, 2: case2 } = jData;

const cases = [case1, case10, case7, case5, case2];

export const CasesSection = () => {
    return (
        <section>
            <SectionTitle title="cases" />

            <ul className={styles['cases-list']}>
                {cases.map((caseItem) => (
                    <CasesSectionItem
                        addition={caseItem.addition}
                        title={caseItem.title}
                        imageSrc={caseItem.cases[0].imageSrc}
                    />
                ))}
            </ul>

            <Content>
                <NavLink to="/cases" className={styles.link}>
                    <button>see all cases</button>
                </NavLink>
            </Content>
        </section>
    );
};
