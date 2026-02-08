export function App() {
  return (
    <div className="mx-10 my-6">
      {/* header */}
      <div className="bg-blue-600 px-4 py-8 rounded-2xl space-y-10 w-full flex items-center flex-col">
        <h1 className="font-medium text-3xl text-white">STnews</h1>
        <p className="font-light text-xl text-white">
          Seu site de notícias sobre o mundo automotivo e virtual
        </p>
      </div>

      {/* cards com notícias */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="w-full rounded-2xl">
          {/* header do card */}
          <div className="bg-blue-400 rounded-t-2xl px-4">
            <p className="bg-amber-600 rounded-b-full size-8 flex justify-center items-center text-white ">
              1
            </p>
            <h1 className="flex justify-center-safe text-2xl text-white font-medium">
              titulo
            </h1>
          </div>
          {/* conteúdo do site */}
          <div className="border-b border-r border-l rounded-b-2xl">
            <div>area da imagem</div>
            <div>area do conteúdo</div>
            <div>area do video</div>
          </div>
        </div>

        <div className="w-full rounded-2xl">
          {/* header do card */}
          <div className="bg-blue-400 rounded-t-2xl px-4">
            <p className="bg-amber-600 rounded-b-full size-8 flex justify-center items-center text-white ">
              2
            </p>
            <h1 className="flex justify-center-safe text-2xl text-white font-medium">
              titulo
            </h1>
          </div>
          {/* conteúdo do site */}
          <div>area da imagem</div>
          <div>area do conteúdo</div>
          <div>area do podcast</div>
        </div>

        <div className="w-full rounded-2xl">
          {/* header do card */}
          <div className="bg-blue-400 rounded-t-2xl px-4">
            <p className="bg-amber-600 rounded-b-full size-8 flex justify-center items-center text-white ">
              3
            </p>
            <h1 className="flex justify-center-safe text-2xl text-white font-medium">
              titulo
            </h1>
          </div>
          {/* conteúdo do site */}
          <div>area da imagem</div>
          <div>area do conteúdo</div>
          <div>area do video</div>
        </div>
      </div>
      {/* footer */}
      <div className="bg-blue-600 p-4 rounded-2xl mt-4 flex flex-col items-center space-y-4">
        <div>
          <h1>Equipe STnews</h1>
          <p>Criadores</p>
        </div>
        <div className="space-x-4 flex justify-center">
          <div className="flex flex-col items-center">
            <h1 className="bg-blue-300 rounded-full size-15 flex items-center justify-center text-2xl">
              1
            </h1>
            <p>Nome</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="bg-blue-300 rounded-full size-15 flex items-center justify-center text-2xl">
              2
            </h1>
            <p>Nome</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="bg-blue-300 rounded-full size-15 flex items-center justify-center text-2xl">
              3
            </h1>
            <p>Nome</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="bg-blue-300 rounded-full size-15 flex items-center justify-center text-2xl">
              4
            </h1>
            <p>Nome</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="bg-blue-300 rounded-full size-15 flex items-center justify-center text-2xl">
              5
            </h1>
            <p>Nome</p>
          </div>
        </div>
        <div>
          <h1>Site desenvolvido para fornecimento de noticias</h1>
        </div>
      </div>
    </div>
  );
}
