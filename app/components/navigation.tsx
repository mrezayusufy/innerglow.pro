"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"

const blogs: { title: string; href: string; description: string }[] = [
  {
    title: "Stories",
    href: "/blog/stories",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Poems",
    href: "/blog/poems",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Deep Qoutes",
    href: "/blog/deep-qoutes",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  }
]
const podcasts: { title: string; href: string; description: string }[] = [
  {
    title: "declamation",
    href: "/gallery/declamation",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "biography",
    href: "/gallery/biography",
    description:
      "For sighted users to preview content available behind a link.",
  }
]
// design, photography, art
const galleries: { title: string; href: string; description: string }[] = [
  {
    title: "Design",
    href: "/gallery/design",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "photography",
    href: "/gallery/photography",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "art",
    href: "/gallery/art",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  }
]

export default function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="flex-1">
          <Link href="/" >
            <Image src={"/logo.svg"} height={32} width={32} alt="innerGlow"/>
          </Link>
        </NavigationMenuItem>
        {/* home */}
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* service */}
        <NavigationMenuItem>
          <Link href="/services" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Services
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* explore  => blog, gallery, podcast*/}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image src={"/logo.svg"} alt="innerglow" width={64} height={64}/>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      InnerGlow
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      We Make You proud of yourself.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/blog" title="Blog">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/gallery" title="Gallery">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/podcast" title="Podcast">
                Biography, declamation
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link href="/about-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              about us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              contact us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/donations" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              donations
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href = ' ', ...props }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link 
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
