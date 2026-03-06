"use client";

import React, { useState } from "react";
import Sidebar, { toolsList } from "@/components/Sidebar";
import Header from "@/components/Header";

// Tool components
import JsonPrettify from "@/components/tools/JsonPrettify";
import JsonMinify from "@/components/tools/JsonMinify";
import RandomPort from "@/components/tools/RandomPort";
import RegexTester from "@/components/tools/RegexTester";
import NotImplemented from "@/components/tools/NotImplemented";
import ChmodCalculator from "@/components/tools/ChmodCalculator";
import JsonToCsv from "@/components/tools/JsonToCsv";
import SqlPrettify from "@/components/tools/SqlPrettify";
import YamlPrettify from "@/components/tools/YamlPrettify";
import XmlFormatter from "@/components/tools/XmlFormatter";
import EmailNormalizer from "@/components/tools/EmailNormalizer";
import CrontabGenerator from "@/components/tools/CrontabGenerator";
import DockerRunToCompose from "@/components/tools/DockerRunToCompose";
import GitCheatsheet from "@/components/tools/GitCheatsheet";
import RegexCheatsheet from "@/components/tools/RegexCheatsheet";

export default function Home() {
  const [activeToolId, setActiveToolId] = useState("json-prettify");

  const renderTool = () => {
    switch (activeToolId) {
      case "json-prettify": return <JsonPrettify />;
      case "json-minify": return <JsonMinify />;
      case "random-port": return <RandomPort />;
      case "regex-tester": return <RegexTester />;
      case "chmod": return <ChmodCalculator />;
      case "json-csv": return <JsonToCsv />;
      case "sql-prettify": return <SqlPrettify />;
      case "yaml-prettify": return <YamlPrettify />;
      case "xml-formatter": return <XmlFormatter />;
      case "email-normalizer": return <EmailNormalizer />;
      case "crontab": return <CrontabGenerator />;
      case "docker-run-compose": return <DockerRunToCompose />;
      case "git-cheatsheet": return <GitCheatsheet />;
      case "regex-cheatsheet": return <RegexCheatsheet />;
      default: return <NotImplemented />;
    }
  };

  const activeTool = toolsList.find(t => t.id === activeToolId);

  return (
    <div className="flex h-screen bg-[#111111] text-gray-100 overflow-hidden font-sans">
      <Sidebar activeToolId={activeToolId} setActiveToolId={setActiveToolId} />
      
      <div className="flex flex-col flex-1 overflow-hidden relative">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-8 border-l border-[#333]">
          <div className="max-w-5xl mx-auto space-y-4">
            <h1 className="text-2xl font-bold text-white tracking-wide">
              {activeTool ? activeTool.name : "Select a tool"}
            </h1>
            
            <div className="bg-[#1e1e1e] border border-[#333] rounded-xl shadow-lg flex-1 min-h-[500px]">
              {renderTool()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
