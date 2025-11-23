import { navItems } from "@/data";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import PolociesGrid from "@/components/PolociesGrid";

export default function Home() {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="w-full">
                <FloatingNav navItems={navItems} />
                <Hero/>
                <PolociesGrid />
            </div>
        </main>
    );
}
