export default function TodoTile({todo, onToggle}) {

    return (
        <div className={`w-full ${todo[1] ? 'bg-emerald-300' : "bg-red-300"} rounded p-2`}>
            <input type="checkbox" value={todo[1]} onClick={onToggle} className="mr-4 p-10"/>
            <span className="text-xl">{todo[0]}</span>
        </div>
    )
}