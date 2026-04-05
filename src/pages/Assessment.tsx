import React, { useState, useMemo } from "react";
import { 
  ChevronRight, 
  Clock, 
  Trophy, 
  AlertCircle, 
  ArrowRight,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Page } from "../App";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { SESSIONS_DATA } from "../data/sessions";

interface AssessmentProps {
  onNavigate: (page: Page, sessionId?: string) => void;
  sessionId: string | null;
}

export function Assessment({ onNavigate, sessionId }: AssessmentProps) {
  const [step, setStep] = useState<"intro" | "quiz" | "result">("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const session = useMemo(() => {
    return SESSIONS_DATA.find(s => s.id === sessionId) || SESSIONS_DATA.find(s => s.questions.length > 0) || SESSIONS_DATA[0];
  }, [sessionId]);

  const QUESTIONS = session.questions;

  const handleStart = () => {
    if (QUESTIONS.length === 0) {
      toast.error("No questions available for this assessment");
      return;
    }
    setStep("quiz");
  };

  const handleNext = () => {
    if (selectedOption === null) {
      toast.error("Please select an answer to proceed");
      return;
    }

    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setStep("result");
    }
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((ans, i) => {
      if (ans === QUESTIONS[i].correct) correct++;
    });
    return (correct / QUESTIONS.length) * 100;
  };

  const score = calculateScore();
  const passed = score >= 70;

  return (
    <div className="container max-w-3xl mx-auto px-4 py-12 min-h-[600px] flex flex-col">
      <AnimatePresence mode="wait">
        {step === "intro" && (
          <motion.div 
            key="intro"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-[2rem] border border-slate-200 shadow-xl p-8 md:p-12 text-center space-y-8"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">{session.title} Assessment</h1>
              <p className="text-muted-foreground">
                This test will assess your understanding of the concepts covered in the session. You need 70% to pass.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-100">
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Questions</div>
                <div className="font-bold">{QUESTIONS.length} Items</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Time</div>
                <div className="font-bold">15 Mins</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Pass Mark</div>
                <div className="font-bold">70%</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="rounded-full px-8" onClick={() => onNavigate("session", sessionId || session.id)}>
                Review Session
              </Button>
              <Button 
                size="lg" 
                className="rounded-full px-8" 
                onClick={handleStart}
                disabled={QUESTIONS.length === 0}
              >
                {QUESTIONS.length > 0 ? "Start Assessment" : "No Test Available"} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        )}

        {step === "quiz" && (
          <motion.div 
            key="quiz"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-muted-foreground">
                Question <span className="text-foreground font-bold">{currentQuestion + 1}</span> of {QUESTIONS.length}
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <Clock className="w-4 h-4 text-primary" /> 14:52
              </div>
            </div>
            <Progress value={((currentQuestion + 1) / QUESTIONS.length) * 100} className="h-2" />
            
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-8 leading-tight">
                {QUESTIONS[currentQuestion].text}
              </h2>
              <div className="space-y-4">
                {QUESTIONS[currentQuestion].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedOption(idx)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between group ${
                      selectedOption === idx 
                        ? "border-primary bg-primary/5 ring-4 ring-primary/10" 
                        : "border-slate-100 hover:border-slate-300 bg-slate-50/50"
                    }`}
                  >
                    <span className="font-medium">{option}</span>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      selectedOption === idx ? "bg-primary border-primary" : "border-slate-300 group-hover:border-slate-400"
                    }`}>
                      {selectedOption === idx && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button 
                className="text-muted-foreground hover:text-foreground text-sm font-medium underline"
                onClick={() => onNavigate("session", sessionId || session.id)}
              >
                Cancel Quiz
              </button>
              <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold" onClick={handleNext}>
                {currentQuestion === QUESTIONS.length - 1 ? "Finish Test" : "Next Question"}
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        )}

        {step === "result" && (
          <motion.div 
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[2rem] border border-slate-200 shadow-xl p-8 md:p-12 text-center space-y-8"
          >
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto ${passed ? "bg-green-100" : "bg-red-100"}`}>
              {passed ? <Trophy className="w-12 h-12 text-green-600" /> : <AlertCircle className="w-12 h-12 text-red-600" />}
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold">{passed ? "Congratulations!" : "Keep Practicing!"}</h1>
              <div className="flex flex-col items-center">
                <span className="text-6xl font-black text-slate-900">{Math.round(score)}%</span>
                <span className="text-muted-foreground font-medium">Your Score</span>
              </div>
              <p className="text-muted-foreground max-w-sm mx-auto">
                {passed 
                  ? `You've successfully mastered the core concepts of ${session.title}. A digital certificate has been added to your profile.` 
                  : "You didn't quite reach the pass mark this time. We recommend reviewing the session one more time and trying again."}
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl flex items-center justify-around gap-4">
              <div className="text-center">
                <div className="text-xs text-muted-foreground font-bold uppercase mb-1">Status</div>
                <div className={`text-sm font-bold ${passed ? "text-green-600" : "text-red-600"}`}>
                  {passed ? "PASSED" : "FAILED"}
                </div>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="text-center">
                <div className="text-xs text-muted-foreground font-bold uppercase mb-1">Time Spent</div>
                <div className="text-sm font-bold">12:05</div>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="text-center">
                <div className="text-xs text-muted-foreground font-bold uppercase mb-1">Attempts</div>
                <div className="text-sm font-bold">1 / 3</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {passed ? (
                <>
                  <Button variant="outline" size="lg" className="rounded-full px-8" onClick={() => onNavigate("dashboard")}>
                    Go to Dashboard
                  </Button>
                  <Button size="lg" className="rounded-full px-8" onClick={() => onNavigate("browse")}>
                    Next Session
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" size="lg" className="rounded-full px-8" onClick={() => {setStep("intro"); setAnswers([]); setCurrentQuestion(0);}}>
                    Retake Test
                  </Button>
                  <Button size="lg" className="rounded-full px-8" onClick={() => onNavigate("session", sessionId || session.id)}>
                    Watch Again
                  </Button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}