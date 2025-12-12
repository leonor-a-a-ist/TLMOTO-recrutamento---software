import Image from 'next/image';

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
        <h1 className="text-4xl font-bold mb-6">Recrutamento Software</h1>

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
