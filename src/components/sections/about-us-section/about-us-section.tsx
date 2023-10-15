import React from 'react';

import { SectionTitle } from 'components/section-title';
import strategyIconSrc from 'assets/strategy-icon.svg';

import styles from './about-us-section.module.css';
import { Content } from 'components/content';

export const AboutUsSection = () => {
    return (
        <section>
            <SectionTitle title="about us" anchorId="about" />

            <Content>
                <div className={styles['content-container']}>
                    <div className={styles['content-container__text-block']}>
                        <p>We are a communication agency specializing in influencer marketing, digital and event.</p>
                        <br />
                        <p>
                            Our agency understands the importance of a comprehensive approach to marketing, which is why
                            we offer a range of services beyond influencer marketing and digital marketing. Our team is
                            skilled in branding, content creation, and public relations, ensuring every aspect of our
                            clients' marketing strategy is cohesive and effective. We take pride in staying ahead of the
                            curve in the ever-evolving world of marketing, continuously learning and adapting to new
                            trends and technologies to provide our clients with the most innovative and impactful
                            campaigns possible.
                        </p>
                    </div>

                    <img src={strategyIconSrc} alt="strategy-text" />
                </div>
            </Content>
        </section>
    );
};
