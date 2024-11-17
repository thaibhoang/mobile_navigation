import { ReactNode } from "react";
import BottomNav from "./Navigation/BottomNav";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="pb-20 min-h-screen">
      {/* Add padding bottom for bottom nav */}
      {children}
      <BottomNav />
    </div>
  );
}
