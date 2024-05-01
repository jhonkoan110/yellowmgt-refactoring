import React from 'react';

import styles from './tasks-list.module.css';

interface TasksListProps {
    data: string[];
}

export const TasksList = ({ data }: TasksListProps) => {
    return (
        <>
            <h4 className={styles['tasks-list__title']}>TASKS:</h4>
            <ul className={styles['tasks-list']}>
                {data.map((task) => (
                    <li key={task} className={styles['tasks-list__item']}>
                        <span className={styles['tasks-list__item-dot']} />
                        <span>{task}</span>
                    </li>
                ))}
            </ul>
        </>
    );
};
