import React, { useEffect, useState } from 'react';
import { useSearch } from '../hooks/useSearch';
import '../style/NewsStyle.sass';
import { useDispatch, useSelector } from 'react-redux';
import { NewsCreators } from '../store/news/action-creatores';

const News = function () {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(NewsCreators.fetchNews());
    }, [])

    const [search, setSearch] = useState('');
    const news = useSelector(state => state.news.news);
    const searchedNews = useSearch(news, search);
    return (
        <div className="list-news">
            <input onChange={(e) => { setSearch(e.target.value) }}
                value={search} placeholder='поиск' type='text' />
            {searchedNews.map(({ title, body, date }, index) =>
                <div key={index} className='list-news__one-news'>
                    <h4>{title}</h4>
                    <span>{date}</span>
                    <p>{body}</p>
                </div>
            )}

        </div>
    )
}

export default News