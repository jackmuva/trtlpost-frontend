import StandardApi from "./StandardApi.js";
import {Series} from "@/types/Series.ts";

class SeriesApi extends StandardApi{
    postSeries(series: Series){
        return this.post('/api/series/new', series)?.then((response: Response) => response.json());
    }

    putSeries(series: Series){
        return this.put('/api/series/update', series)?.then((response: Response) => response.json());
    }

    getSeriesById(id: number){
        return this.get(`/api/series/${id}`)?.then((response: Response) => response.json());
    }
    deleteSeries(seriesId: number){
        return this.delete(`/api/series/delete/${seriesId}`)?.then((response: Response) => response.json());
    }
    getNewestSeries(page: number){
        return this.get(`/api/series/getNewest?page=${page}`)?.then((response: Response) => response.json());
    }

    getSeriesByWriter(writer: string, page: number){
        return this.get(`/api/series/writer/${writer}?page=${page}`)?.then((response: Response) => response.json());
    }

    getPublishedSeriesByWriter(writer: string, page: number){
        return this.get(`/api/series/writer/published/${writer}?page=${page}`)?.then((response: Response) => response.json());
    }
    getSeriesByTag(tag: string){
        return this.get(`/api/series/tag/${tag}`)?.then((response: Response) => response.json());
    }
    getSeriesByKeyword(keyword: string, page: number){
        return this.get(`/api/series/search/${keyword}?page=${page}`)?.then((response: Response) => response.json());
    }
}
export default new SeriesApi();