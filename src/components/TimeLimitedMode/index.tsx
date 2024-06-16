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

function TimeLimitedMode() {
  const [text, setText] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [value, setValue] = useState("");
  const [completedWords, setCompletedWords] = useState<any[]>([]);
  const [currentWordCorrectness, setCurrentWordCorrectness] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [test, setTest] = useState<StatisticType[]>([]);
  const [isBoolean, setIsBoolean] = useState(false);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const data = await getTextData();
      const words = data.split(" ");
      setText(words);
    }
    fetchData();

    if (typeof window !== "undefined") {
      const storedHighScore = localStorage.getItem("highScore");
      if (storedHighScore) {
        setHighScore(parseInt(storedHighScore, 10));
      }
    }
  }, []);

  useEffect(() => {
    let timer: any;
    if (timerStarted) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            calculateWPM();
            setIsTimeUp(true);
            setIsBoolean(true);
            if (typeof window !== "undefined") {
              localStorage.setItem("highScore", String(wpm));
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timerStarted, wpm]);

  const handleInputChange = (e: any) => {
    if (isTimeUp) return;
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
      setIsBoolean(true);
      if (typeof window !== "undefined") {
        const storedHighScore = localStorage.getItem("highScore");
        if (storedHighScore !== null && wpm > parseInt(storedHighScore)) {
          localStorage.setItem("highScore", String(wpm));
          setHighScore(wpm);
        } else if (storedHighScore === null) {
          localStorage.setItem("highScore", String(wpm));
          setHighScore(wpm);
        }
      }
    }
  };

  const calculateWPM = () => {
    if (timeLeft === null || completedWords.length <= 0) return;
    const totalTimeInMinutes = (60 - timeLeft) / 60;
    const wordsTyped = completedWords.length;
    const wordsPerMinute = wordsTyped / totalTimeInMinutes;
    setWpm(Math.round(wordsPerMinute));

    setTest((prevTest) => [
      ...prevTest,
      { time: 60 - timeLeft, words: wordsTyped },
    ]);
  };

  return (
    <section className="w-full flex flex-col">
      <section className="flex md:p-10 p-4 gap-6 bg-[#3a3845] justify-center">
        <section className="lg:w-[70%] w-[90%] md:mt-0 mt-6">
          <section className="flex flex-col gap-4">
            <div className="flex gap-2 justify-between text-white">
              <h2>Доорх текст бичнэ үү</h2>
              <p>Хугацаа: {timeLeft}s</p>
            </div>
            <section className="bg-[#f6fbff] text-[#3A3845] py-2 px-4 rounded-md">
              <div className="text-sm font-semibold flex flex-wrap gap-[3px]">
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
                disabled={isTimeUp || currentWordIndex >= text.length}
              />
            </div>

            <div className="flex sm:flex-row flex-col justify-between sm:items-center">
              <p className="text-white">Таны хурд: {wpm} wpm</p>

              <Link href="/">
                <Button buttonName="Уралдааныг орхих" buttonType="button" />
              </Link>
            </div>
          </section>
        </section>
        <section className="w-[50%] lg:flex items-center hidden">
          <Image src={TypingMan} alt="typingman" />
        </section>
      </section>
      <section className="flex flex-col gap-2 p-4">
        <h2>Таны хамгийн өндөр оноо: {highScore} wpm</h2>
        <div className="md:w-[70%] w-[95%]">
          {isBoolean && <ChartJS chartData={test} />}
        </div>
      </section>
    </section>
  );
}

export default TimeLimitedMode;
