export const FrameWithHeading = (props) => {
    const baseColor = props.light ? 'bg-[rgb(225,225,225)]' : 'bg-[rgb(0,0,0)]';
    const outlineColor = props.light ? 'bg-[rgb(205,205,205)]' : 'bg-[rgb(20,20,20)]';
    const headingColor = props.light ? 'text-[rgb(0,0,0)]' : 'text-[rgb(225,225,225)]';

    return (
        <div class={`p-2 flex flex-col gap-2 rounded-md ${outlineColor}`}>
            <h1 class={`text-lg ${headingColor} font-mono font-semibold`}>
                {props.heading}
            </h1>

            <div class={`p-2 rounded-md ${baseColor}`}>
                {props.children}
            </div>
        </div>
    )
}