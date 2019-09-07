import axios from 'axios';

const KEY = 'AIzaSyDGgkUNNp2Pd2hNcYsJhUPhDcBKPz-YeLc';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
