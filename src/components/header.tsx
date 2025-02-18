import Link from "next/link";




export default function Header() {
    return (
        <header className="flex items-center justify-between w-full h-16 px-4 bg-primary text-foreground">
        <h1 className="text-2xl font-bold">My Blog</h1>
        <nav>
            <ul className="flex gap-4">
            <Link href={"Home"}></Link>
            <Link href={"About"}></Link>
            </ul>
        </nav>
        </header>
    );
}