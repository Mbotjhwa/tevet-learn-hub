import React, { useState } from "react";
import { Search, SlidersHorizontal, Filter, GraduationCap, School, Building2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SessionCard, SessionCategory } from "../components/shared/SessionCard";
import { Page } from "../App";
import { SESSIONS_DATA } from "../data/sessions";

interface BrowseProps {
  onNavigate: (page: Page, sessionId?: string) => void;
}

export function Browse({ onNavigate }: BrowseProps) {
  const [filter, setFilter] = useState<"All" | SessionCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSessions = SESSIONS_DATA.filter(session => {
    const matchesFilter = filter === "All" || session.category === filter;
    const matchesSearch = session.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          session.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="space-y-1">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Browse Syllabi & Sessions</h1>
          <p className="text-muted-foreground text-lg">Official curricula and interactive learning for all student types</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative flex-grow md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search subjects, levels, or syllabi..." 
              className="pl-10 h-11 border-slate-200 focus:border-primary shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2 h-11 border-slate-200">
            <SlidersHorizontal className="w-4 h-4" />
            Advanced
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-10">
        {[
          { id: "All", icon: <Filter className="w-4 h-4" /> },
          { id: "Public School", icon: <School className="w-4 h-4" /> },
          { id: "Private School", icon: <Building2 className="w-4 h-4" /> },
          { id: "TVET College", icon: <GraduationCap className="w-4 h-4" /> },
        ].map((item) => (
          <Badge
            key={item.id}
            variant={filter === item.id ? "default" : "outline"}
            className={`cursor-pointer px-5 py-2.5 text-sm flex items-center gap-2 rounded-full transition-all duration-300 border-slate-200 ${
              filter === item.id 
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105 border-primary" 
                : "hover:bg-slate-50 hover:border-slate-300"
            }`}
            onClick={() => setFilter(item.id as any)}
          >
            {item.icon}
            {item.id}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredSessions.length > 0 ? (
          filteredSessions.map((session, index) => (
            <SessionCard 
              key={session.id} 
              session={session} 
              onClick={(id) => onNavigate("session", id)}
              index={index}
            />
          ))
        ) : (
          <div className="col-span-full py-24 text-center space-y-4">
            <div className="bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <Search className="w-10 h-10 text-muted-foreground/50" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">No results found</h3>
            <p className="text-muted-foreground max-w-xs mx-auto">We couldn't find any syllabi or sessions matching your search criteria.</p>
            <Button 
              variant="link" 
              className="text-primary font-bold"
              onClick={() => {setSearchQuery(""); setFilter("All");}}
            >
              Reset all filters
            </Button>
          </div>
        )}
      </div>

      <div className="mt-20 p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Missing a syllabus?</h2>
          <p className="text-slate-400">If you can't find your specific school or college syllabus, let us know.</p>
        </div>
        <Button className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 h-12 rounded-xl">
          Request Syllabus
        </Button>
      </div>
    </div>
  );
}