export type Series = {
    seriesId: number,
    datetime: Date,
    numEntries: number,
    title: string,
    summary: string,
    tags: string,
    cadence: number,
    penName: string,
    email: string,
    published: boolean,
    numAllTimeReaders: number,
    numCurrentReaders: number,
    maxCurrentReaders: number
}