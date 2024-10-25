import StandardApi from "./StandardApi.js";
import {Entry} from "@/types/Entry.ts";

class EntryApi extends StandardApi{
    postNewEntry(entry: Entry){
        return this.post('/api/entry/new', entry)?.then((response: Response) => response.json());
    }

    updateEntry(entry: Entry){
        return this.put('/api/entry/update', entry)?.then((response: Response) => response.json());
    }
    deleteEntry(id: number){
        return this.delete(`/api/entry/delete/${id}`)?.then((response: Response) => response.json());
    }
    getEntriesBySeriesId(id: number, page: number){
        return this.get(`/api/entry/getBySeries/${id}?page=${page}`)?.then((response: Response) => response.json());
    }
    getFirstEntryBySeriesId(id: number){
        return this.get(`/api/entry/getFirstBySeries/${id}`)?.then((response: Response) => response.json());
    }
}
export default new EntryApi();