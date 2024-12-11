import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"
  import Link from "next/link"
  
  const Navbar = () => {
    return (
      <div className="flex justify-center sticky top-0 p-2 z-10 bg-white">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              {/* Directly applying Tailwind classes */}
              <NavigationMenuContent className="flex flex-col gap-4 p-4">
                <Link href="/">
                  <NavigationMenuLink>Cat1</NavigationMenuLink>
                </Link>
                <Link href="/hello">
                  <NavigationMenuLink>Cat2</NavigationMenuLink>
                </Link>
                <Link href="/">
                  <NavigationMenuLink>Cat3</NavigationMenuLink>
                </Link>
                <Link href="/">
                  <NavigationMenuLink>Cat4</NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    )
  }
  
  export default Navbar
  