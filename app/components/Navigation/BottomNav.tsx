import { bottomNavItems } from "@/app/config/navigation";
import BottomNavItem from "./BottomNavItem";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-md mx-auto px-4 py-2">
        <div className="flex justify-around items-center">
          {bottomNavItems.map((item) => (
            <BottomNavItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              href={item.href}
              isActive={item.isActive}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
