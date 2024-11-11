import {
    NavigationMenu,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/Header/NavigationMenu/navigation-menu.tsx";
import {Link} from "@radix-ui/react-navigation-menu";
import HeaderIcon from "@/components/ui/Header/HeaderIcon.tsx";
import {Input} from "@/components/ui/Input/input.tsx";
import {ScanSearch} from "lucide-react";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const Header = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }
    const search = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(input){
            navigate(`/search?q=${input}`);
        }
    }

    return (
        <div className={"fixed top-0 left-0 border-b-2 w-screen flex justify-center z-30 mb-2 bg-neutral-100"}>
            <div className={"w-screen md:w-7/12 flex justify-between"}>
                <HeaderIcon></HeaderIcon>
                <NavigationMenu>
                    <form className={"flex space-x-0.5 items-center mx-4"} onSubmit={search}>
                        <ScanSearch className={"text-neutral-500 focus:text-neutral-600"} />
                        <Input placeholder={"search..."} type={"search"}
                                onChange={handleChange}>
                        </Input>
                    </form>
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