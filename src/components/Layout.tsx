import Header from "@/components/ui/Header/Header.tsx";


type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return(
        <div>
            <Header></Header>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;