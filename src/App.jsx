import { Frame, FrameWithHeading } from "./components/Frames";
import { Text, TextWithHeading, TextLink } from "./components/Texts";
import { Button, ButtonWithInlineText } from "./components/Buttons";

export default function App() {
    return (
        <div class="p-4 flex flex-col gap-4">
            <TextWithHeading heading="Testing" text="Hello World" />
            <Text text="This is an epic text" />
            <TextLink href="https://google.com" text="Google" />

            <Button text="Click Me" light="true" />
            <Button text="Click Me" />
            <ButtonWithInlineText buttonText="Select" text="Click Me" />

            <Frame>
                <div class="grid grid-cols-2 gap-4">
                    <Button text="Click Me" light="true" />
                    <Button text="Click Me" light="true" />
                </div>
            </Frame>

            <FrameWithHeading heading="This is a heading for a frame">
                <div class="grid grid-cols-2 gap-4">
                    <Button text="Click Me" light="true" />
                    <Button text="Click Me" light="true" />
                </div>
            </FrameWithHeading>
        </div>
    );
}