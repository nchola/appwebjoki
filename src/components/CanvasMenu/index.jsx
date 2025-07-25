'use client';
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button';
import styles from './style.module.scss';
import Nav from './Nav';
import clsx from 'clsx';

const menu = {
    open: {
        width: "88vw",
        height: "75vh",
        top: "-25px",
        right: "-25px",
        transition: { duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }
    },
    closed: {
        width: "100px",
        height: "40px",
        top: "0px",
        right: "0px",
        transition: { duration: 0.5, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
    }
}

export default function Index({ onContactClick }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.header}>
            <motion.div
                className={clsx(styles.menu)}
                variants={menu}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
                <AnimatePresence>
                    {isActive && <Nav onContactClick={onContactClick} />}
                </AnimatePresence>
            </motion.div>
            <Button isActive={isActive} toggleMenu={() => { setIsActive(!isActive) }} />
        </div>
    )
}
