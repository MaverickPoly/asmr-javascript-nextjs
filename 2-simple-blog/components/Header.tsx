export default function Header() {

    return <nav className="fixed top-3 left-1/2 z-50 bg-blue-100 shadow-md rounded-xl -translate-x-1/2 px-8 py-2">
        <ul className="flex space-x-5 text-neutral-700 font-medium">
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li><a href="#" className="hover:text-blue-500">About</a></li>
            <li><a href="#" className="hover:text-blue-500">Services</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact</a></li>
        </ul>
    </nav>
}
