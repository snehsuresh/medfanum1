import "./welcomepage.css"
import img from './3.jpg'
function Welcome() {
	return (
		<div className='Welcome'>
			<div className="WelcomeTitles">
				<h2 className="WelcomeTitleLg">To protect & preserve life</h2>
				<p className="WelcomeTitleSm">Our venture into serving people by making better medical care achievable</p >
			</div>

			<img src={img} alt="" className="WelcomeImg" />
		</div>
	)
}

export default Welcome
