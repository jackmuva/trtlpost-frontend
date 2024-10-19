import {
    NavigationMenu,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu.tsx";
import {Link} from "@radix-ui/react-navigation-menu";


const Header = () => {
    return (
        <div className={"fixed top-0 left-0 border-b-2 w-screen flex"}>
            <div className={"flex"}>
                <img src={"/trtlpost-logo.png"}
                     alt="Logo for Trtlpost, a platform for writing and subscribing to email series"
                     className={"h-12 m-2"}/>
                <div className={"content-center text-2xl font-bold"}>
                    Trtlpost
                </div>
            </div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href={"/"}>
                            <NavigationMenuLink>
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={"/login"}>
                            <NavigationMenuLink>
                                Login
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={"/about"}>
                            <NavigationMenuLink>
                                About
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
export default Header;