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

const Home = () => {
    const [series, setSeries] = useState<Array<Series>>([]);
    const [page, setPage] = useState<number>(0);

    useEffect(() =>
        {
            SeriesApi.getNewestSeries(page)?.then((response) => {
                setSeries(response)
            });
        },
        [page]
    );

    const seriesCards = series.map((ser: Series) => {
        return (
            <CarouselItem>
                <Card>
                    <CardHeader>
                        <CardTitle>{ser.title}</CardTitle>
                        <CardDescription>Author: {ser.penName}</CardDescription>
                        <CardDescription>Cadence: every {ser.cadence} day(s)</CardDescription>
                        <CardDescription>Tags: {ser.tags}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p><b>Description:</b></p>
                        <p className={"pl-4"}>{ser.summary} </p>
                    </CardContent>
                </Card>
            </CarouselItem>
        )
    });

    return (
        <div className={"fixed top-20 left-0 w-screen flex justify-center"}>
            <Carousel orientation="horizontal" className={"w-4/5 md:w-1/3"}>
                <CarouselContent>
                    {seriesCards}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
export default Home;