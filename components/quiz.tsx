'use client'

import React, { useState } from 'react'
import { CheckIcon, CrossCircledIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
}

interface QuizProps {
  questions: QuizQuestion[]
}

const AnswerButton: React.FC<{
  option: string
  index: number
  isSelected: boolean
  isCorrect: boolean | null
  onClick: () => void
  disabled: boolean
}> = ({ option, index, isSelected, isCorrect, onClick, disabled }) => (
  <Button
    variant={isSelected ? (isCorrect ? 'success' : 'destructive') : 'outline'}
    className='w-full justify-start'
    onClick={onClick}
    disabled={disabled}
    aria-label={`Option ${index + 1}: ${option}`}
  >
    {option}
    {isSelected &&
      (isCorrect ? (
        <CheckIcon className='ml-2 h-4 w-4' />
      ) : (
        <CrossCircledIcon className='ml-2 h-4 w-4' />
      ))}
  </Button>
)

export default function Quiz({ questions }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  )
  const [isQuizCompleted, setIsQuizCompleted] = useState(false)

  const currentQuestionData = questions[currentQuestion]
  const selectedAnswer = userAnswers[currentQuestion]
  const showResult = selectedAnswer !== null
  const isLastQuestion = currentQuestion === questions.length - 1

  const handleAnswer = (index: number) => {
    if (showResult) return
    setUserAnswers(prev => {
      const newAnswers = [...prev]
      newAnswers[currentQuestion] = index
      return newAnswers
    })
  }

  const nextQuestion = () => {
    if (isLastQuestion) {
      setIsQuizCompleted(true)
    } else {
      setCurrentQuestion(prev => prev + 1)
    }
  }

  if (isQuizCompleted) {
    const score = userAnswers.reduce(
      (total, answer, index) =>
        answer === questions[index].correctAnswer ? total + 1 : total,
      0
    )

    return (
      <Card>
        <CardHeader>
          <CardTitle>Quiz Completed!</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Your score: {score} out of {questions.length}
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quiz</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='mb-4'>{currentQuestionData.question}</p>
        <div className='space-y-2'>
          {currentQuestionData.options.map((option, index) => (
            <AnswerButton
              key={index}
              option={option}
              index={index}
              isSelected={selectedAnswer === index}
              isCorrect={
                showResult ? index === currentQuestionData.correctAnswer : null
              }
              onClick={() => handleAnswer(index)}
              disabled={showResult}
            />
          ))}
        </div>
        {showResult && (
          <div className='mt-4'>
            <p>
              {selectedAnswer === currentQuestionData.correctAnswer
                ? 'Correct!'
                : 'Incorrect. Try again!'}
            </p>
            <Button onClick={nextQuestion} className='mt-2'>
              {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
