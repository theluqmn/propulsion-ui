const Frame = (props) => {
    const baseColor = props.light ? 'bg-[rgb(225,225,225)]' : 'bg-[rgb(0,0,0)]';
    const outlineColor = props.light ? 'bg-[rgb(205,205,205)]' : 'bg-[rgb(20,20,20)]';

    return (
        <div class={`p-2 rounded-md ${outlineColor}`}>
            <div class={`p-2 rounded-md ${baseColor}`}>
                {props.children}
            </div>
        </div>
    )
}

export default Frame