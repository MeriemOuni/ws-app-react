import React from "react";
import {
	Nav,
	Navbar,
	Container,
	Carousel,
	Card,
	Button,
	Form,
} from "react-bootstrap";
import "../App.css";

const Home = () => {
	return (
		<div>
			<Navbar bg='secondary' variant='dark'>
				<Container>
					<Navbar.Brand href='#home'>Navbar</Navbar.Brand>
					<Nav className='mx-auto'>
						<Nav.Link href='#home'>Home</Nav.Link>
						<Nav.Link href='#features'>Features</Nav.Link>
						<Nav.Link href='#pricing'>Pricing</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			{/* Caroussel */}
			<div className='carous'>
				<Carousel>
					<Carousel.Item>
						<img
							className='d-block w-100 nature'
							src='https://images.unsplash.com/photo-1679199685253-5041e82a4600?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
							alt='First slide'
						/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100 nature'
							src='https://images.unsplash.com/photo-1681930942446-e2d710728485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
							alt='Second slide'
						/>

						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100 nature'
							src='https://images.unsplash.com/photo-1681609092173-913a55a786c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
							alt='Third slide'
						/>

						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>

			{/* Intro */}
			<div className='parg-nature'>
				<h2>Nature</h2>
				<p>
					Le monde physique, l'univers, l'ensemble des choses et des êtres, la
					réalité : Les merveilles de la nature. 2. Ensemble de forces ou
					principe supérieur, considéré comme à l'origine des choses du monde,
					de son organisation : Rien ne se perd, rien ne se crée, c'est une loi
					de la nature.
				</p>
			</div>

			{/* Cards */}
			<div className='cards'>
				<Card style={{ width: "18rem" }}>
					<Card.Img
						variant='top'
						src='https://images.unsplash.com/photo-1680430632148-8cb421829110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
					/>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Button variant='primary'>Go somewhere</Button>
					</Card.Body>
				</Card>
				<Card style={{ width: "18rem" }}>
					<Card.Img
						variant='top'
						src='https://images.unsplash.com/photo-1679206636014-e94158711ce1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc2fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
					/>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Button variant='primary'>Go somewhere</Button>
					</Card.Body>
				</Card>
				<Card style={{ width: "18rem" }}>
					<Card.Img
						variant='top'
						src='https://images.unsplash.com/photo-1680984580142-37e1ad42ea83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMnw2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
					/>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</Card.Text>
						<Button variant='primary'>Go somewhere</Button>
					</Card.Body>
				</Card>
			</div>
			<div className='froms'>
				<Form>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control type='email' placeholder='Enter email' />
						<Form.Text className='text-muted'>
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control type='password' placeholder='Password' />
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicCheckbox'>
						<Form.Check type='checkbox' label='Check me out' />
					</Form.Group>
					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</Form>
			</div>

			<div className='footer-part'>
				<h2>MERN APP  Meriem OUNI © 2023 All rights reserved.</h2>
			</div>
		</div>
	);
};

export default Home;
