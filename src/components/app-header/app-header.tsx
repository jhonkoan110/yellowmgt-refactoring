import React, { useCallback, useState } from 'react';
import cn from 'classnames';

import appLogo from 'assets/desktop-logo.svg';
import { Content } from 'components/content';
import { Button } from 'components/button';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

import { scrollToTop } from 'utils/scroll-to-top';
import { MobileMenu } from './mobile-menu';

import styles from './app-header.module.css';

export const AppHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen((prev) => !prev);
    }, []);

    return (
        <>
            <MobileMenu visible={isMenuOpen} onClose={toggleMenu} />
            <header className={cn(styles['app-header'], { [styles['app-header__opened']]: isMenuOpen })}>
                <Content>
                    <div className={styles['header-inner']}>
                        <NavLink to="/" onClick={scrollToTop}>
                            <img className={styles['mobile-logo']} src={appLogo} alt="yellowmgt-logo" />
                        </NavLink>
                        <nav>
                            <ul className={styles['nav-list']}>
                                <HashLink to="/#about">
                                    <li>about us</li>
                                </HashLink>
                                <NavLink to="/cases" onClick={scrollToTop}>
                                    <li>cases</li>
                                </NavLink>
                                <NavLink to="/contact_us" onClick={scrollToTop}>
                                    <li>contact us</li>
                                </NavLink>
                            </ul>
                        </nav>
                        <Button
                            className={cn(styles['menu-action-btn'], {
                                [styles['burger-icon']]: !isMenuOpen,
                                [styles['cross-icon']]: isMenuOpen,
                            })}
                            onClick={toggleMenu}
                        />
                    </div>
                </Content>
            </header>
        </>
    );
};
