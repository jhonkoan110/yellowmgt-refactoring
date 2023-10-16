import React from 'react';

import styles from './app-background.module.css';

interface Props {
    children: React.ReactNode;
}

export const AppBackground = ({ children }: Props) => {
    return (
        <div className={styles.root}>
            <div />
            <div className={styles['app-background']}>{children}</div>
            <div />
        </div>
    );
};
