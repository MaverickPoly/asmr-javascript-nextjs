import {ReactNode} from "react";

export default function Layout({children}: {children: ReactNode}) {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-4">
                {children}
            </div>
        </div>
    )
}