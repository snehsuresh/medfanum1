import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
	return (
		<MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
			<section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
				<div className='me-5 d-none d-lg-block'>
					<span>Get connected with us on social networks:</span>
				</div>

				<div>
					<a href='' className='me-4 text-reset'>
						<MDBIcon fab icon="facebook-f" />
					</a>
					<a href='' className='me-4 text-reset'>
						<MDBIcon fab icon="twitter" />
					</a>
					<a href='' className='me-4 text-reset'>
						<MDBIcon fab icon="google" />
					</a>
					<a href='' className='me-4 text-reset'>
						<MDBIcon fab icon="instagram" />
					</a>
					<a href='' className='me-4 text-reset'>
						<MDBIcon fab icon="linkedin" />
					</a>
					<a href='' className='me-4 text-reset'>
						<MDBIcon fab icon="github" />
					</a>
				</div>
			</section>

			<section className=''>
				<MDBContainer className='text-center text-md-start mt-5'>
					<MDBRow className='mt-3'>
						<MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
							<h6 className='text-uppercase fw-bold mb-4'>
								<MDBIcon icon="gem" className="me-3" />
								Medfanum
							</h6>
							<p>
								Short desctiption about the company. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga molestias non aut magni eligendi eum, labore laborum amet unde officiis.
							</p>
						</MDBCol>

						<MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
							<h6 className='text-uppercase fw-bold mb-4'>Products</h6>
							<p>
								<a href='#!' className='text-reset'>
									Product 1
								</a>
							</p>
							<p>
								<a href='#!' className='text-reset'>
									Product 2
								</a>
							</p>
							<p>
								<a href='#!' className='text-reset'>
									Product 3
								</a>
							</p>
							<p>
								<a href='#!' className='text-reset'>
									Product 4
								</a>
							</p>
						</MDBCol>

						<MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
							<h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
							<p>
								<a href='#!' className='text-reset'>
									Pricing
								</a>
							</p>
							<p>
								<a href='#!' className='text-reset'>
									Settings
								</a>
							</p>
							<p>
								<a href='#!' className='text-reset'>
									Orders
								</a>
							</p>
							<p>
								<a href='#!' className='text-reset'>
									Help
								</a>
							</p>
						</MDBCol>

						<MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
							<h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
							<p>
								<MDBIcon icon="home" className="me-2" />
								Alappuzha, KL 688001, IN
							</p>
							<p>
								<MDBIcon icon="envelope" className="me-3" />
								info@medfanum.com
							</p>
							<p>
								<MDBIcon icon="phone" className="me-3" /> +91 8848897306
							</p>
							<p>
								<MDBIcon icon="phone" className="me-3" /> +91 9594142429
							</p>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</section>

			<div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
				© 2021 Copyright:
				<a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
					Medfanum Pvt. Ltd.
				</a>
			</div>
		</MDBFooter>
	);
}