const TextLink = (props) => {
    return (
        <div class="p-2 rounded-md bg-[rgb(20,20,20)] duration-300">
            <div class="p-2 rounded-md bg-black">
                <a class="text-[rgb(174,214,241)] font-mono text-sm md:text-base hover:text-[rgb(52,152,219)] duration-300" href={props.href}>
                    {props.text}
                </a>
            </div>
        </div>
    )
}

export default TextLink