export const Button = (props) => {
    const baseBgColor = props.light ? 'bg-[rgb(225,225,225)]' : 'bg-[rgb(30,30,30)]';
    const outlineColor = props.light ? 'bg-[rgb(205,205,205)]' : 'bg-[rgb(20,20,20)]';
    const hoverBgColor = props.light ? 'hover:bg-[rgb(205,205,205)]' : 'hover:bg-[rgb(20,20,20)]';
    const textColor = props.light ? 'text-black' : 'text-white';
    const hoverTextColor = props.light ? 'hover:text-[rgb(0,0,0)]' : 'hover:text-[rgb(225,225,225)]';

    return (
        <div class={`p-2 inline-block rounded-md ${outlineColor}`}>
            <button 
                class={`p-2 rounded-md w-full text-lg font-semibold ${baseBgColor} ${textColor} font-mono ${hoverBgColor} ${hoverTextColor} duration-300`} 
                onclick={props.onClick}
            >
                {props.text}
            </button>
        </div>
    );
}

export const ButtonWithInlineText = (props) => {
    return (
        <div class="flex flex-row gap-2 items-center">
            <div class="p-2 inline-block rounded-md bg-[rgb(20,20,20)]">
                <button class="p-2 rounded-md w-full font-semibold text-white font-mono bg-[rgb(30,30,30)] hover:bg-[rgb(20,20,20)] hover:text-[rgb(225,225,225)] duration-300" onclick={props.onClick}>
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