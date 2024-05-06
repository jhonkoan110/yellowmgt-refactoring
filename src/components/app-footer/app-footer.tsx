import React from 'react';
import { NavLink } from 'react-router-dom';

import { Content } from 'components/content';
import appLogo from 'assets/desktop-logo.svg';
import { HashLink } from 'react-router-hash-link';

import styles from './app-footer.module.css';
import { scrollToTop } from 'utils/scroll-to-top';
import { useScrollToTop } from 'hooks/use-scroll-to-top';
import { Image } from 'components/image';

export const AppFooter = () => {
    useScrollToTop();

    return (
        <footer className={styles['app-footer']}>
            <Content className={styles['app-footer__content-container']}>
                <ul className={styles['app-footer__nav-list']}>
                    <HashLink to="/#about">about us</HashLink>
                    <NavLink to="/cases">cases</NavLink>
                    <NavLink to="/contact_us">contact us</NavLink>
                </ul>
                <NavLink to="/" onClick={scrollToTop}>
                    <Image className={styles['mobile-logo']} src={appLogo} alt="yellowmgt-logo" />
                </NavLink>
                <small className={styles['app-footer__copyrights']}>YELLOWMGT &copy; 2024 All rights reserved</small>
            </Content>
        </footer>
    );
};
