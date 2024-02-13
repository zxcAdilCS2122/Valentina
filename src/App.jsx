import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Нет",
      "Уверена?",
      "Томишка я не шучу",
      "Подумай дважды!",
      "Последний шанс!",
      "Точно нет?",
      "Можешь пожалеть!",
      "Подумай еще раз!",
      "Ты абсолютно уверена?",
      "Это может быть ошибкой!",
      "Послушай сердце!",
      "Не будь такой бездушной!",
      "Не передумаешь?",
      "Может, пересмотришь свое решение?",
      "Это твой последний ответ?",
      "Ты ранишь мое сердце",
      "Это твой последний ответ?",
      "Ты ранишь мое сердце ",
      "Пожалуйста? Ты ранишь мое сердце",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="/sticker.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4">
          ❤️Люблю тебя❤️
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="/sticker2.gif"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
          Будешь ли ты кататься со мной на лифте 24/7?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Да
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "Нет" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
    >
    </a>
  );
};
