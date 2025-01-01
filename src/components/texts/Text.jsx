const Text = (props) => {
    const size = props.size || "text-base";
    const color = props.color || "text-white";
    const weight = props.weight || "text-normal";
    const align = props.align || "text-left";
    const text = props.text || "Default Text"

    return (
        <div className="p-2 rounded-md bg-[rgb(20,20,20)]">
            <div className="p-2 rounded-md bg-black">
                <p className={`${color} ${weight} ${align} font-mono ${size} hover:brightness-90 duration-300`}>
                    {text}
                </p>
            </div>
        </div>
    );
}

export default Text;