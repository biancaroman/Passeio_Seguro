'use client'

import { Bell, User } from "phosphor-react";
import { twMerge } from "tailwind-merge";

export function NavIcons({ isMobile }) {
  return (
    <div className={twMerge(`py-3 text-center`, isMobile ? `flex gap-2 sm:gap-6` :` lg:gap-6 hidden lg:flex `)}>
      <button>
        <Bell size={30} color="#ffff" weight="fill" />
      </button>
      <button>
        <User size={30} color="#ffff" weight="fill" />
      </button>
    </div>
  )
}