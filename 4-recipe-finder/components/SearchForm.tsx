"use client";

import React, {useState} from "react";
import {Recipe} from "@/models/Recipe";
import axios from "axios";

export default function SearchForm(
    {recipes, setRecipes}:
        {recipes: Recipe[], setRecipes: React.Dispatch<React.SetStateAction<never[]>>}
) {
    const [input, setInput] = useState("");

    const handleSubmit = async () => {
        if (input == null) {
            alert("Please enter a recipe name!");
            return;
        }

        const response = await axios.get("/api/recipes", {
            params: {q: input},
        });
        setRecipes(response.data);
        setInput("");
    }

    return (
        <div className="w-[90%] flex mx-auto space-x-8 mt-5">
            <input
                className="flex-1 p-2 rounded-xl text-neutral-800 outline-none border-2 border-transparent focus:border-orange-600"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                className="rounded-full border border-neutral-500 px-5 bg-[#292929] bg-opacity-10 transition-colors hover:bg-opacity-50 hover:border-transparent"
                onClick={handleSubmit}
            >
                Search
            </button>
        </div>
    )
};
