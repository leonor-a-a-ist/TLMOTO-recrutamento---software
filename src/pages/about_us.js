export default function AboutUs() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center gap-20">
      {/* Título */}
      <h1 className="text-4xl font-bold mb-40">About Us</h1>

      {/* Container das imagens */}
      <div className="flex w-full max-w-6xl justify-center gap-12">
        {/* Esquerda */}
        <div className="flex flex-col items-center">
          <img
            src="/stickfigure.jpg"
            alt="Image 1"
            className="w-48 h-auto rounded-lg"
          />
          <span className="mt-2 text-lg">Maria Cordeiro</span>
        </div>

        {/* Direita */}
        <div className="flex flex-col items-center">
          <img
            src="/stickfigure.jpg"
            alt="Image 2"
            className="w-48 h-auto rounded-lg"
          />
          <span className="mt-2 text-lg">Leonor Azevedo</span>
        </div>
      </div>
    </div>
  );
}
