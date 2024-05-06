import React from 'react';

import { SectionTitle } from 'components/section-title';

import styles from './cases-section.module.css';
import { NavLink } from 'react-router-dom';
import { Content } from 'components/content';
import { jData } from 'constants/data';
import { Image } from 'components/image';

const { lords_mobile, pubg_mobile, nintendo, tennis_clash } = jData;

// const cases = [lords_mobile, pubg_mobile, basketball_arena, tennis_clash, time_princess];
const cases = [pubg_mobile, lords_mobile, nintendo, tennis_clash];

cases.length = 4;

export const CasesSection = () => {
    return (
        <section>
            <SectionTitle title="cases" />

            <Content>
                <ul className={styles['cases-list']}>
                    {cases.map((caseItem) => (
                        <li key={caseItem.id} className={styles['cases-list__item']}>
                            <Image src={caseItem.productLogo} width={80} />
                            <div>{caseItem.title}</div>
                        </li>
                    ))}
                </ul>

                <NavLink to="/cases" className={styles.link}>
                    <button>see all cases</button>
                </NavLink>
            </Content>
        </section>
    );
};
