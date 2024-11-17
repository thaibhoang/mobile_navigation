import BottomNavItem from "./BottomNavItem/page";
import NavItem from "./NavItem/page";
import Profile from "./Profile/page";
import { navItems, additionalNavItems } from "./navItems";
import { bottomNavItems } from "./bottomNav";

export default function Home() {
  return (
    <div className="container mx-auto px-2">
      <Profile />
      <hr></hr>
      <div className="p-4">
        {navItems.map((item) => (
          <NavItem icon={item.icon} key={item.text} text={item.text} />
        ))}
      </div>
      <hr />
      <div className="p-4">
        {additionalNavItems.map((item) => (
          <NavItem icon={item.icon} key={item.text} text={item.text} />
        ))}
      </div>
      <div className="fixed bottom-0 left-[50%] translate-x-[-50%] w-full sm:max-w-[400px]">
        <div className="p-4 flex justify-around ">
          {bottomNavItems.map((item, index) => (
            <BottomNavItem icon={item.icon} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
