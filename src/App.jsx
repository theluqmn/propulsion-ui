import { TextWithHeading, Text } from "./components/Texts";
import { Button } from "./components/Buttons";

export default function App() {
    return (
        <div>
            <div class="p-4 flex flex-col gap-4">
                <TextWithHeading heading="Testing" text="Hello World" />
                <Text text="This is an epic text" />

            </div>
            <Button text="Click Me" />
        </div>
    );
}