import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TerminalDemo from "@/components/TerminalDemo";
import RulesShowcase from "@/components/RulesShowcase";
import GitHubAction from "@/components/GitHubAction";
import Installation from "@/components/Installation";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#080B0F] text-[#F5EFE6] min-h-screen font-sans selection:bg-[#6F63FF]/30 selection:text-[#F5EFE6] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <TerminalDemo />
        <RulesShowcase />
        <GitHubAction />
        <Installation />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}
