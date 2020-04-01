import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

const Index = (props) => (
	<Layout>
		<div>
			<h1>Welcome to Tico's Crypto Store!</h1>
			{props.time.updated}
		</div>
	</Layout>
);

Index.getInitialProps = async function() {
	// The result uses the 'fetch()' method to hit the coindesk API endpoint
	const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

	// Since 'fetch()' returns a promise, we need to map it to json, so we will
	// use another 'await'
	const data = await res.json();

	return {
		// 'bpi' = Bitcoin Price Index
		bpi: data.bpi
	}
};

export default Index;
