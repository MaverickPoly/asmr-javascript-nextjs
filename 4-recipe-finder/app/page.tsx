"use client";

import SearchForm from "@/components/SearchForm";
import {useState} from "react";
import {Recipe} from "@/models/Recipe";
import RecipeCard from "@/components/RecipeCard";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  return (
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        <SearchForm recipes={recipes} setRecipes={setRecipes} />
        <div className="flex flex-wrap space-x-5 space-y-5 mt-10 w-full justify-center">
            {recipes.map((recipe: Recipe, index: number) => (
                <RecipeCard recipe={recipe} index={index} key={index}/>
            ))}
        </div>
      </div>
  );
}
