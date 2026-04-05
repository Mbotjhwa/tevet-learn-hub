import React, { useState, useMemo } from "react";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  Maximize2, 
  ChevronLeft, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Download, 
  Share2, 
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Page } from "../App";
import { motion } from "framer-motion";
import { SESSIONS_DATA } from "../data/sessions";

interface SessionDetailProps {
  onNavigate: (page: Page, sessionId?: string) => void;
  sessionId: string | null;
}

export function SessionDetail({ onNavigate, sessionId }: SessionDetailProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(35);

  const session = useMemo(() => {
    return SESSIONS_DATA.find(s => s.id === sessionId) || SESSIONS_DATA[0];
  }, [sessionId]);

  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => onNavigate("browse")}
        className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-6 transition-colors"
      >
        <ChevronLeft className="w-4 h-4 mr-1" /> Back to Browse
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Video Player and Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
            {!isPlaying ? (
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                <img 
                  src={session.thumbnail} 
                  alt={session.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="relative z-10 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-white fill-white ml-1" />
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                <div className="flex items-center justify-between text-white mb-4">
                  <div className="flex items-center gap-4">
                    <button onClick={() => setIsPlaying(false)}><Pause className="w-6 h-6 fill-white" /></button>
                    <button><RotateCcw className="w-5 h-5" /></button>
                    <span className="text-sm font-medium">15:42 / 45:00</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button><Volume2 className="w-5 h-5" /></button>
                    <button><Maximize2 className="w-5 h-5" /></button>
                  </div>
                </div>
                <Progress value={videoProgress} className="h-1 bg-white/20" />
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-3 items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="border-primary text-primary font-bold">{session.category}</Badge>
                <Badge variant="secondary">{session.subject}</Badge>
                <Badge variant="secondary">{session.level}</Badge>
              </div>
              <h1 className="text-3xl font-bold">{session.title}</h1>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm"><Download className="w-4 h-4 mr-2" /> Resources</Button>
              <Button variant="outline" size="sm"><Share2 className="w-4 h-4 mr-2" /> Share</Button>
            </div>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent mb-6">
              <TabsTrigger value="overview" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3">Overview</TabsTrigger>
              <TabsTrigger value="curriculum" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3">Curriculum</TabsTrigger>
              <TabsTrigger value="comments" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3">Discussion</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-6">
              <div className="prose prose-slate max-w-none">
                <h3 className="text-xl font-bold mb-3">About this session</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {session.description}
                </p>
                <h3 className="text-xl font-bold mt-8 mb-4">What you will learn</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {session.outcomes.map((outcome, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="text-sm text-muted-foreground">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="curriculum">
              <div className="space-y-4">
                {session.curriculum.length > 0 ? (
                  session.curriculum.map((step, i) => (
                    <div key={i} className={`flex items-center justify-between p-4 rounded-xl border ${step.completed ? "bg-slate-50/50" : "bg-white"}`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step.completed ? "bg-green-100 text-green-600" : "bg-slate-100 text-slate-400"}`}>
                          {step.completed ? <CheckCircle2 className="w-5 h-5" /> : <Play className="w-4 h-4 fill-current" />}
                        </div>
                        <div>
                          <div className="font-medium">{step.title}</div>
                          <div className="text-xs text-muted-foreground">{step.dur}</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Watch</Button>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    No video lessons available for this syllabus.
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right: Instructor and CTA */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <Clock className="w-4 h-4" /> Final Assessment
              </div>
              <h3 className="text-xl font-bold">Ready to test your knowledge?</h3>
              <p className="text-sm text-muted-foreground">
                Complete the video session to unlock the certificate test. Pass with 70% or more to earn your digital badge.
              </p>
              <Button 
                className="w-full py-6 text-lg font-bold"
                disabled={session.questions.length === 0}
                onClick={() => onNavigate("assessment", session.id)}
              >
                {session.questions.length > 0 ? "Take the Test" : "No Test Available"} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              {session.questions.length > 0 && (
                <div className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-bold">
                  {session.questions.length} questions \u2022 15 minutes \u2022 2 attempts
                </div>
              )}
            </div>

            <hr className="border-slate-100" />

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center">
                  <span className="text-xl font-bold text-slate-400">{session.author.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-bold">{session.author}</div>
                  <div className="text-xs text-muted-foreground">Subject Specialist</div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed italic">
                "{session.authorBio}"
              </p>
              <Button variant="outline" className="w-full text-xs h-8">View Profile</Button>
            </div>
          </motion.div>

          <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-4">
            <h4 className="font-bold flex items-center gap-2">
              <MessageSquare className="w-4 h-4" /> Community Q&A
            </h4>
            <p className="text-xs text-slate-400">Join the discussion with other students watching this session.</p>
            <div className="space-y-3">
              <div className="text-[11px] p-2 bg-white/5 rounded-lg border border-white/10">
                <div className="font-bold mb-1 text-primary-foreground/80">Sibusiso M.</div>
                "Can someone explain the 2nd law again in simpler terms?"
              </div>
              <Button variant="secondary" className="w-full text-xs h-8">Open Discussion</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}