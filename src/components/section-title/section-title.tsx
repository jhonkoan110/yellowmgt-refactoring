import React from 'react';

import { SectionTitleProps } from './section-title.types';
import { Divider } from 'components/divider';

import styles from './section-title.module.css';

export const SectionTitle = ({ title, anchorId }: SectionTitleProps) => {
    return (
        <div className={styles.root}>
            <a className={styles.anchor} id={anchorId} />
            <Divider />
            <div className={styles.container}>
                <Divider />
                <h2 className={styles.title}>{title}</h2>
                <Divider />
            </div>
            <Divider />
        </div>
    );
};
