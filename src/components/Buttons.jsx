export const Button = (props) => {
    return (
        <div class="p-1 inline-block rounded-md bg-[rgb(20,20,20)]">
            <button class="p-2 rounded-md w-full text-white font-mono bg-[rgb(30,30,30)] hover:bg-[rgb(20,20,20)] hover:text-[rgb(225,225,225)] duration-300" onclick={props.onClick}>
                {props.text}
            </button>
        </div>
    )
} 