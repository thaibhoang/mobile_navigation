import Profile from "@/app/components/Profile/Profile";
import NavItem from "@/app/components/Navigation/NavItem";
import { navItems, additionalNavItems } from "@/app/config/navigation";
import { profile } from "@/app/config/profile";

export default function Home() {
  return (
    <main className="max-w-md mx-auto">
      <Profile profile={profile} />

      <div className="divide-y divide-gray-200">
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <NavItem
              key={item.text}
              icon={item.icon}
              text={item.text}
              href={item.href}
            />
          ))}
        </nav>

        <nav className="p-4 space-y-2">
          {additionalNavItems.map((item) => (
            <NavItem
              key={item.text}
              icon={item.icon}
              text={item.text}
              href={item.href}
            />
          ))}
        </nav>
      </div>
    </main>
  );
}
