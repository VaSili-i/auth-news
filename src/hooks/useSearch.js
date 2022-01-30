import { useMemo } from 'react';

export const useSearch = function (news, search) {
    return useMemo(() => {
        if (search === '') {
            return news
        }
        return news.filter(elem => elem.title.toLowerCase().includes(search.toLowerCase()))
    }, [news, search])
}