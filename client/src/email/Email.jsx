import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image'
import EmailImg from './email-img.jpg'
import './email.css'
function Email() {

	// const [name, setName] = useState("");
	const [message, setMessage] = useState("")
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	// const [, setResume] = useState("");

	const sendData = async (e) => {
		e.preventDefault()

		const res = await fetch('/emailus', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			}, body: JSON.stringify({
				email, message
			})
		})
		console.log(res)
	}

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
								<Form.Group className="mb-3" >
									<Form.Label >Email</Form.Label>
									<Form.Control type="email"
										id="name"
										name="name"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required as="textarea" rows={1} cols={70} />
								</Form.Group>
								<Form.Group className="mb-3" >
									<Form.Label >Subject</Form.Label>
									<Form.Control type="email"
										id="name"
										name="name"
										value={subject}
										onChange={(e) => setSubject(e.target.value)}
										required as="textarea" rows={1} cols={70} />
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label>Message</Form.Label>
									<Form.Control type="text"
										id="name"
										name="name"
										value={message}
										onChange={(e) => setMessage(e.target.value)}
										required as="textarea" rows={3} cols={70} />
								</Form.Group>
								<Button disabled="true" as="input" type="submit" value="Submit" onClick={sendData} />{' '}
							</Form>
						</Col>
					</Row>
				</Container>
			</div>

		</div>


	);
}

export default Email;