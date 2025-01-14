import Link from "next/link";
import {Github, Youtube} from "lucide-react";

export default function Footer() {
    return (
        <footer className="flex flex-wrap justify-between border-t border-neutral-200 pt-5 mt-5 px-6 pb-4">
            <h4 className="text-neutral-700 text-lg font-medium">AltairTech KHZ Web</h4>
            <div className="flex space-x-4">
                <Link href="https://github.com/MaverickPoly" target="_blank"><Github size={30} /></Link>
                <Link href="https://www.youtube.com/@TechWithTim" target="_blank"><Youtube size={30}/></Link>
            </div>
        </footer>
    );
};