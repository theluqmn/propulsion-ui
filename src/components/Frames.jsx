export const Frame = (props) => {
    return (
        <div class="p-2 rounded-md bg-[rgb(20,20,20)]">
            <div class="p-2 rounded-md bg-black">
                {props.children}
            </div>
        </div>
    )
}