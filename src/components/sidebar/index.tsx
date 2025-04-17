import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger} from "../ui/sheet";
import { Button } from "../ui/button";
import { Home, MenuIcon, User,  } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

export function Sidebar(){

    return(
        <div className="flex w-full flex-col bg-muted/40">

            <div className="sm:hidden flex flex-col">
                <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:statc sm:h-auto sm:border-0 sm:bg-transparente">
                    <Sheet>
                        <div className="ml-auto">
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden right-500 jus ">
                                <MenuIcon className="w-5 h-5 items-end"/>
                                <span className="sr-only">Abrir/Fechar menu</span>
                            </Button>
                        </SheetTrigger>
                        </div>
                        <SheetContent side="right" className="bg-zinc-900 border-0 text-white">
                            <nav className="grid gap-6 text-lg font-medium pt-4">
                            
                                <Link href="#"
                                        className="flex items-center gap-4 px-2.5 text-yellow-300"
                                >
                                    <Home className="h-5 w-5 transition-all" />
                                    Início
                                    <span className="sr-only">Ícone de home</span>
                                </Link>
                                <Link href="#"
                                        className="flex items-center gap-4 px-2.5  text-yellow-300"
                                >
                                    <User className="h-5 w-5 transition-all" />
                                    Meu Perfil
                                    <span className="sr-only">Ícone de perfil</span>
                                </Link>

                                <Link href="https://www.instagram.com/medfamelt3/" target="_Blank"
                                        className="flex items-center gap-4 px-2.5  text-yellow-300"
                                >
                                    <SiInstagram className="h-5 w-5 transition-all" />
                                    Instagram
                                    <span className="sr-only">Ícone do instagram</span>
                                </Link>

                                <Link href="https://wa.me/5561999525238" target="_Blank"
                                        className="flex items-center gap-4 px-2.5  text-yellow-300"
                                >
                                    <SiWhatsapp className="h-5 w-5 transition-all" />
                                    Whatsapp
                                    <span className="sr-only">Ícone de Whatsapp</span>
                                </Link>

                            </nav>
                        </SheetContent>
                    </Sheet>
                    
                </header>
            </div>
        </div> 
    )
    
}