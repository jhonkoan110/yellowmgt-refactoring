import React, { useEffect, useState } from 'react';

import styles from './app-background.module.css';

interface Props {
    children: React.ReactNode;
}

export const AppBackground = ({ children }: Props) => {
    const bodyStyles = getComputedStyle(document.body);
    console.log({ bodyStyles });

    return (
        <div className={styles.root}>
            <div />
            <div className={styles['app-background']}>{children}</div>
            <div />
        </div>
    );
};
