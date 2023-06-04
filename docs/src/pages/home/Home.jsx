import './home.css'
import Welcome from "../../welcomepage/WelcomePage"
import SecondComp from '../../secondcomp/SecondComp'
import Email from '../../email/Email'
import Footer from '../../footer/Footer'
function Home() {
	return (
		<div className='home'>
			<Welcome />
			<SecondComp />
			<Email />
			<Footer />
		</div>
	)
}

export default Home
