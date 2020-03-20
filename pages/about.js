import Link from 'next/link';

const About = () => (
	<div>
		<ul>
			<li>
				<Link href='/'>Home</Link>
			</li>
			<li>
				<Link href='/about'>About</Link>
			</li>
		</ul>
		<h1>About Tico's Bitcoin Prices App</h1>
		<p>An application used to view Bitcoin prices!</p>
	</div>
);

export default About;
