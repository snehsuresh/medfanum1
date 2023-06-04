// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import './products.css'; // Import the custom CSS file

// function Products() {
// 	const products = [
// 		{ title: 'PANCARD', text: 'Pantoprazole 40mg EC Tablet' },
// 		{ title: 'PANDCARD D', text: 'Pantoprazole 40mg EC + Domperidone 30mg SR Capsule' },
// 		{ title: 'DASEFLAM', text: 'Diclofenac Potasium 50mg + Serratiopeptidase 10mg' },
// 		{ title: 'NILA 5', text: 'LevoCetrizine 5mg' },
// 		{ title: 'NILA PLUS', text: 'LevoCetrizine 5mg + Ambroxol 60mg' },
// 		{ title: 'MONSOON', text: 'Montelukast 10mg + Levocetrizine 5mg Tablet' },
// 		{ title: 'PROVAS', text: 'Atorvastatin 10mg' },
// 	];

// 	return (
// 		<div className="page">
// 			<Row xs={1} md={2} className="g-4 products-container">
// 				{products.map((product, index) => (
// 					<Col key={index} className='col-a'>
// 						<Card className="mx-auto my-auto product-card" >
// 							<Card.Body>
// 								<div className="vl"></div>
// 								<Card.Title>{product.title}</Card.Title>
// 								<Card.Text>{product.text}</Card.Text>
// 							</Card.Body>
// 						</Card>
// 					</Col>
// 				))}
// 			</Row>
// 		</div>
// 	);
// }


// export default Products;

import React, { useState, useEffect } from 'react';
import Product from '../../product/product';
import './products.css';

const Products = () => {
	const [products, setProducts] = useState([]);

	const productsList = [
		{ name: 'PANCARD', desc: 'Pantoprazole 40mg EC Tablet', image: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=4679&t=l' },
		{ name: 'PANDCARD D', desc: 'Pantoprazole 40mg EC + Domperidone 30mg SR Capsule', image: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=3151&t=l' },
		{ name: 'DASEFLAM', desc: 'Diclofenac Potasium 50mg + Serratiopeptidase 10mg', image: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=189821&t=l' },
		{ name: 'NILA 5', desc: 'LevoCetrizine 5mg', image: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=1549000&t=l' },
		{ name: 'NILA PLUS', desc: 'LevoCetrizine 5mg + Ambroxol 60mg', image: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=2132&t=l' },
		{ name: 'MONSOON', desc: 'Montelukast 10mg + Levocetrizine 5mg Tablet', image: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=5281040&t=l' },
		{ name: 'PROVAS', desc: 'Atorvastatin 10mg', image: 'https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=60823&t=l' },
	];
	useEffect(() => {
		// Fetch product data from API or set it locally
		const fetchData = async () => {
			// Make an API call or set products array locally
			const response = await fetch('your-api-url');
			const data = await response.json();
			setProducts(data);
		};

		fetchData();
	}, []);

	return (
		<div className="products-page">
			{/* <h3 className='products-heading'>OUR LATEST PRODUCTS</h3> */}
			<div className="product-list">
				{productsList.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default Products;

