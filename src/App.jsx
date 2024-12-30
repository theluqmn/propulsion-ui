import { TextWithHeading, Text } from "./components/Text";

export default function App() {
    return (
        <div class="p-4 flex flex-col gap-4">
            <TextWithHeading heading="Testing" text="Hello World" />
            <Text text="This is an epic text" />
        </div>
    );
}