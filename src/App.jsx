import { Frame, FrameSolid, FrameWithHeading } from "./components/Frames";
import { Text, TextWithHeading, TextLink } from "./components/Texts";
import { Button, ButtonWithInlineText } from "./components/Buttons";

export default function App() {
    return (
        <div>
            <header class="p-4 flex flex-row justify-between items-center bg-[rgb(225,225,225)]">
                <h1 class="text-2xl font-semibold font-mono text-black">
                    Propulsion UI
                </h1>

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
                <div class="pt-16 pb-16">
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
                </div>

                <div class="md:w-2/3 flex flex-col gap-4">
                    <h1 class="text-3xl md:text-4xl font-semibold font-mono text-white">
                        Components
                    </h1>

                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <FrameSolid>
                            <div class="flex flex-col gap-4">
                                <Button text="Launch Now" />

                                <p class="text-lg font-mono text-[rgb(225,225,225)]">
                                    Button
                                </p>
                            </div>

                        </FrameSolid>

                        <FrameSolid>
                            <div class="flex flex-col gap-4">
                                <ButtonWithInlineText buttonText="Open" text="github repository" href="https://github.com/theluqmn/propulsion-ui" />
                                <p class="text-lg font-mono text-[rgb(225,225,225)]">
                                    Button with inline text
                                </p>
                            </div>
                        </FrameSolid>

                        <FrameSolid>
                            <div class="flex flex-col gap-4">
                                <Text text="Hello World!" />
                                <p class="text-lg font-mono text-[rgb(225,225,225)]">
                                    Text
                                </p>
                            </div>
                        </FrameSolid>

                        <FrameSolid>
                            <div class="flex flex-col gap-4">
                                <TextLink text="Click me!" href="https://github.com/theluqmn/propulsion-ui" />
                                <p class="text-lg font-mono text-[rgb(225,225,225)]">
                                    Text link
                                </p>
                            </div>
                        </FrameSolid>

                        <FrameSolid>
                            <div class="flex flex-col gap-4">
                                <TextWithHeading text="No idea" heading="What's this?" />
                                <p class="text-lg font-mono text-[rgb(225,225,225)]">
                                    Text with heading
                                </p>
                            </div>
                        </FrameSolid>
                    </div>
                </div>
            </div>
        </div>
    );
}