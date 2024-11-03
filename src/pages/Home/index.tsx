import {useEffect, useState} from "react";
import {Series} from "@/types/Series.ts";
import SeriesApi from "@/api/SeriesApi.ts";
import {Shelf} from "@/components/ui/Shelf/Shelf.tsx";

const Home = () => {
    const [newest, setNewest] = useState<Array<Series>>([]);
    const [page, setPage] = useState<number>(0);

    useEffect(() =>
        {
            SeriesApi.getNewestSeries(page)?.then((response) => {
                setNewest(response)
            });
        },
        [page]
    );



    return (
        <div className={"absolute py-24 top-0 left-0 bg-neutral-50"}>
            <Shelf name="~Newest~"  series={newest}></Shelf>
            <Shelf name="~Our Picks~"  series={newest}></Shelf>
            <Shelf name="~Popular Right Now~"  series={newest}></Shelf>
            <Shelf name="~Most Read All Time~"  series={newest}></Shelf>
            <Shelf name="~Random~"  series={newest}></Shelf>
        </div>
    )
}
export default Home;