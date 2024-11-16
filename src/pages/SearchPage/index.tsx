import {Series} from "@/types/Series.ts";
import {useEffect, useState} from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/SeriesCard/card.tsx";
import SeriesApi from "@/api/SeriesApi.ts";
import {useSearchParams} from "react-router-dom";

export const SearchPage = () => {
    const [series, setSeries] = useState<Array<Series>>([]);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        console.log(window.location.pathname);
        console.log(searchParams.get("q"));
        const fetchSeries = () => {
            SeriesApi.getSeriesByKeyword(searchParams.get("q") ?? "", 0)?.then((response) => {
                setSeries(response);
            });
        }
        fetchSeries();
    }, [searchParams.get("q")]);

    const seriesCards = series.map((ser) => {
        return (
            <Card className={"w-11/12 md:w-2/3"}>
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
        );
    })

    return (
        <>
            <div className={"absolute py-20 top-0 left-0 flex flex-col space-y-4 w-screen bg-neutral-50"}>
                <div className={"flex flex-col justify-center items-center space-y-1"}>
                    {seriesCards}
                </div>
            </div>
        </>
    );
};