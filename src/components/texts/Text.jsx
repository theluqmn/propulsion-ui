export const Text = (props) => {
    return (
        <div class="p-2 rounded-md bg-[rgb(20,20,20)]">
            <div class="p-2 rounded-md bg-black">
                <p class="text-white font-mono text-sm md:text-base hover:text-[rgb(225,225,225)] duration-300">
                    {props.text}
                </p>
            </div>
        </div>
    )
}