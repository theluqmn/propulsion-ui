const ButtonSolid = (props) => {
    const baseBgColor = props.light ? 'bg-[rgb(225,225,225)]' : 'bg-[rgb(30,30,30)]';
    const hoverBgColor = props.light ? 'hover:bg-[rgb(205,205,205)]' : 'hover:bg-[rgb(20,20,20)]';
    const textColor = props.light ? 'text-black' : 'text-white';
    const hoverTextColor = props.light ? 'hover:text-[rgb(0,0,0)]' : 'hover:text-[rgb(225,225,225)]';

    return (
        <button 
            class={`p-4 rounded-md w-full text-lg font-semibold ${baseBgColor} ${textColor} font-mono ${hoverBgColor} ${hoverTextColor} duration-300`} 
            onclick={props.onClick}
        >
            {props.text}
        </button>
    );
}

export default ButtonSolid