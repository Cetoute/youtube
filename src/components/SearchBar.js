import React from 'react';

export default class SearchBar extends React.Component {
	state = { term: 'helloo' };

	onInputChange = (event) => {
		this.setState({ term: event.target.value });
	};

	onFormSummit = () => {
		event.preventDefault();
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<form onSubmit={this.onFormSummit} className="ui form">
					<div className="field">
						<label>Video Search</label>
						<input type="text" value={this.state.term} onChange={this.onInputChange} />
					</div>
				</form>
			</div>
		);
	}
}
