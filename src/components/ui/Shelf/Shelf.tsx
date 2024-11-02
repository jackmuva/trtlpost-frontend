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
        <div className={"fixed top-20 left-0 w-screen flex-col space-y-4"}>
            <div className={"w-1/3 flex justify-center font-bold text-2xl text-blue-600"}>{name}</div>
            <div className={"flex justify-center"}>
                <Carousel orientation="horizontal" className={"w-4/5"}>
                    <CarouselContent>
                        {seriesCards}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
            </div>
        </div>
    )
};