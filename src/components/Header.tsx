import React from "react";
import { createClient } from "@/prismicio";
import Link from "next/link";

export default async function Header () {
    const client = createClient();
    const settings = await client.getSingle("settings");
    return (
        <header className="top-0 z-50 mx-auto max-w-7x1 md:sticky md: top-4">
            <nav>
                <ul>
                    <li>
                        <Link href="/" aria-label="Home page">
                            {settings.data.name}
                        </Link>
                    </li>
                    <li></li>
                </ul>
            </nav>
        </header>
    );
}