"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: String;
  onClick?: any;
  children: String | undefined;
}

export default function NavLink(props: Props) {
  const path = usePathname()?.split("/").pop();
  const isActive = props.href === path;

  return (
    <Link
      href={`${props.href}`}
      className={`${
        isActive && "decoration-green-light underline underline-offset-8"
      } text-gold-500 hover:text-green-light px-3 py-2 text-2xl font-medium`}
      onClick={props.onClick}
    >
      {props.children}
    </Link>
  );
}
