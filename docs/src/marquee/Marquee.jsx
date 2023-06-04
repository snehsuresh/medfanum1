import React, { useEffect, useRef } from 'react';

const Marquee = ({ children }) => {
	const marqueeRef = useRef(null);

	useEffect(() => {
		const containerWidth = marqueeRef.current.offsetWidth;
		const contentWidth = marqueeRef.current.scrollWidth;

		if (contentWidth > containerWidth) {
			const animationDuration = contentWidth / 50; // Adjust the scroll speed as desired
			marqueeRef.current.style.animationDuration = `${animationDuration}s`;
		}
	}, []);

	return (
		<div className="marquee" ref={marqueeRef}>
			{children}
		</div>
	);
};

export default Marquee;
