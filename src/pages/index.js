import Image from "next/image";
import TextType from "@/components/TextType";
import DottedButton from "@/components/DottedButton";
import "@fontsource/science-gothic";
import "@fontsource/stack-sans-notch";
import { Bungee } from "next/font/google";

const bungee = Bungee({
    subsets: ["latin"],
    weight: ["400"],
});

export default function Home() {
    return (
        <div className="flex min-h-screen">
            {/* Coluna esquerda: imagem */}
            <div className="relative">
                <Image
                    src="/homescreencut.jpg"
                    alt="home screen image"
                    width={600}
                    height={500}
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </div>

            {/* Coluna direita: fundo preto, ocupa o restante */}
            <div className="flex-1 bg-neutral-900 text-white flex flex-col justify-center items-center gap-15 p-8">
                <div className="flex flex-col items-center justify-center">
                    {/* escolher tipo de letra mais tarde :) */}
                    <TextType
                        text={["Recrutamento Software"]}
                        typingSpeed={75}
                        pauseDuration={5000}
                        showCursor={true}
                        cursorCharacter="|"
                        //className="text-7xl font-sans text-white"
                        className={`${bungee.className} text-7xl text-white `}
                    //style={{ fontFamily: "Science Gothic, sans-serif" }}
                    //style={{ fontFamily: "Stack Sans Notch, sans-serif" }}
                    />

                    <p className="mt-6 text-center max-w-md">
                        This is the homepage. Use the navbar above to navigate to About Us.
                    </p>
                </div>
                

                <DottedButton />

            </div>
        </div>
    );
}
