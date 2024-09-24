import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Counter.css';

export default function CounterItem  ({ targetCount, savingsText, imgSrc, imgDelay, unit, caseStudy,prefix })  {
    const [count, setCount] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            count: targetCount, 
            transition: {
                duration: 2.5,
                ease: "easeInOut"
            }
        });
    }, [controls, targetCount]);

    const imageVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
                delay: imgDelay 
            }
        }
    };

    return (
        <div className="counter-package col-md-3 col-6">
            <div className="counter-package-col">
                <motion.h3
                    className='counter-percentage'
                    animate={controls}
                    initial={{ count: 0 }}
                    whileInView="visible"
                    viewport={{ once: true }}
                    onUpdate={(latest) => setCount(Math.round(latest.count))}
                >
                    {prefix} {count}{unit}
                </motion.h3>
                <p className='counter-savings'>{savingsText}</p>
                <motion.img
                    variants={imageVariants}
                    initial='hidden'
                    animate='visible'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className='counter-img'
                    src={imgSrc}
                    alt={savingsText}
                />
                <p className='counter-ref'>{caseStudy}</p>
            </div>
        </div>
    );
};