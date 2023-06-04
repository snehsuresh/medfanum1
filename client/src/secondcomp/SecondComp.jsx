import React from 'react'
import './secondcomp.css'

function SecondComp() {
	return (
		<div className='second-comp'>
			<h1 className="centered-heading">What we offer</h1>
			<div className="info">We at Medfanum are dedicated to providing the highest quality medical care products, in pursuit of our goal to improve healthcare across our nation. Our team of experts collaborates closely to drive progress towards realizing this vision.</div>
			<div className="box-container">
				<div className="box">
					<h3 className='secondCompTitle'>Reliability</h3>
					<p>Healthcare professionals and patients trust us for our consistent delivery of safe and effective medicines, earning us a reputation for reliability.	</p>
					<img src='https://images.unsplash.com/photo-1630426334879-1889eb7ed48f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80' alt="" className="Img" />
				</div>
				<div className="box">
					<h3 className='secondCompTitle'>Affordability</h3>
					<p>We strive to make high-quality medicines affordable and accessible, ensuring that cost is not a barrier to quality healthcare</p>
					<img src='https://images.unsplash.com/photo-1598688933220-6edce518e35a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80' alt="" className="Img" />
				</div>
				<div className="box">
					<h3 className='secondCompTitle'>Quality</h3>
					<p>Our commitment to excellence drives us to maintain the highest standards of quality in every aspect of our pharmaceutical formulations</p>
					<img src='https://images.unsplash.com/photo-1630959305606-3123a081dada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' alt="" className="Img" />
				</div>
				<div className="box">
					<h3 className='secondCompTitle'>Availability</h3>
					<p>We ensure our medicines are readily available to meet the healthcare needs of patients across the globe</p>
					<img src='https://images.unsplash.com/photo-1573854612793-9a3e6ebc61fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80' alt="" className="Img" />
				</div>
			</div>
		</div>
	)
}

export default SecondComp
