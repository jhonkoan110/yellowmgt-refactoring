import React from 'react';
import { NavLink } from 'react-router-dom';

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
import { Image } from 'components/image';

export const WeWorkedWithSection = () => {
    return (
        <section>
            <SectionTitle title="we worked with" />

            <Content className={styles['content-container']}>
                <NavLink to="https://www.igg.com/" target="_blank">
                    <Image className={styles.igg} src={iggLogo} />
                </NavLink>
                <NavLink to="https://www.nintendo.com/us/" target="_blank">
                    <Image className={styles.nintendo} src={nintendoLogo} />
                </NavLink>
                <NavLink to="https://mtch.com/" target="_blank">
                    <Image className={styles['match-group']} src={mgLogo} />
                </NavLink>
                <NavLink to="https://www.masomo.com/" target="_blank">
                    <Image className={styles.masomo} src={masogoLogo} />
                </NavLink>
                <NavLink to="https://www.nutaku.net/" target="_blank">
                    <Image className={styles.nutaku} src={nutakuLogo} />
                </NavLink>
                <NavLink to="https://oasgames.com/wap/en/home.html" target="_blank">
                    <Image className={styles['oasis-games']} src={oasisGamesLogo} />
                </NavLink>
                <NavLink to="https://wildlifestudios.com/games/" target="_blank">
                    <Image className={styles.wildlife} src={wildlifeLogo} />
                </NavLink>
                <NavLink to="https://www.tencentgames.com/" target="_blank">
                    <Image className={styles['tencent-games']} src={tencentGamesLogo} />
                </NavLink>
            </Content>
        </section>
    );
};
