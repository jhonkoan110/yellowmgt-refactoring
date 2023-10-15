import React from 'react';

import { Content } from 'components/content';

import styles from './mail-section.module.css';

export const MailSection = () => {
    return (
        <section className={styles['mail-section']}>
            <Content className={styles['mail-section__content-container']}>
                <h2 className={styles['mail-section__heading']}>we build projects</h2>
                <div className={styles['mail-section__mail']}>nikita@yellowmgt.com</div>
                <h2 className={styles['mail-section__heading']}>that users love</h2>
            </Content>
        </section>
    );
};
