import React from 'react';

import { Breadcrumbs } from 'components/breadcrumbs';
import { Content } from 'components/content';

import styles from './contact-us-page.module.css';

const ContactUsPage = () => {
    return (
        <Content>
            <Breadcrumbs />

            <h1 className={styles['contact-us-page__title']}>
                GET IN TOUCH <br /> WITH US
            </h1>

            <div className={styles['contact-us-page__mail-container']}>info@yellowmgt.com</div>

            <p className={styles.text}>
                We've always got an open ear for you. Whether you're looking for influencers for your next big
                advertising campaign or are an influencer yourself, you can leave your message here.
            </p>
        </Content>
    );
};

export default ContactUsPage;
