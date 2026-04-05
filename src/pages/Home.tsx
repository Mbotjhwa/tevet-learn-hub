import React from "react";
import { ArrowRight, Video, FileText, CheckCircle, Play, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Page } from "../App";
import { motion } from "framer-motion";

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
            >
              <Trophy className="w-4 h-4" />
              <span>Africa's Leading Learning Hub for Schools & TVET</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
            >
              Master Your Skills. <br />
              <span className="text-primary">Ace Your Tests.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              Expert-led video sessions, interactive assessments, and recognized certificates for learners and TVET students.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="rounded-full px-8 h-14 text-lg" onClick={() => onNavigate("browse")}>
                Start Learning Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg" onClick={() => onNavigate("pricing")}>
                View Plans
              </Button>
            </motion.div>
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>No ads ever</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Certificates included</span>
              </div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="md:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white/50 aspect-[4/3]">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b53ffe8d-30b6-41d4-a87d-9f10360d6ca5/hero-education-fd88b76c-1775329458296.webp" 
                alt="Students learning" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                <div className="bg-white/90 backdrop-blur p-4 rounded-xl flex items-center gap-4 max-w-sm">
                  <div className="bg-primary p-3 rounded-full">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-primary uppercase">Now Streaming</div>
                    <div className="font-bold text-slate-900">Advanced Electrical Engineering N3</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-yellow-400 p-4 rounded-2xl shadow-xl rotate-12 hidden md:block">
              <span className="font-bold text-slate-900 text-sm">98% Pass Rate</span>
            </div>
          </motion.div>
        </div>
        {/* Background shapes */}
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-2/3 bg-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-2/3 bg-blue-500/5 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why EduStream?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide specialized content tailored for the South African curriculum and TVET systems.
          </p>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Video className="w-8 h-8 text-primary" />,
              title: "High-Quality Sessions",
              description: "Watch crystal clear video lessons from top subject specialists and technical experts."
            },
            {
              icon: <FileText className="w-8 h-8 text-primary" />,
              title: "Smart Assessments",
              description: "Test your knowledge after every session with interactive quizzes and detailed feedback."
            },
            {
              icon: <Users className="w-8 h-8 text-primary" />,
              title: "Expert Guidance",
              description: "Access curated content specifically designed for TVET N1-N6 and CAPS syllabus."
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="bg-primary/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[2.5rem] p-12 md:p-20 text-center text-primary-foreground relative overflow-hidden">
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold">Ready to boost your results?</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Join over 50,000 learners already excelling with our platform.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-lg" onClick={() => onNavigate("browse")}>
                  Explore Sessions
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg bg-transparent border-white/50 hover:bg-white/10" onClick={() => onNavigate("pricing")}>
                  See Subscriptions
                </Button>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -translate-x-1/2 translate-y-1/2" />
          </div>
        </div>
      </section>
    </div>
  );
}