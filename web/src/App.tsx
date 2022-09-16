import { MagnifyingGlassPlus } from "phosphor-react";
import "./styles/main.css";
import logoImg from "/assets/logo.svg";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black nt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 txt-sm block mt-1">4 anúncios</span>
          </div>
          <img src="/assets/image1.svg" alt="" />
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dora 2</strong>
            <span className="text-zinc-300 txt-sm block mt-1">1 anúncios</span>
          </div>
          <img src="/assets/image2.svg" alt="" />
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Counter Strike
            </strong>
            <span className="text-zinc-300 txt-sm block mt-1">14 anúncios</span>
          </div>
          <img src="/assets/image3.svg" alt="" />
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Apex Legend</strong>
            <span className="text-zinc-300 txt-sm block mt-1">3 anúncios</span>
          </div>
          <img src="/assets/image5.svg" alt="" />
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Fortinite</strong>
            <span className="text-zinc-300 txt-sm block mt-1">23 anúncios</span>
          </div>
          <img src="/assets/image6.svg" alt="" />
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              World of Warcraft
            </strong>
            <span className="text-zinc-300 txt-sm block mt-1">88 anúncios</span>
          </div>
          <img src="/assets/image7.svg" alt="" />
        </a>
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-md mt-8 overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button className="py-3 px-4 hover:bg-violet-600 bg-violet-500 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
