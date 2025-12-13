export default function Maria() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col justify-center items-center">
      
      {/* BLOCO DO TÍTULO */}
      <div className="pt-24 pb-12">
        <h1 className="text-4xl font-bold">
          Maria Cordeiro
        </h1>
      </div>

      {/* BLOCO DO CARD */}
      <div className="bg-neutral-800 rounded-2xl shadow-lg p-10 mb-24 ">
        <div className="flex items-center gap-16">
          
          {/* Imagem */}
          <div className="flex-shrink-0">
            <img
              src="/stickfigure.jpg"
              alt="Maria"
              className="w-64 h-auto rounded-xl bg-white p-6"
            />
          </div>

          {/* Texto */}
          <div className="max-w-xl text-gray-300 leading-relaxed">
            From they fine john he give of rich he. They age and draw mis like.
            Improving end distrusts may instantly was household applauded
            incommode. Why kept very ever home mrs. Considered sympathize ten
            uncommonly occasional assistance sufficient not.
          </div>

        </div>
      </div>

    </div>
  );
}
