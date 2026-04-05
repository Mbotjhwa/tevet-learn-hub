import React from "react";
import { GraduationCap, Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { Page } from "../../App";

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div 
            className="flex flex-col cursor-pointer group"
            onClick={() => onNavigate("home")}
          >
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">EduStream</span>
            </div>
            <span className="text-[9px] font-semibold text-muted-foreground mt-0.5 ml-1 leading-none uppercase tracking-widest">
              Owned by Virgilio Mbotjhwa Msibi
            </span>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs">
            Empowering students from public and private schools and TVET colleges with high-quality syllabi and video sessions.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-slate-900">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => onNavigate("browse")} className="text-muted-foreground hover:text-primary transition-colors">Syllabi & Sessions</button></li>
            <li><button onClick={() => onNavigate("pricing")} className="text-muted-foreground hover:text-primary transition-colors">Subscription Plans</button></li>
            <li><button onClick={() => onNavigate("dashboard")} className="text-muted-foreground hover:text-primary transition-colors">Student Portal</button></li>
            <li><button className="text-muted-foreground hover:text-primary transition-colors">Contact Support</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-slate-900">Syllabi Categories</h4>
          <ul className="space-y-2 text-sm">
            <li><button className="text-muted-foreground hover:text-primary transition-colors">Public School (CAPS)</button></li>
            <li><button className="text-muted-foreground hover:text-primary transition-colors">Private School (IEB)</button></li>
            <li><button className="text-muted-foreground hover:text-primary transition-colors">TVET College (N1-N6)</button></li>
            <li><button className="text-muted-foreground hover:text-primary transition-colors">Higher Education</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-slate-900">Stay Updated</h4>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">Join our mailing list for new syllabus additions and exam tips.</p>
          <div className="flex gap-2">
            <div className="relative flex-grow">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
              />
            </div>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <div className="text-center md:text-left">
          <p>© 2024 EduStream. All rights reserved.</p>
          <p className="mt-1 font-medium text-slate-500">Founded and Owned by Virgilio Mbotjhwa Msibi</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}