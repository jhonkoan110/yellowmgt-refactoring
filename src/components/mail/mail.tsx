import React, { useEffect, useState } from 'react';

import styles from './mail.module.css';
import { copyToClipboard } from 'utils/copy-to-clipboard';

let timerId: number;

export const Mail = () => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        // let timerId: number;

        if (copied) {
            timerId = setTimeout(() => {
                setCopied(false);

                clearTimeout(timerId);
            }, 5000);
        }

        return () => {
            clearTimeout(timerId);
        };
    }, [copied]);

    const handleMailClick = () => {
        setCopied(true);
        copyToClipboard('info@yellowmgt.com');
    };

    return (
        <>
            <div className={styles.mail} onClick={handleMailClick}>
                <span>info@yellowmgt.com</span>
                <svg
                    className={styles.mail__icon}
                    fill="#000000"
                    xmlns="http://www.w3.org/2000/svg"
                    // width="223px"
                    // height="223px"
                    viewBox="0 0 52 52"
                    enableBackground="new 0 0 52 52"
                    xmlSpace="preserve">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M36,20c0-2.2-1.8-4-4-4H6c-2.2,0-4,1.8-4,4v26c0,2.2,1.8,4,4,4h26c2.2,0,4-1.8,4-4V20z"></path>
                        <path d="M43,2H17c-3.9,0-7,3.1-7,7v3h6h20c2.2,0,4,1.8,4,4v20v6h3c3.9,0,7-3.1,7-7V9C50,5.1,46.9,2,43,2z"></path>
                    </g>
                </svg>
            </div>
            {copied && <p className={styles.clipboard__text}>Email address copied to clipboard</p>}
        </>
    );
};
