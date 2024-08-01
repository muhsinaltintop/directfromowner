import Link from "next/link";
import Logo from "../_atoms/Logo";
import Menu from "../_atoms/Menu";
import { getMenu } from "../_utils/GlobalApi";

const Header = async () => {
  const menuItems = await getMenu();
  
  return (
    <header className="bg-fifth py-2">
      <div className="text-primary mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-primary text-lg " href="/">
              <span className="sr-only">Home</span>
              <Logo />
            </Link>
          </div>

          <Menu menuItems={menuItems} />
        </div>

        
      </div>
    </header>
  );
};

export default Header;
