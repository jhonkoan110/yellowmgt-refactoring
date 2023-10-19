import React from 'react';
import cn from 'classnames';

import styles from './loader.module.css';

export const Loader = () => {
    return (
        <div className={styles.loader}>
            <svg width="80" height="80" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle className={styles.spinner_qM83} cx="4" cy="12" r="3" fill="#282828" />
                <circle
                    className={cn(styles.spinner_qM83, styles.spinner_oXPr)}
                    cx="12"
                    cy="12"
                    r="3"
                    fill="#fde170"
                    stroke="#282828"
                />
                <circle className={cn(styles.spinner_qM83, styles.spinner_ZTLf)} cx="20" cy="12" r="3" fill="#282828" />
            </svg>
        </div>
    );
};
