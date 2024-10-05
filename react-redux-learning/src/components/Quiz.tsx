// Quiz.tsx

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Interface for a single quiz question
interface QuizQuestion {
  question: string;
  answers: string[];
  correctAnswer: string;
}

// Interface for props when multiple questions are provided
interface QuizPropsMultiple {
  questions: QuizQuestion[];
}

// Interface for props when a single question is provided
interface QuizPropsSingle {
  question: string;
  answers: string[];
  correctAnswer: string;
}

// Union type for Quiz props
type QuizProps = QuizPropsMultiple | QuizPropsSingle;

const Quiz: React.FC<QuizProps> = (props) => {
  const { toast } = useToast();

  // Handle multiple questions
  if ("questions" in props && Array.isArray(props.questions)) {
    const questions = props.questions;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(
      Array(questions.length).fill(null)
    );

    const handleSelect = (questionIndex: number, answer: string) => {
      const newSelectedAnswers = [...selectedAnswers];
      newSelectedAnswers[questionIndex] = answer;
      setSelectedAnswers(newSelectedAnswers);
    };

    const handleSubmit = () => {
      let correctCount = 0;

      selectedAnswers.forEach((answer, index) => {
        if (answer === questions[index].correctAnswer) {
          correctCount += 1;
        } else {
          toast({
            title: `Question ${index + 1} Incorrect`,
            description: `The correct answer was "${questions[index].correctAnswer}".`,
            variant: "destructive",
          });
        }
      });

      toast({
        title: "Quiz Completed",
        description: `You answered ${correctCount} out of ${questions.length} questions correctly.`,
        variant: "success",
      });
    };

    const allAnswered = selectedAnswers.every((answer) => answer !== null);

    // Inside the Quiz component's return statement
    return (
      <div className="space-y-6">
        {questions.map((q, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>Question {index + 1}</CardTitle>
              <CardDescription>{q.question}</CardDescription>
            </CardHeader>
            <CardContent className="overflow-auto ">
              <div className="flex flex-col space-y-4 overflow-y-auto max-h-screen scroll-smooth">
                {q.answers.map((answer, idx) => (
                  <Button
                    key={idx}
                    onClick={() => handleSelect(index, answer)}
                    variant={
                      selectedAnswers[index] === answer ? "default" : "outline"
                    }
                    disabled={selectedAnswers[index] !== null}
                    className={`w-full h-full flex items-center justify-start text-left px-6 py-3 text-sm md:text-base rounded-lg shadow transition-colors duration-300 ease-in-out whitespace-normal break-words ${
                      selectedAnswers[index] === answer
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : "bg-white text-gray-800 hover:bg-gray-100"
                    } ${
                      selectedAnswers[index] !== null
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {answer}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
        <Button onClick={handleSubmit} disabled={!allAnswered}>
          Submit All Answers
        </Button>
      </div>
    );
  }
  // Handle single question
  else if (
    "question" in props &&
    "answers" in props &&
    "correctAnswer" in props
  ) {
    const { question, answers, correctAnswer } = props;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    const handleSubmit = () => {
      if (selectedAnswer === null) {
        toast({
          title: "No answer selected",
          description: "Please select an answer before submitting.",
          variant: "destructive",
        });
        return;
      }

      if (selectedAnswer === correctAnswer) {
        toast({
          title: "Correct!",
          description: "Great job, you got it right!",
          variant: "success",
        });
      } else {
        toast({
          title: "Incorrect",
          description: `The correct answer was "${correctAnswer}".`,
          variant: "destructive",
        });
      }
    };

    return (
      <Card>
        <CardHeader>
          <CardTitle>Quiz</CardTitle>
          <CardDescription>{question}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-2">
            {answers.map((answer, index) => (
              <Button
                key={index}
                onClick={() => setSelectedAnswer(answer)}
                variant={selectedAnswer === answer ? "default" : "outline"}
                disabled={selectedAnswer !== null}
                className={`w-full text-left p-2 text-sm sm:text-base sm:p-4 ${
                  selectedAnswer === answer
                    ? "bg-blue-500 text-white"
                    : "bg-transparent"
                }`}
              >
                {answer}
              </Button>
            ))}
            <Button
              onClick={handleSubmit}
              className="mt-4"
              disabled={selectedAnswer === null}
            >
              Submit Answer
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
  // Handle invalid props
  else {
    return (
      <div className="text-red-500">
        <p>Error: Invalid props provided to Quiz component.</p>
      </div>
    );
  }
};

export default Quiz;
