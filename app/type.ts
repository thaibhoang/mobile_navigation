export type ProfileType = {
  avatar?: string;
  name: string;
  info: string;
};

export type NavItemType = {
  icon: string;
  text: string;
  href: string;
};

export type BottomNavItemType = {
  icon: string;
  label: string;
  href: string;
  isActive?: boolean;
};
