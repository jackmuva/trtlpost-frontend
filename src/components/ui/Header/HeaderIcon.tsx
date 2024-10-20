const HeaderIcon = () => {
    return (
        <div className={"flex"}>
            <img src={"/trtlpost-logo.png"}
                 alt="Logo for Trtlpost, a platform for writing and subscribing to email series"
                 className={"h-12 m-2"}/>
            <a href={"/"}
               className={"content-center text-2xl font-bold text-indigo-700 font-serif" +
                   "hover:text-indigo-500 hover:-translate-y-0.5"}>
                Trtlpost
            </a>
        </div>
    );
}

export default HeaderIcon;