export const TextFramed = (props) => {
    return (
        <div class="p-2 rounded-md bg-[rgb(20,20,20)]">
            <div class="p-2 rounded-md bg-black">
                <p class="text-white font-mono">{props.text}</p>
            </div>
        </div>
    )
}