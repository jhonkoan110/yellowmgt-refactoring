import React from 'react';

import { SectionTitle } from 'components/section-title';

import styles from './cases-section.module.css';
import { NavLink } from 'react-router-dom';
import { Content } from 'components/content';
import { jData } from 'constants/data';
import { CasesSectionItem2 } from './cases-section-item2';
import { Image } from 'components/image';
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
                    {cases.map((caseItem) => (
                        <NavLink to={`/cases/${caseItem.id}`}>
                            <li className={styles['cases-list__item']}>
                                <Image src={caseItem.productLogo} width={80} />
                                <div>{caseItem.title}</div>
                            </li>
                        </NavLink>
                    ))}
                    {/* {cases.map((caseItem) => (
                        <CasesSectionItem2
                            key={caseItem.id}
                            title={caseItem.title}
                            imageSrc={caseItem.productLogo!}
                            id={caseItem.id}
                        />
                    ))} */}
                </ul>

                <NavLink to="/cases" className={styles.link}>
                    <button>see all cases</button>
                </NavLink>
            </Content>
        </section>
    );
};
