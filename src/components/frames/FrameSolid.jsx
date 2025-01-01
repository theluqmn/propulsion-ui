const FrameSolid = (props) => {
    const baseColor = props.light ? 'bg-[rgb(225,225,225)]' : 'bg-[rgb(10,10,10)]';

    return  (
        <div class={`p-4 rounded-md ${baseColor}`}>
            {props.children}
        </div>
    )
}

export default FrameSolid