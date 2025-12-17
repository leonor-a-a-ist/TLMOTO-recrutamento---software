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

            {/* Imagem no canto superior direito */}
            <Image
                src="/logo.png" // substitui pelo caminho da tua imagem
                alt="Logo"
                width={80}
                height={80}
                className="absolute top-4 right-4 object-contain"
            />

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
            <div className="homepage bg-neutral-900 flex-1">
                <div className="flex flex-col items-center justify-center">
                    {/* escolher tipo de letra mais tarde :) */}
                    <TextType
                        text={["Recrutamento Software"]}
                        typingSpeed={75}
                        pauseDuration={5000}
                        showCursor={true}
                        cursorCharacter="|"
                        //className="text-7xl font-sans text-white"
                        className={`${bungee.className} text-6xl text-white `}
                        //style={{ fontFamily: "Science Gothic, sans-serif" }}
                        //style={{ fontFamily: "Stack Sans Notch, sans-serif" }}
                    />

                    <p className="special bg-neutral-900">
                        Estás na Homepage. Vem conhecer as recrutas!
                    </p>
                </div>

                <DottedButton />

            </div>
        </div>
    );
}
