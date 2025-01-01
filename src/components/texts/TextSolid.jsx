const TextSolid = (props) => {
    return (
        <div class="p-4 rounded-md bg-black">
            <p class="text-white font-mono text-sm md:text-base hover:text-[rgb(225,225,225)] duration-300">
                {props.text}
            </p>
        </div>
    )
}

export default TextSolid