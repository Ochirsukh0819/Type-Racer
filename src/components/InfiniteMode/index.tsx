"use client";
import React, { useEffect, useState } from "react";
import { Textarea } from "../ui/textarea";
import Button from "../Button";
import Image from "next/image";
import TypingMan from "@/assets/Code typing-pana.svg";
import { getTextData } from "@/api";
import Link from "next/link";
import ChartJS from "../Chart";
import { StatisticType } from "@/type";

function InfiniteMode() {
  const [text, setText] = useState([]);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [value, setValue] = useState("");
  const [completedWords, setCompletedWords] = useState<any>([]);
  const [currentWordCorrectness, setCurrentWordCorrectness] = useState([]);
  const [wpm, setWpm] = useState(0);
  const [test, setTest] = useState<StatisticType[]>([]);
  const [isBoolean, setIsBoolean] = useState(false);
  const [componentMountTime, setComponentMountTime] = useState(Date.now());
  const [timerStarted, setTimerStarted] = useState(false);
  // fetch data
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await getTextData();
    const words = data.split(" ");
    setText(words);
    setCurrentWordIndex(0);

    setCurrentWordCorrectness([]);
  }

  // text bichih vyd
  const handleInputChange = (e: any) => {
    if (!timerStarted) {
      setTimerStarted(true);
    }
    const inputValue = e.target.value;
    setValue(inputValue);

    const currentWord: any = text[currentWordIndex];
    const correctness: any = Array(currentWord.length).fill(null);

    for (let i = 0; i < inputValue.length; i++) {
      if (inputValue[i] === currentWord[i]) {
        correctness[i] = "green";
      } else {
        correctness[i] = "red";
      }
    }

    setCurrentWordCorrectness(correctness);
    const isLastWord = currentWordIndex === text.length - 1;

    if (
      (inputValue === currentWord + " " && !isLastWord) ||
      (inputValue === currentWord && isLastWord)
    ) {
      setCompletedWords([...completedWords, currentWord]);
      setCurrentWordIndex(currentWordIndex + 1);
      setValue("");
      setCurrentWordCorrectness([]);
      calculateWPM();
    }

    if (inputValue === currentWord && isLastWord) {
      setTimerStarted(false);
      const storedHighScore = localStorage.getItem("InfiniteScore");

      if (storedHighScore !== null && wpm > parseInt(storedHighScore)) {
        localStorage.setItem("InfiniteScore", String(wpm));
      } else if (storedHighScore === null) {
        localStorage.setItem("InfiniteScore", String(wpm));
      }
      fetchData();
    }
  };

  const calculateWPM = () => {
    if (completedWords.length <= 0) return;

    const startTime = Date.now();
    const elapsedTimeInSeconds = (startTime - componentMountTime) / 60000;
    console.log("testTime: ", elapsedTimeInSeconds);

    const wordsTyped = completedWords.length;
    console.log("wordsTyped: ", wordsTyped);
    const wordsPerMinute = wordsTyped / elapsedTimeInSeconds;
    console.log("wordsPerMinute: ", wordsPerMinute);
    setWpm(Math.round(wordsPerMinute));

    setTest((prevTest: any) => [
      ...prevTest,
      {
        time: Math.round((startTime - componentMountTime) / 1000),
        words: wordsTyped,
      },
    ]);
  };

  return (
    <section className="w-full  flex flex-col">
      <section className="flex p-10 gap-6  bg-[#3a3845]">
        <section className="lg:w-[70%] w-[90%] md:mt-0 mt-6">
          <section className="flex flex-col gap-4">
            <div className="flex gap-2 justify-between text-white">
              <h2>Доорх текст бичнэ үү</h2>
            </div>
            <section className="bg-[#f6fbff] text-[#3A3845] py-2 px-4 rounded-md">
              <div className="text-sm font-semibold flex flex-wrap gap-[3px] ">
                {text.map((word: any, wordIndex) => (
                  <div
                    key={wordIndex}
                    style={{
                      color: wordIndex < currentWordIndex ? "green" : "black",
                    }}
                  >
                    {wordIndex === currentWordIndex
                      ? word.split("").map((char: any, charIndex: any) => (
                          <span
                            key={charIndex}
                            style={{
                              color:
                                currentWordCorrectness[charIndex] || "black",
                            }}
                          >
                            {char}
                          </span>
                        ))
                      : word}
                  </div>
                ))}
              </div>
            </section>
            <div className="mt-6">
              <Textarea
                placeholder="write..."
                value={value}
                onChange={handleInputChange}
                disabled={isBoolean === true}
              />
            </div>

            <div className="flex sm:flex-row flex-col justify-between sm:items-center">
              <p className="text-white">Таны хурд: {wpm} wpm</p>

              {isBoolean === false && (
                <div
                  onClick={() => {
                    setIsBoolean(true);
                  }}
                >
                  <Button buttonName="Уралдааныг дуусгах" buttonType="button" />
                </div>
              )}
              {isBoolean && (
                <div
                  onClick={() => {
                    setIsBoolean(false);
                    fetchData();
                    setWpm(0);
                  }}
                >
                  <Button
                    buttonName="Уралдааныг эхлүүлэх"
                    buttonType="button"
                  />
                </div>
              )}
            </div>
          </section>
        </section>
        <section className="w-[50%] lg:flex items-center hidden">
          <Image src={TypingMan} alt="typingman" className="" />
        </section>
      </section>
      <section className="flex flex-col gap-2 p-4">
        <h2 className="text-[#344258]">
          Таны хязгааргүй текстийн хувьд хамгийн өндөр оноо:{" "}
          {localStorage.getItem("InfiniteScore")
            ? localStorage.getItem("InfiniteScore")
            : 0}{" "}
          wpm
        </h2>
        <div className="md:w-[70%] w-[95%]">
          {" "}
          {isBoolean && <ChartJS chartData={test} />}
        </div>
      </section>
    </section>
  );
}

export default InfiniteMode;
