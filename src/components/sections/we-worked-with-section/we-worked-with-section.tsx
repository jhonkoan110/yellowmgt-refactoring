import React from 'react';

import { SectionTitle } from 'components/section-title';
import { Content } from 'components/content';

import iggLogo from 'assets/igg_logo.png';
import nintendoLogo from 'assets/nintendo-logo.png';
import mgLogo from 'assets/match-group-logo.png';
import masogoLogo from 'assets/masomo-logo.svg';
import nutakuLogo from 'assets/nutaku-logo.svg';
import oasisGamesLogo from 'assets/oasis-games-logo.png';
import wildlifeLogo from 'assets/wildlife-logo.webp';
import tencentGamesLogo from 'assets/tencent-games-logo.png';

import styles from './we-worked-with-section.module.css';

export const WeWorkedWithSection = () => {
    return (
        <section>
            <SectionTitle title="we worked with" />

            <Content className={styles['content-container']}>
                <img className={styles.igg} src={iggLogo} />
                <img className={styles.nintendo} src={nintendoLogo} />
                <img className={styles['match-group']} src={mgLogo} />
                <img className={styles.masomo} src={masogoLogo} />
                <img className={styles.nutaku} src={nutakuLogo} />
                <img className={styles['oasis-games']} src={oasisGamesLogo} />
                <img className={styles.wildlife} src={wildlifeLogo} />
                <img className={styles['tencent-games']} src={tencentGamesLogo} />
            </Content>
        </section>
    );
};
