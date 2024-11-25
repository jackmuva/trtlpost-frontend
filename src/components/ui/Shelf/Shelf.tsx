import {Series} from "@/types/Series.ts";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/Carousel/carousel.tsx";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/SeriesCard/card.tsx";

export const Shelf = ({name, series}: {name: string, series: Array<Series>}) => {

    const seriesCards = series.map((ser: Series) => {
        return (
            <CarouselItem className={"basis-full md:basis-1/3"}>
                <Card className={"h-full"}>
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

    return(
        <div className={"w-screen flex justify-center md:my-4"}>
            <div className={"border-2 rounded-xl w-11/12 p-2 md:w-5/6 md:p-4 md:pt-2 " +
                "bg-gradient-to-br from-slate-50 to-fuchsia-50 via-blue-50"}>
                <div className={"ml-4 md:ml-56 mb-2 flex justify-start font-bold text-2xl text-indigo-700"}>{name}</div>
                <div className={"flex justify-center"}>
                    <Carousel orientation="horizontal" className={"w-11/12 md:w-3/4"}>
                        <CarouselContent>
                            {seriesCards}
                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext/>
                    </Carousel>
                </div>
            </div>
        </div>
    )
};