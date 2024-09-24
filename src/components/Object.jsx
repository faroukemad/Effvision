import React, { useEffect, useRef, useState } from 'react';
import './object.css';

export default function Object() {
    const svgRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isScrollingLocked, setIsScrollingLocked] = useState(false);

    useEffect(() => {
        const handleScroll = (event) => {
            if (svgRef.current) {
                const svgRect = svgRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                const svgCenter = svgRect.top + svgRect.height / 2;
                const isCenterInView = svgCenter >= windowHeight / 2 - 50 && svgCenter <= windowHeight / 2 + 50;

                if (svgRect.top < windowHeight && svgRect.bottom > 0) {
                    let progress = (windowHeight - svgRect.top) / windowHeight;
                    progress = Math.max(0, Math.min(progress, 1));

                    if (isCenterInView) {
                        setIsScrollingLocked(true);
                    } else {
                        setIsScrollingLocked(false);
                    }

                    setScrollProgress(progress);
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: false });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrollingLocked]);

    const transformPart = (x, y) => `translate(${x * scrollProgress}px, ${y * scrollProgress}px)`;

    return (
        <div ref={svgRef} className="svg-container">
            <svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
                <g className="engine-block" style={{ transform: transformPart(100, -50), transition: 'transform 0.3s' }}>
                    <rect x="100" y="200" width="400" height="300" fill="#B0BEC5" />
                    <text x="180" y="380" fill="black">Engine Block</text>
                </g>
                <g className="piston" style={{ transform: transformPart(-100, 50), transition: 'transform 0.3s' }}>
                    <rect x="150" y="100" width="100" height="150" fill="#FF7043" />
                    <text x="155" y="170" fill="black">Piston</text>
                </g>
                <g className="gear" style={{ transform: transformPart(150, -75), transition: 'transform 0.3s' }}>
                    <circle cx="350" cy="300" r="50" stroke="black" strokeWidth="5" fill="none" />
                    <path d="M350 250 L370 300 L350 350 L330 300 Z" fill="#4CAF50" />
                    <text x="330" y="290" fill="black">Gear</text>
                </g>
                <g className="pipe" style={{ transform: transformPart(-150, 100), transition: 'transform 0.3s' }}>
                    <rect x="450" y="100" width="50" height="400" fill="#90A4AE" />
                    <text x="455" y="150" fill="black">Pipe</text>
                </g>
            </svg>
        </div>
    );
}
