import React from 'react';

import styles from './cases-section-item2.module.css';
import { NavLink } from 'react-router-dom';
import { Image } from 'components/image';

interface CasesSectionItemProps {
    imageSrc: string;
    title: string;
    id: number | string;
}

export const CasesSectionItem2 = ({ imageSrc, title, id }: CasesSectionItemProps) => {
    return (
        <NavLink to={`/cases/${id}`} className={styles.navlink}>
            <li className={styles['cases-section-item']}>
                <div style={{ height: 70, marginTop: 65 }}>
                    <Image src={imageSrc} width={80} />
                </div>
                <p>{title}</p>
                <svg
                    className={styles['cases-section-item__arrow']}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.3333 17.1548L18.3333 -7.28523e-08L20 0L20 20L-8.74228e-07 20L-8.01375e-07 18.3333L17.1548 18.3333L0.244078 1.42259L1.42259 0.244077L18.3333 17.1548Z"
                        fill="#fffdf2"
                    />
                </svg>
            </li>
        </NavLink>
    );
};
