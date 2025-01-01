const TextSolid = (props) => {
    const textSize = props.textSize || "text-base";
    const textColor = props.textColor || "text-white";
    const textWeight = props.textWeight || "text-normal";
    const textAlign = props.textAlign || "text-left";
    const text = props.text || "Default Text"

    return (
        <div class="p-4 rounded-md bg-black">
            <p class={`${textColor} font-mono ${textSize} ${textWeight} ${textAlign} hover:brightness-90 duration-300`}>
                {props.text}
            </p>
        </div>
    )
}

export default TextSolid