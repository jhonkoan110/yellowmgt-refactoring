import React from 'react';

import { AnimatedRectProps } from './animated-rect.types';

import styles from './animated-rect.module.css';

export const AnimatedRect = ({ children }: AnimatedRectProps) => {
    return <div className={styles['animated-rect']}>{children}</div>;
};
