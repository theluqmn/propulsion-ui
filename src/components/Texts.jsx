export const Text = (props) => {
    return (
        <div class="p-2 rounded-md bg-[rgb(20,20,20)] duration-300">
            <div class="p-2 rounded-md bg-black">
                <p class="text-white font-mono">
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export const TextWithHeading = (props) => {
    return (
        <div class="p-2 flex flex-col gap-2 rounded-md bg-[rgb(20,20,20)] duration-300">
            <h1 class="text-lg text-[rgb(225,225,225)] font-mono font-semibold">
                {props.heading}
            </h1>

            <div class="p-2 rounded-md bg-black">
                <p class="text-white font-mono">
                    {props.text}
                </p>
            </div>
        </div>
    )
}