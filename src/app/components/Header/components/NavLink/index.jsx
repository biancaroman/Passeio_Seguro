import Link from "next/link";

export function NavLink({ content, path }) {
  return (
    <li className="text-white">
      <Link
        className="py-3 block font-normal text-center "
        href={`${path}`}
      >
        {`${content}`}
      </Link>
    </li>
  )
}