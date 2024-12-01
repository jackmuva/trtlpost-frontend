export const AboutPage = () => {
    return(
        <>
            <div className={"absolute py-32 top-0 left-0 flex flex-col space-y-4 w-screen " +
                "bg-gradient-to-br from-slate-50 to-fuchsia-50 via-blue-50 " +
                "flex flex-col justify-start items-center h-screen"}>
                <div className={"md:w-1/2 text-left px-2"}>
                    <div className={"font-bold text-2xl text-indigo-700"}>
                        Trtlpost: a platform for asynchronous email newsletters
                    </div>
                    <div className={"font-bold text-lg text-neutral-700 px-4"}>
                        Subscribe to email newsletters that are encapsulated in time.
                    </div>
                    <div className={"text-neutral-600 text-lg px-4"}>
                        Get the entire email series from beginning to end from the time you subscribe, no matter when
                        the writer posted it. Each email entry is sent according to the cadence the writer has set.
                    </div>
                    <div className={"font-bold text-2xl text-indigo-700 mt-2"}>
                        For Readers:
                    </div>
                    <div className={"text-lg text-neutral-600 px-4"}>
                        As a reader, no need to make an account. Subscribe to any email series to get started.
                    </div>
                    <div className={"font-bold text-2xl text-indigo-700"}>
                        For writers:
                    </div>
                    <div className={"text-lg text-neutral-600 px-4"}>
                        If you're interested in writing a series, create an account to get started.
                    </div>
                </div>
            </div>
        </>
    );
};