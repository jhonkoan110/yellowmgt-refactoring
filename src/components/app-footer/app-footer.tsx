import React from 'react';
import { NavLink } from 'react-router-dom';

import { Content } from 'components/content';
import appLogo from 'assets/desktop-logo.svg';
import { HashLink } from 'react-router-hash-link';

import styles from './app-footer.module.css';

export const AppFooter = () => {
    return (
        <footer className={styles['app-footer']}>
            <Content className={styles['app-footer__content-container']}>
                <ul className={styles['app-footer__nav-list']}>
                    <HashLink to="/#about">about us</HashLink>
                    <HashLink to="/#our_services">our services</HashLink>
                    <NavLink to="/cases">cases</NavLink>
                </ul>
                <img className={styles['mobile-logo']} src={appLogo} alt="yellowmgt-logo" />
                <small className={styles['app-footer__copyrights']}>YELLOWMGT &copy; 2023 All rights reserved</small>
            </Content>
        </footer>
    );
};
