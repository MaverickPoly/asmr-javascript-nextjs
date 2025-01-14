"use client";

import {useState} from "react";

export default function TodoForm({todos, setTodos}) {
    const [title, setTitle] = useState("");

    const handleAdd = () => {
        if (title === "") return;
        setTitle("");
        setTodos([...todos, [title, false]]);
    }

    return (
        <div className="w-full flex gap-6 mb-6">
            <input
                type="text"
                placeholder="Todo title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="flex-1 p-3 rounded-md text-neutral-600 border border-neutral-300 outline-none focus:border-emerald-700"
            />
            <button
                onClick={handleAdd}
                className="px-6 py-2 bg-emerald-500 text-white hover:bg-emerald-600 rounded"
            >
                Add
            </button>
        </div>
    )
}