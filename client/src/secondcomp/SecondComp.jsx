import React from 'react'
import './secondcomp.css'
import availabilityImg from './availability.jpg'
import qualityImg from './quality.jpg'
import reliabilityImg from './reliablity.jpg'
import affordabilityImg from './affordability.jpg'

function SecondComp() {
	return (
		<div className='second-comp'>
			<h1 className="centered-heading">What we offer</h1>
			<div className="info">We at Medfanum are dedicated to providing the highest quality medical care products, in pursuit of our goal to improve healthcare across our nation. Our team of experts collaborates closely to drive progress towards realizing this vision.</div>
			<div className="box-container">
				<div className="box">
					<h3>Reliability</h3>
					<p>Our team of experienced professionals work tirelessly to ensure that our products are manufactured to the highest standards of quality and safety.</p>
					<img src={reliabilityImg} alt="" className="Img" />
				</div>
				<div className="box">
					<h3>Affordability</h3>
					<p>We believe that everyone deserves access to safe and effective medications, and we are committed to providing affordable healthcare solutions to our customers.</p>
					<img src={affordabilityImg} alt="" className="Img" />
				</div>
				<div className="box">
					<h3>Quality</h3>
					<p>We adhere to strict quality control standards at every stage of the process, ensuring that the products are always of the highest quality.</p>
					<img src={qualityImg} alt="" className="Img" />
				</div>
				<div className="box">
					<h3>Availability</h3>
					<p>We allows you to order our products from the comfort of your own home, with fast and reliable shipping options available.</p>
					<img src={availabilityImg} alt="" className="Img" />
				</div>
			</div>
		</div>
	)
}

export default SecondComp
