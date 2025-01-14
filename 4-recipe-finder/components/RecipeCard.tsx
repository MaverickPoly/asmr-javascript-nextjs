import {Recipe} from "@/models/Recipe";

export default function RecipeCard({recipe, index}: {recipe: Recipe, index: number}) {

    return (
        <div className="bg-neutral-800 w-96 rounded-xl overflow-hidden">
            <img
                src={recipe.image}
                alt={recipe.title}
                className="mb-4 w-full h-64 object-cover"
            />
            <h3 className="p-3 text-xl">{recipe.title}</h3>
        </div>
    )
}