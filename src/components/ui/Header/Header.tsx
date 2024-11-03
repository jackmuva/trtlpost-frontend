import {
    NavigationMenu,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/Header/NavigationMenu/navigation-menu.tsx";
import {Link} from "@radix-ui/react-navigation-menu";
import HeaderIcon from "@/components/ui/Header/HeaderIcon.tsx";


const Header = () => {
    return (
        <div className={"fixed top-0 left-0 border-b-2 w-screen flex justify-center z-30 mb-2 bg-neutral-100"}>
            <div className={"w-screen md:w-7/12 flex justify-between"}>
                <HeaderIcon></HeaderIcon>
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
        </div>
    )
}
export default Header;