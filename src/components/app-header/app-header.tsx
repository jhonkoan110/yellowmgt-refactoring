import React, { useState } from 'react';
import cn from 'classnames';

import desktopLogo from 'assets/desktop-logo.svg';
import burgerIcon from 'assets/burger-icon.svg';
import { navLinks } from 'constants/nav-links';
import { Content } from 'components/content';

import styles from './app-header.module.css';
import { Button } from 'components/button';

export const AppHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles['app-header']}>
            <Content>
                <div className={styles['header-inner']}>
                    <img className={styles['mobile-logo']} src={desktopLogo} alt="yellowmgt-logo" />
                    <nav>
                        <ul className={styles['nav-list']}>
                            {navLinks.map((link) => (
                                <li key={link.name}>{link.name}</li>
                            ))}
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
    );
};
