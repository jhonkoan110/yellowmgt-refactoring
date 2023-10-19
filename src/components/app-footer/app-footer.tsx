import React from 'react';
import { NavLink } from 'react-router-dom';

import { Content } from 'components/content';
import appLogo from '/public/assets/desktop-logo.svg';
import { HashLink } from 'react-router-hash-link';

import styles from './app-footer.module.css';
import { scrollToTop } from 'utils/scrollToTop';
import { useScrollToTop } from 'hooks/useScrollToTop';

export const AppFooter = () => {
    useScrollToTop();

    return (
        <footer className={styles['app-footer']}>
            <Content className={styles['app-footer__content-container']}>
                <ul className={styles['app-footer__nav-list']}>
                    <HashLink to="/#about">about us</HashLink>
                    <HashLink to="/#our_services">our services</HashLink>
                    <NavLink to="/cases">cases</NavLink>
                    <NavLink to="/contact_us">contact us</NavLink>
                </ul>
                <NavLink to="/" onClick={scrollToTop}>
                    <img className={styles['mobile-logo']} src={appLogo} alt="yellowmgt-logo" />
                </NavLink>
                <small className={styles['app-footer__copyrights']}>YELLOWMGT &copy; 2023 All rights reserved</small>
            </Content>
        </footer>
    );
};
