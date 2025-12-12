import Image from "next/image";
import TextType from "@/components/TextType";

import "@fontsource/science-gothic";
import "@fontsource/stack-sans-notch"; 

/* import { Science_Gothic, Stack_Sans_Notch } from "next/font/google";

const scienceGothic = Science_Gothic({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const stackSansNotch = Stack_Sans_Notch({
  subsets: ["latin"],
  weight: ["400", "700"],
}); */


export default function Home() {
    return (
        <div className="flex min-h-screen">
            {/* Coluna esquerda: imagem */}
            <div className="relative">
                <Image
                    src="/homescreencut.jpg"
                    alt="Home Screen"
                    width={600}
                    height={500}
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </div>

            {/* Coluna direita: fundo preto, ocupa o restante */}
            <div className="flex-1 bg-black text-white flex flex-col justify-center items-center p-8">

                <TextType
                    text={["Recrutamento Software"]}
                    typingSpeed={75}
                    pauseDuration={5000}
                    showCursor={true}
                    cursorCharacter="|"
                    className="text-7xl font-sans text-white"
                    //style={{ fontFamily: "Science Gothic, sans-serif" }}
                    style={{ fontFamily: "Stack Sans Notch, sans-serif" }}
                />

                <Image
                    src="/next.svg"
                    alt="Next.js logo"
                    width={100}
                    height={100}
                    priority
                />

                <p className="mt-6 text-center max-w-md">
                    This is the homepage. Use the navbar above to navigate to About Us.
                </p>
            </div>
        </div>
    );
}
