import React, { memo, useEffect } from 'react';
import cn from 'classnames';

import crossIconSrc from 'assets/cross-icon.svg';

import styles from './mobile-menu.module.css';
import { MobileMenuProps } from './mobile-menu.types';
import appLogoSrc from 'assets/desktop-logo.svg';
import { Button } from 'components/button';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { Content } from 'components/content';

export const MobileMenu = memo(({ visible, onClose }: MobileMenuProps) => {
    useEffect(() => {
        const html = document.querySelector('html');

        if (html) {
            if (visible) {
                html.style.overflow = 'hidden';
            } else {
                html.style.overflow = 'visible';
            }
        }
    }, [visible]);

    return (
        <div className={cn(styles['mobile-menu'], { [styles['mobile-menu__opened']]: visible })}>
            <header className={styles['mobile-menu__header']}>
                <img className={styles['mobile-menu__logo']} src={appLogoSrc} alt="yellowmgt logo" />

                <Button className={styles['mobile-menu__btn']} onClick={onClose}>
                    <img src={crossIconSrc} alt="cross icon" />
                </Button>
            </header>

            <main>
                <nav>
                    <ul className={styles['mobile-menu__nav-list']}>
                        <HashLink to="/#about" onClick={onClose}>
                            <li className={styles['mobile-menu__nav-list__item']}>about us</li>
                        </HashLink>
                        <NavLink to="/cases" onClick={onClose}>
                            <li className={styles['mobile-menu__nav-list__item']}>cases</li>
                        </NavLink>
                        <NavLink to="/contact_us" onClick={onClose}>
                            <li className={styles['mobile-menu__nav-list__item']}>contact us</li>
                        </NavLink>
                    </ul>
                </nav>
            </main>

            <Content className={styles['mobile-menu__mail-content']}>
                <div className={styles['mobile-menu__mail']}>info@yellowmgt.com</div>
            </Content>
        </div>
    );
});
