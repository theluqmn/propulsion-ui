const ButtonWithInlineText = (props) => {
    return (
        <div class="flex flex-row gap-2 items-center">
            <div class="p-2 inline-block rounded-md bg-[rgb(20,20,20)]">
                <button class="p-2 rounded-md w-full text-white font-mono bg-[rgb(30,30,30)] hover:bg-[rgb(20,20,20)] hover:text-[rgb(225,225,225)] duration-300" onclick={props.onClick}>
                    {props.buttonText}
                </button>
            </div>

            <div class="p-2 rounded-md w-full bg-[rgb(20,20,20)] duration-300">
                <div class="p-2 rounded-md bg-black">
                    <p class="text-white font-mono hover:text-[rgb(225,225,225)] duration-300">
                        {props.text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ButtonWithInlineText