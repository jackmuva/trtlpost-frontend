import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/SeriesCard/card.tsx";
import {useEffect, useState} from "react";
import {Series} from "@/types/Series.ts";
import SeriesApi from "@/api/SeriesApi.ts";

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
        )
    });

    return (
        <div className={"fixed top-20 left-0 w-screen h-4/5 flex-col px-2 pt-4 overflow-y-auto"}>
            {seriesCards}
        </div>
    )
}
export default Home;