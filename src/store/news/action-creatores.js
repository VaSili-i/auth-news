import axios from 'axios';
import { FETCH_NEWS } from ".";

export const NewsCreators = {
    setNews: (news) => ({ type: FETCH_NEWS, payload: news }),
    fetchNews: () => async (dispatch) => {
        let { data } = await axios.get('./server/news.json');
        dispatch(NewsCreators.setNews(data));
    }
}