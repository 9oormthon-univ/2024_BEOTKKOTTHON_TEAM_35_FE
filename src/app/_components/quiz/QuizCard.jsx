import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import DisabledButton from "../common/DisabledButton";
import Button from "../common/Button";
import CorrectAnswerButton from "./CorrectAnswerButton";
import WrongAnswerButton from "./WrongAnswerButton";
import WrongAnswerButton2 from "./WrongAnswerButton2";

const QuizCard = ({ index, questions, next, open }) => {
  const [selectedValue, setSelectedValue] = useState(null); // 선택한 값
  const [answerStatus, setAnswerStatus] = useState(null); // correct , wrong1 , wrong2
  const [realAnswer, setRealAnswer] = useState(null); // 틀린답 입력 시 정답을 바로 알려주기 위해 있는 상태
  const [showNextButton, setShowNextButton] = useState(false);
  const [blockClick, setBlockClick] = useState(false);

  const handleClick = (value) => {
    setSelectedValue(value);
  };

  const checkAnswer = () => {
    if (selectedValue === questions[index].correctAnswer) {
      setAnswerStatus("correct");
      setBlockClick(true);
      setShowNextButton(true);
    }
    if (selectedValue === questions[index].wrongAnswer1) {
      setAnswerStatus("wrong1");
      setRealAnswer("correct");
      setBlockClick(true);
      setShowNextButton(true);
    }
    if (selectedValue === questions[index].wrongAnswer2) {
      setAnswerStatus("wrong2");
      setRealAnswer("correct");
      setBlockClick(true);
      setShowNextButton(true);
    }
  };

  const handleNextQuestion = () => {
    next(); // 다음 문제로 넘어가는 함수 호출
    setSelectedValue(null); // 선택된 값을 초기화
    setAnswerStatus(null); // 정답 상태를 초기화
    setRealAnswer(null); //
    setShowNextButton(false); // 다음 문제 버튼을 숨김
    setBlockClick(false); // 클릭을 다시 활성화
  };

  return (
    <div className="cursor-pointer w-full max-w-[500px] flex flex-col">
      <div className="bg-[#4E60FF] px-4">
        <div className="mb-[5px] text-[#FCFCFF] text-[22px] font-bold">Q.</div>
        <div className="mb-[28px] text-[18px] text-[#FCFCFF] font-bold">
          {questions[index].question}
        </div>
      </div>
      <div className="w-full max-w-[500px]">
        {/* <div className="z-0 absolute right-0 mt-[50px] mr-[10px]">
          <Image
            src={`/assets/images/main-character.svg`}
            width={150}
            height={176}
            alt="character"
          />
        </div> */}
        <div className="z-1 absolute bottom-0 w-full max-w-[500px] h-[430px] flex flex-col justify-between bottom-0 bg-[#FFF] rounded-t-2xl px-4">
          {answerStatus == "correct" ? (
            <div className="px-[6px] py-[3px] rounded-[8px] absolute mt-[35px] bg-[#ECF3FF] text-[#2528AE]">
              정답
            </div>
          ) : answerStatus == "wrong1" || answerStatus == "wrong2" ? (
            <div className="px-[6px] py-[3px] rounded-[8px] absolute mt-[35px] bg-[#FFF0F0] text-[#FF475D]">
              오답
            </div>
          ) : (
            ""
          )}
          <div className="w-full max-w-[500px] mt-[90px] grid gap-[8px]">
            <WrongAnswerButton
              value={selectedValue === questions[index].wrongAnswer1}
              onClick={() => handleClick(questions[index].wrongAnswer1)}
              text={questions[index].wrongAnswer1}
              real={true}
              status={answerStatus}
              blockClick={blockClick}
            />
            <CorrectAnswerButton
              value={selectedValue === questions[index].correctAnswer}
              onClick={() => handleClick(questions[index].correctAnswer)}
              text={questions[index].correctAnswer}
              real={true}
              status={answerStatus}
              realAnswer={realAnswer}
              blockClick={blockClick}
            />
            <WrongAnswerButton2
              value={selectedValue === questions[index].wrongAnswer2}
              onClick={() => handleClick(questions[index].wrongAnswer2)}
              text={questions[index].wrongAnswer2}
              real={true}
              status={answerStatus}
              blockClick={blockClick}
            />
          </div>
          <div className=" w-full max-w-[500px] mb-[50px]">
            {index == 9 ? (
              // <Button text="완료" onClick={open} />
              <a href="/quiz/stage/recommend">
                <Button text="완료" />
              </a>
            ) : showNextButton ? (
              <Button text="다음 문제" onClick={handleNextQuestion} />
            ) : selectedValue ? (
              <Button text="정답 확인" onClick={checkAnswer} />
            ) : (
              <DisabledButton text="정답 확인" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
