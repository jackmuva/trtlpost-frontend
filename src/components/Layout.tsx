import Header from "@/components/ui/Header/Header.tsx";


type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return(
        <>
            <Header></Header>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout;