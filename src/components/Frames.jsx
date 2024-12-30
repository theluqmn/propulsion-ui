export const Frame = (props) => {
    return (
        <div class="p-2 rounded-md bg-[rgb(20,20,20)]">
            <div class="p-2 rounded-md bg-black">
                {props.children}
            </div>
        </div>
    )
}

export const FrameWithHeading = (props) => {
    return (
        <div class="p-2 flex flex-col gap-2 rounded-md bg-[rgb(20,20,20)]">
            <h1 class="text-lg text-[rgb(225,225,225)] font-mono font-semibold">
                {props.heading}
            </h1>

            <div class="p-2 rounded-md bg-black">
                {props.children}
            </div>
        </div>
    )
}
        