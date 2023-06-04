import "./welcomepage.css"
import img from './3.jpg'
// import Marquee from "../marquee/Marquee"
function Welcome() {
	return (
		<div className='Welcome'>
			{/* <Marquee>
				<h2 className="MarqueeText">Website is still under construction, so it may not have all the functionalities enabled. Contact +91-9847616004 for any queries.</h2>
			</Marquee> */}
			<div className="MarqueeContainer">
				<marquee className="MarqueeText">Website is still under construction, so it may not have all the functionalities enabled. Contact +91-9847616004 for any queries</marquee>
			</div>
			<div className="WelcomeTitles">
				<h2 className="WelcomeTitleLg">To protect & preserve life</h2>
				<p className="WelcomeTitleSm">Our venture into serving people by making better medical care achievable</p >
			</div>

			<img src={img} alt="" className="WelcomeImg" />
		</div>
	)
}

export default Welcome
