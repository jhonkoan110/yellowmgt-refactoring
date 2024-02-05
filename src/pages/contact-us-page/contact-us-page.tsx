import React from 'react';

import { Breadcrumbs } from 'components/breadcrumbs';
import { Content } from 'components/content';
import { Mail } from 'components/mail';

import styles from './contact-us-page.module.css';

const ContactUsPage = () => {
    return (
        <Content>
            <Breadcrumbs />

            <h1 className={styles['contact-us-page__title']}>Contact us</h1>

            <div className={styles['contact-us-page__mail-container']}>
                <Mail />
            </div>
        </Content>
    );
};

export default ContactUsPage;
