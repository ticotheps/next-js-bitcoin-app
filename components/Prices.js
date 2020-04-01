class Prices extends React.Component {
	state = {
		currency: 'USD'
	};

	render() {
		let list = '';

		if (this.state.currency === 'USD') {
			list = (
				<li className='list-group-item'>
					Bitcoin Rate for {this.props.bpi.USD.description}:{' '}
					<span className='badge badge-primary'>
						{this.props.bpi.USD.code}
					</span>
					<strong> {this.props.bpi.USD.rate}</strong>
				</li>
			);
		} else if (this.state.currency === 'GBP') {
		} else if (this.state.currency === 'EUR') {
		}

		return (
			<div>
				<ul className='list-group'>{list}</ul>
			</div>
		);
	}
}

export default Prices;
