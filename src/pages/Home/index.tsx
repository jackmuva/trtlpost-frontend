import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/SeriesCard/card.tsx";
import {useEffect, useState} from "react";
import {Series} from "@/types/Series.ts";
import SeriesApi from "@/api/SeriesApi.ts";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/Carousel/carousel.tsx";
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
        <div>
            <Shelf name="~Newest~"  series={newest}></Shelf>
        </div>
    )
}
export default Home;