import React from 'react';

import { SectionTitle } from 'components/section-title';
// import { CasesSectionItem } from './cases-section-item';

import styles from './cases-section.module.css';
import { NavLink } from 'react-router-dom';
import { Content } from 'components/content';
import { jData } from 'constants/data';
import { CasesSectionItem2 } from './cases-section-item2';
const {
    lords_mobile,
    pubg_mobile_x_league_of_legends,
    basketball_arena,
    'zooba_&_tennis_clash': zooba,
    time_princess,
} = jData;

const cases = [lords_mobile, pubg_mobile_x_league_of_legends, basketball_arena, zooba, time_princess];

cases.length = 4;

export const CasesSection = () => {
    return (
        <section>
            <SectionTitle title="cases" />

            <Content>
                <ul className={styles['cases-list']}>
                    {/* <ul className={styles['cases-list']}> */}
                    {cases.map((caseItem) => (
                        <CasesSectionItem2
                            key={caseItem.id}
                            title={caseItem.title}
                            imageSrc={caseItem.productLogo!}
                            id={caseItem.id}
                        />
                        // <CasesSectionItem
                        //     key={caseItem.id}
                        //     addition={caseItem.addition}
                        //     title={caseItem.title}
                        //     imageSrc={caseItem.cases[0].imageSrc}
                        // />
                    ))}
                </ul>
                {/* </ul> */}

                <NavLink to="/cases" className={styles.link}>
                    <button>see all cases</button>
                </NavLink>
            </Content>
        </section>
    );
};
