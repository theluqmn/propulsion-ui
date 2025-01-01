import Frame from "./components/frames/Frame";
import FrameSolid from "./components/frames/FrameSolid";

import Button from "./components/buttons/Button";
import ButtonSolid from "./components/buttons/ButtonSolid";
import ButtonWithInlineText from "./components/buttons/ButtonWithInlineText";
import Text from "./components/texts/Text";
import TextSolid from "./components/texts/TextSolid";
import TextLink from "./components/texts/TextLink";
import TextWithHeading from "./components/texts/TextWithHeading";

export default function App() {
    return (
        <div>
            <header class="p-4 flex flex-row justify-between items-center bg-[rgb(225,225,225)]">
                <div class="flex flex-row gap-4 justify-center items-center">
                    <img src="../src/icon.png" alt="Propulsion UI" class="w-10 h-10" />
                    <h1 class="text-2xl font-semibold font-mono text-black">
                        Propulsion UI
                    </h1>
                </div>

                <Frame light="true">
                    <div class="flex flex-row gap-4 font-semibold">
                        <a href="https://github.com/theluqmn/propulsion-ui" class="text-black">
                            GitHub
                        </a>

                        <a href="https://discord.gg/propulsionui" class="text-black">
                            Discord
                        </a>
                    </div>
                </Frame>
            </header>

            <div class="p-4 flex flex-col gap-4">
                <div class="pt-16 pb-16 flex flex-col gap-4">
                    <FrameSolid>
                        <div class="flex flex-col gap-4">
                            <h1 class="text-4xl md:text-5xl font-semibold font-mono text-[rgb(52,152,219)]">
                                Sophistication and Technicality in One Package
                            </h1>

                            <p class="text-xl font-mono text-[rgb(225,225,225)]">
                                Propulsion UI is a SolidJS components library with designs
                                that are both sophisticated and technical - inspired by the cockpit of modern aircrafts.
                            </p>
                            
                            <div class="md:w-1/3">
                                <ButtonWithInlineText buttonText="Copy" text="npm install propulsion-ui" href="https://github.com/theluqmn/propulsion-ui" />
                            </div>
                        </div>
                    </FrameSolid>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <TextWithHeading heading="Light Mode" text="Simply use the light='true' prop to enable light mode on any component." />
                        <TextWithHeading heading="Effects" text="Propulsion UI components have built-in hover effects." />
                    </div>
                </div>

                <div class="md:w-2/3 flex flex-col gap-4">
                    <h1 class="text-3xl md:text-4xl font-semibold font-mono text-white">
                        Components
                    </h1>

                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 justify-between">
                        <FrameSolid>
                            <div class="flex flex-col gap-4">
                                <p class="text-lg font-mono text-[rgb(225,225,225)]">
                                    Button
                                </p>
                                <Button text="Launch Now" />
                            </div>

                        </FrameSolid>

                        <FrameSolid>
                            <div class="flex flex-col gap-4">
                                <p class="text-lg font-mono text-[rgb(225,225,225)]">
                                    Button (solid)
                                </p>
                                <ButtonSolid text="Click me!" />
                            </div>
                        </FrameSolid>

                        <FrameSolid>
                            <div class="flex flex-col gap-4">
                                <p class="text-lg font-mono text-[rgb(225,225,225)]">
                                    Button with inline text
                                </p>
                                <ButtonWithInlineText buttonText="Open" text="github repository" href="https://github.com/theluqmn/propulsion-ui" />
                            </div>
                        </FrameSolid>

                        <FrameSolid>
                            <div class="flex flex-col gap-4">
                                <p class="text-lg font-mono text-[rgb(225,225,225)]">
                                    Text
                                </p>
                                <Text text="Hello World!" />
                            </div>
                        </FrameSolid>

                        <FrameSolid>
                            <div class="flex flex-col gap-4">
                                <p class="text-lg font-mono text-[rgb(225,225,225)]">
                                    Text (solid)
                                </p>
                                <TextSolid text="SolidJS > React" />
                            </div>
                        </FrameSolid>

                        <FrameSolid>
                            <div class="flex flex-col gap-4">
                                <p class="text-lg font-mono text-[rgb(225,225,225)]">
                                    Text link
                                </p>
                                <TextLink text="Click me!" href="https://github.com/theluqmn/propulsion-ui" />
                            </div>
                        </FrameSolid>

                        <FrameSolid>
                            <div class="flex flex-col gap-4">
                                <p class="text-lg font-mono text-[rgb(225,225,225)]">
                                    Text with heading
                                </p>
                                <TextWithHeading text="No idea" heading="What's this?" />
                            </div>
                        </FrameSolid>
                    </div>
                </div>
            </div>
        </div>
    );
}