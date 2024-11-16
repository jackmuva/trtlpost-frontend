import {useEffect, useState} from "react";
import {Series} from "@/types/Series.ts";
import SeriesApi from "@/api/SeriesApi.ts";
import {Shelf} from "@/components/ui/Shelf/Shelf.tsx";

const Home = () => {
    const [newest, setNewest] = useState<Array<Series>>([]);
    const [picks, setPicks] = useState<Array<Series>>([]);
    const [popular, setPopular] = useState<Array<Series>>([]);
    const [mostRead, setMostRead] = useState<Array<Series>>([]);
    const [random, setRandom] = useState<Array<Series>>([]);

    useEffect(() => {
        const fetchAllSeries = () => {
            SeriesApi.getNewestSeries(0)?.then((response) => {
                setNewest(response);
            });
            SeriesApi.getPopularAllTime(0)?.then((response) => {
                setMostRead(response);
            });
            SeriesApi.getTopPicks(0)?.then((response) => {
                setPicks(response);
            })
            SeriesApi.getPopularCurrent(0)?.then((response) => {
                setPopular(response);
            })
            SeriesApi.getRandom(0)?.then((response) => {
                setRandom(response);
            });
        }
        fetchAllSeries();
    }, []);



    return (
        <div className={"absolute py-20 top-0 left-0 bg-neutral-50 flex flex-col space-y-4"}>
            <Shelf name="Newest"  series={newest}></Shelf>
            <Shelf name="Our Picks"  series={picks}></Shelf>
            <Shelf name="Popular Right Now"  series={popular}></Shelf>
            <Shelf name="Most Read All Time"  series={mostRead}></Shelf>
            <Shelf name="Random"  series={random}></Shelf>
        </div>
    )
}
export default Home;