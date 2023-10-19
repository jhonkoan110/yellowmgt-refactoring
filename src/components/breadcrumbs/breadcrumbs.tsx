import React, { Fragment } from 'react';
import cn from 'classnames';

import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import styles from './breadcrumbs.module.css';

const normalizeCrumbText = (text: string) => {
    return text.replaceAll('_', ' ');
};

export const Breadcrumbs = () => {
    const location = useLocation();

    const crumbs = location.pathname.split('/').filter((crumb) => crumb);

    const handleClick = (crumb: string) => {
        return (e: React.MouseEvent<HTMLAnchorElement>) => {
            const lastCrumb = crumbs[crumbs.length - 1];

            if (crumb === lastCrumb) {
                e.preventDefault();
            }
        };
    };

    return (
        <div className={styles.breadcrumbs}>
            <NavLink to="/">MAIN PAGE </NavLink>
            {crumbs.map((crumb, index) => (
                <Fragment key={crumb}>
                    <span className={cn({ [styles.active]: index === crumbs.length - 1 })}>/</span>
                    <NavLink
                        onClick={handleClick(crumb)}
                        to={`/${crumb}`}
                        className={cn({ [styles.active]: index === crumbs.length - 1 })}>
                        {normalizeCrumbText(crumb)}
                    </NavLink>
                </Fragment>
            ))}
        </div>
    );
};
