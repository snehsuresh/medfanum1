import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image'
import EmailImg from './email-img.jpg'
import './email.css'
function Email() {
	return (
		<div className="email-page">
			<div className="email-container">
				<Container>
					<Row className='email-row'>
						<Col md={5} className="left-column">
							<img className='email-img'
								src={EmailImg}
							/>
						</Col>
						<Col md={7} className='d-flex align-items-center email-col'>
							<Form>
								<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
									<Form.Label>Email address</Form.Label>
									<Form.Control type="email" placeholder="@gmail.com" />
								</Form.Group>
								<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
									<Form.Label>Message</Form.Label>
									<Form.Control as="textarea" rows={3} cols={70} />
								</Form.Group>
								<Button as="input" type="submit" value="Submit" />{' '}
							</Form>
						</Col>
					</Row>
				</Container>
			</div>

		</div>


	);
}

export default Email;