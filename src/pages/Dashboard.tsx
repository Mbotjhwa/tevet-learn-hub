import React from "react";
import { 
  BookOpen, 
  Award, 
  Clock, 
  Settings, 
  LogOut, 
  TrendingUp, 
  PlayCircle, 
  ChevronRight,
  GraduationCap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Page } from "../App";
import { motion } from "framer-motion";

interface DashboardProps {
  onNavigate: (page: Page) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const stats = [
    { label: "Sessions Completed", value: "12", icon: <PlayCircle className="w-5 h-5 text-blue-500" />, color: "bg-blue-50" },
    { label: "Hours Learned", value: "8.5h", icon: <Clock className="w-5 h-5 text-orange-500" />, color: "bg-orange-50" },
    { label: "Test Certificates", value: "4", icon: <Award className="w-5 h-5 text-green-500" />, color: "bg-green-50" },
    { label: "Average Score", value: "88%", icon: <TrendingUp className="w-5 h-5 text-purple-500" />, color: "bg-purple-50" },
  ];

  const recentSessions = [
    { id: "1", title: "Thermodynamics N3", progress: 100, status: "Completed", score: "85%" },
    { id: "2", title: "Calculus: Differentiation", progress: 65, status: "In Progress" },
    { id: "3", title: "Financial Accounting N4", progress: 10, status: "Just Started" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 space-y-2">
          <div className="p-4 bg-slate-50 rounded-2xl mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                JD
              </div>
              <div>
                <div className="font-bold">John Doe</div>
                <div className="text-xs text-muted-foreground">TVET Student</div>
              </div>
            </div>
            <div className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded inline-block">STUDENT PLUS</div>
          </div>

          {[
            { label: "Learning Path", icon: <BookOpen className="w-4 h-4" />, active: true },
            { label: "My Certificates", icon: <Award className="w-4 h-4" /> },
            { label: "Achievements", icon: <TrendingUp className="w-4 h-4" /> },
            { label: "Settings", icon: <Settings className="w-4 h-4" /> },
          ].map((item, i) => (
            <button
              key={i}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                item.active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-slate-50"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 mt-8 transition-colors">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </aside>

        {/* Main Content */}
        <div className="flex-grow space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-3xl font-bold">Welcome back, John! 👋</h1>
            <Button className="rounded-full" onClick={() => onNavigate("browse")}>
              <PlayCircle className="w-4 h-4 mr-2" /> Resume Learning
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm"
              >
                <div className={`${stat.color} w-10 h-10 rounded-xl flex items-center justify-center mb-3`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Learning */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">My Recent Sessions</h3>
                <Button variant="ghost" size="sm" onClick={() => onNavigate("browse")}>View All</Button>
              </div>
              <div className="space-y-4">
                {recentSessions.map((session) => (
                  <div key={session.id} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 group cursor-pointer hover:border-primary/30 transition-all">
                    <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between mb-1">
                        <span className="font-bold text-sm">{session.title}</span>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase">{session.status}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Progress value={session.progress} className="h-1.5" />
                        <span className="text-[10px] font-bold w-8">{session.progress}%</span>
                      </div>
                    </div>
                    {session.score && (
                      <div className="text-center px-3 border-l border-slate-100">
                        <div className="text-[10px] font-bold text-muted-foreground">SCORE</div>
                        <div className="text-sm font-bold text-green-600">{session.score}</div>
                      </div>
                    )}
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements/Badges */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Latest Achievements</h3>
              <div className="bg-slate-900 text-white rounded-[2rem] p-8 relative overflow-hidden">
                <div className="relative z-10 space-y-6">
                  <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Certified Engineer</h4>
                    <p className="text-sm text-slate-400 mt-1">Completed all N3 Engineering sessions with 85% average score.</p>
                  </div>
                  <Button variant="secondary" size="sm" className="rounded-full">Download Certificate</Button>
                </div>
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[80px] rounded-full" />
              </div>

              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-slate-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-200">
                    <div className="bg-slate-200 w-8 h-8 rounded-full opacity-30" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}