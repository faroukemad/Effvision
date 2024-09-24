import React from 'react';
import './Counter.css'
import CounterItem from './CounterItem';
import Object from './Object';

export default function Counter() {
    const counters = [
        { targetCount: 50, savingsText: "Savings in Design Time Due to Integrated Version Control", imgSrc: "./assets/package-one.svg", imgDelay: 0, unit: "%", caseStudy: "AVIDBOTS CASE STUDY" },
        { targetCount: 30, savingsText: "Reclaimed Design Time Due to Reduced IT Overhead", imgSrc: "./assets/package-two.svg", imgDelay: 0.3, unit: "%", caseStudy: "LOOP MEDICAL CASE STUDY" },
        { targetCount: 400, savingsText: "Annual Engineering Hours Saved by Onshape Custom Features", imgSrc: "./assets/package-three.svg", imgDelay: 0.6, unit: "", caseStudy: "XING MOBILITY CASE STUDY" },
        { targetCount: 50000, savingsText: "Annual Savings From Onshape’s Built-in PDM", imgSrc: "./assets/package-four.svg", imgDelay: 0.9, unit: "+", caseStudy: "WITHINGS CASE STUDY", prefix: '$' }
    ];

    return (
        <>
            <div className='counter'>
                <div className="counter-wrapper">
                    <h3 className='counter-real'>Real World Results with Onshape</h3>
                    <div className="counter-packages row">
                        {counters.map((counter, index) => (
                            <CounterItem
                                key={index}
                                targetCount={counter.targetCount}
                                savingsText={counter.savingsText}
                                imgSrc={counter.imgSrc}
                                imgDelay={counter.imgDelay}
                                unit={counter.unit}
                                prefix={counter.prefix}
                                caseStudy={counter.caseStudy}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Object />
        </>
    )
}
