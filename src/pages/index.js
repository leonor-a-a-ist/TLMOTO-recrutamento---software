import Image from "next/image";
import TextType from "@/components/TextType";
import DottedButton from "@/components/DottedButton";
import { Bungee } from "next/font/google";

const bungee = Bungee({
    subsets: ["latin"],
    weight: ["400"],
});

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row relative">

            {/* Imagem no canto superior direito */}
            <Image
                src="/logo.png"
                alt="Logo"
                width={80}
                height={80}
                className="absolute top-4 right-4 object-contain"
            />

            {/* Coluna esquerda: imagem */}
            <div className="homepage_image.container">
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
            <div className="homepage flex-1">

                <div className="flex flex-col items-center justify-center">
                    <TextType
                        text={["Recrutamento Software"]}
                        typingSpeed={75}
                        pauseDuration={5000}
                        showCursor={true}
                        cursorCharacter="|"
                        className={`${bungee.className} text-6xl text-white `}
                    />

                    <p className="bg-black">
                        Estás na Homepage. Vem conhecer as recrutas!
                    </p>
                </div>

                <DottedButton />

            </div>
        </div>
    );
}
