import React from 'react';
import cn from 'classnames';

type ArrowIconProps = {
    mirror?: boolean;
};

import styles from './arrow-icon.module.css';

export const ArrowIcon = ({ mirror }: ArrowIconProps) => {
    return (
        <svg
            className={cn({ [styles['vertical-mirror']]: mirror })}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none">
            <path
                fill="#000"
                fillRule="evenodd"
                d="M18.333 17.155V0H20v20H0v-1.667h17.155L.245 1.423 1.422.242l16.91 16.912Z"
                clipRule="evenodd"
            />
        </svg>
    );
};
