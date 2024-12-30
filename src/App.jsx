import { TextWithHeading, Text } from "./components/Texts";
import { Button, ButtonWithInlineText } from "./components/Buttons";

export default function App() {
    return (
        <div>
            <div class="p-4 flex flex-col gap-4">
                <TextWithHeading heading="Testing" text="Hello World" />
                <Text text="This is an epic text" />

                <Button text="Click Me" />
                <ButtonWithInlineText buttonText="Select" text="Click Me" />
            </div>
        </div>
    );
}