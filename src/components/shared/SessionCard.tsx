import React from "react";
import { Play, Clock, BookOpen, Star, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";

export type SessionCategory = "Public School" | "Private School" | "TVET College";
export type SessionType = "Syllabus" | "Video";

export interface Session {
  id: string;
  title: string;
  category: SessionCategory;
  type: SessionType;
  subject: string;
  duration: string;
  level: string;
  thumbnail: string;
  author: string;
  description: string;
}

interface SessionCardProps {
  session: Session;
  onClick: (id: string) => void;
  index: number;
}

export function SessionCard({ session, onClick, index }: SessionCardProps) {
  const getBadgeColor = (category: SessionCategory) => {
    switch (category) {
      case "Public School": return "bg-blue-600";
      case "Private School": return "bg-purple-600";
      case "TVET College": return "bg-orange-600";
      default: return "bg-primary";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card 
        className="overflow-hidden cursor-pointer border-slate-200 hover:border-primary/50 hover:shadow-xl transition-all h-full flex flex-col"
        onClick={() => onClick(session.id)}
      >
        <CardHeader className="p-0 relative aspect-[4/3] overflow-hidden">
          <img 
            src={session.thumbnail} 
            alt={session.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
              {session.type === "Video" ? (
                <Play className="w-8 h-8 text-white fill-white" />
              ) : (
                <FileText className="w-8 h-8 text-white" />
              )}
            </div>
          </div>
          <Badge className={`absolute top-3 left-3 ${getBadgeColor(session.category)} text-white border-none shadow-md`}>
            {session.category}
          </Badge>
          <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 backdrop-blur-md">
            {session.type === "Video" ? <Clock className="w-3 h-3" /> : <FileText className="w-3 h-3" />}
            {session.type === "Video" ? session.duration : "Document"}
          </div>
          <Badge variant="secondary" className="absolute top-3 right-3 bg-white/90 text-primary font-bold shadow-sm">
            {session.type}
          </Badge>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2 font-medium">
            <span className="text-primary">{session.subject}</span>
            <span className="opacity-40">•</span>
            <span>{session.level}</span>
          </div>
          <h3 className="font-bold text-base leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {session.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
            {session.description}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center border-t border-slate-50 mt-auto">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
              <BookOpen className="w-3 h-3 text-primary" />
            </div>
            <span className="text-xs font-semibold text-slate-700">{session.author}</span>
          </div>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="w-3 h-3 fill-amber-500" />
            <span className="text-xs font-bold text-slate-700">4.9</span>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}