"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useSession } from "./SessionProvider";

import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/UserAvatar";

import { Home, Mail, Heart, DraftingCompass } from "lucide-react";

interface MenuBarProps {
  className?: string;
}

const MenuBar = ({ className }: MenuBarProps) => {
  const { user } = useSession();
  const pathname = usePathname();

  const isCurrentUserRoute = pathname === `/users/${user.username}`;

  return (
    <div className={className}>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Home"
        asChild
      >
        <Link href="/">
          <Home />
          <span className="hidden lg:inline">Home</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Notifications"
        asChild
      >
        <Link href="/notifications">
          <Heart />
          <span className="hidden lg:inline">Notifications</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Messages"
        asChild
      >
        <Link href="/messages">
          <Mail />
          <span className="hidden lg:inline">Messages</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Astro Charts"
        asChild
      >
        <Link href="/astro-charts">
          <DraftingCompass />
          <span className="hidden lg:inline">Astro Charts</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="My Charts"
        asChild
      >
        <Link href={`/users/${user.username}`}>
          <div className="relative">
            <UserAvatar avatarUrl={user.avatarUrl} size={25} />
            {isCurrentUserRoute && (
              <div className="absolute inset-0 rounded-full border-2 border-foreground" />
            )}
          </div>
          <span className="ml-[-0.2px] hidden lg:inline">Profile</span>
        </Link>
      </Button>
    </div>
  );
};

export default MenuBar;
