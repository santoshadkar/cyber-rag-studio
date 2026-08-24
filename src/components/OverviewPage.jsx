import React from "react";
import { 
  BookOpen, 
  ShieldCheck, 
  Zap, 
  Radio, 
  Layers, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle,
  FileText,
  UploadCloud,
  Award,
  Sparkles
} from "lucide-react";

export default function OverviewPage({ onNavigateTab, onOpenIngest }) {
  return (
    <div className="space-y-10 py-2">
      
      {/* Hero Header Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-slate-800 p-8 md:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>Welcome to CyberRAG Studio</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Master <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Retrieval-Augmented Generation</span> for AI & Cybersecurity
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            CyberRAG Studio is an interactive learning and simulation platform designed to demonstrate how RAG bridges Large Language Models (LLMs), Edge Small Language Models (SLMs), NotebookLLMs, and Enterprise Cybersecurity Threat Intelligence.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigateTab("workbench")}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 transition flex items-center space-x-2 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Launch Threat Workbench</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={() => onNavigateTab("arena")}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs transition flex items-center space-x-2 cursor-pointer"
            >
              <Zap className="w-4 h-4 text-purple-400" />
              <span>Test LLMs vs SLMs Arena</span>
            </button>

            <button
              onClick={() => onNavigateTab("notebook")}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs transition flex items-center space-x-2 cursor-pointer"
            >
              <Radio className="w-4 h-4 text-emerald-400" />
              <span>Listen to Notebook Audio Overview</span>
            </button>
          </div>
        </div>
      </div>

      {/* Section 1: What is RAG? */}
      <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 md:p-8 space-y-6 shadow-xl">
        <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
          <BookOpen className="w-6 h-6 text-cyan-400" />
          <div>
            <h2 className="text-xl font-bold text-slate-100">What is RAG (Retrieval-Augmented Generation)?</h2>
            <p className="text-xs text-slate-400">Understanding how RAG grounds generative AI models in verified factual data.</p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          Standard AI models (like GPT-4 or Claude) generate responses based solely on what they learned during training. While powerful, they can suffer from <strong>hallucinations</strong> (inventing false details) and lack knowledge of proprietary or real-time enterprise documents.
          <br /><br />
          <strong>RAG solves this by introducing a 2-step process:</strong> First, it <em>retrieves</em> exact relevant passages from a trusted knowledge base (such as MITRE ATT&CK logs, OWASP security standards, or CVE databases). Second, it feeds these exact passages into the language model to <em>generate</em> a verified, source-cited answer.
        </p>

        {/* RAG Pipeline Flowchart */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 relative">
            <div className="text-xs font-bold text-cyan-400 flex items-center justify-between">
              <span>Step 1: Ingestion</span>
              <span className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 flex items-center justify-center text-[10px]">1</span>
            </div>
            <h4 className="text-sm font-semibold text-slate-200">Document Chunking</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Documents are broken into smaller semantic text blocks (chunks) with configurable sliding window overlap.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 relative">
            <div className="text-xs font-bold text-purple-400 flex items-center justify-between">
              <span>Step 2: Indexing</span>
              <span className="w-5 h-5 rounded-full bg-purple-950 text-purple-400 flex items-center justify-center text-[10px]">2</span>
            </div>
            <h4 className="text-sm font-semibold text-slate-200">Vector Search</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Chunks are converted into numerical vector embeddings for rapid Cosine Similarity & BM25 hybrid matching.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 relative">
            <div className="text-xs font-bold text-emerald-400 flex items-center justify-between">
              <span>Step 3: Retrieval</span>
              <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center text-[10px]">3</span>
            </div>
            <h4 className="text-sm font-semibold text-slate-200">Prompt Augmentation</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              The user query fetches the Top-K most relevant document chunks to construct an augmented prompt payload.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 relative">
            <div className="text-xs font-bold text-amber-400 flex items-center justify-between">
              <span>Step 4: Generation</span>
              <span className="w-5 h-5 rounded-full bg-amber-950 text-amber-400 flex items-center justify-center text-[10px]">4</span>
            </div>
            <h4 className="text-sm font-semibold text-slate-200">Citations & Synthesis</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              The LLM or SLM synthesizes a precise response back-linked to exact line numbers and source citations.
            </p>
          </div>

        </div>
      </div>

      {/* Section 2: Why Use RAG & Real-World Use Cases */}
      <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 md:p-8 space-y-6 shadow-xl">
        <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
          <ShieldCheck className="w-6 h-6 text-purple-400" />
          <div>
            <h2 className="text-xl font-bold text-slate-100">Why Use RAG? Real-World Applications</h2>
            <p className="text-xs text-slate-400">Key enterprise advantages of Retrieval-Augmented Generation.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
              🛡️
            </div>
            <h3 className="font-bold text-sm text-slate-100">Cybersecurity Threat Hunting</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ground security analysts on MITRE ATT&CK tactics, CVE vulnerability intelligence, and OWASP Top 10 LLM risks for rapid incident mitigation.
            </p>
          </div>

          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
              ⚡
            </div>
            <h3 className="font-bold text-sm text-slate-100">Air-Gapped SLM Security</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Run Small Language Models (Phi-3, Gemma) locally on edge endpoints with zero cloud telemetry exposure, reducing cost while ensuring 100% data privacy.
            </p>
          </div>

          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
              🎙️
            </div>
            <h3 className="font-bold text-sm text-slate-100">NotebookLLM Podcast Synthesis</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Convert raw technical PDFs and log payloads into executive briefs, interactive flashcards, and dual-host AI audio podcasts.
            </p>
          </div>

        </div>
      </div>

      {/* Section 3: How to Use This Portal & Portal Capabilities */}
      <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 md:p-8 space-y-6 shadow-xl">
        <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
          <Layers className="w-6 h-6 text-emerald-400" />
          <div>
            <h2 className="text-xl font-bold text-slate-100">How to Use This Portal & Available Tools</h2>
            <p className="text-xs text-slate-400">Guide to navigating the 5 core interactive workspaces in CyberRAG Studio.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div 
            onClick={() => onNavigateTab("workbench")}
            className="bg-slate-950 hover:bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition cursor-pointer space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-cyan-400 flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4" />
                <span>1. Threat RAG Workbench</span>
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition" />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Execute natural language queries across cybersecurity datasets. Inspect grounded answers, relevance match scores, and verified source citations.
            </p>
          </div>

          <div 
            onClick={() => onNavigateTab("arena")}
            className="bg-slate-950 hover:bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-purple-500/40 transition cursor-pointer space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-purple-400 flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>2. LLM vs SLM Arena</span>
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition" />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Compare Cloud Frontier Models (GPT-4o) against Edge Small Language Models (Phi-3, Gemma) on latency (0.14s), throughput, VRAM, and cost.
            </p>
          </div>

          <div 
            onClick={() => onNavigateTab("notebook")}
            className="bg-slate-950 hover:bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-emerald-500/40 transition cursor-pointer space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-emerald-400 flex items-center space-x-2">
                <Radio className="w-4 h-4" />
                <span>3. NotebookLLM Studio</span>
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition" />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Listen to AI-synthesized audio podcasts featuring two AI hosts debating technical security documents, complete with voice playback and equalizer waveforms.
            </p>
          </div>

          <div 
            onClick={() => onNavigateTab("chunking")}
            className="bg-slate-950 hover:bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-amber-500/40 transition cursor-pointer space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-amber-400 flex items-center space-x-2">
                <Layers className="w-4 h-4" />
                <span>4. Chunking & Token Lab</span>
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition" />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Adjust chunk size (10–100 tokens) and sliding window overlap sliders to inspect how document text is tokenized into vectors live.
            </p>
          </div>

          <div 
            onClick={() => onNavigateTab("vectorspace")}
            className="bg-slate-950 hover:bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-indigo-500/40 transition cursor-pointer space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-indigo-400 flex items-center space-x-2">
                <Database className="w-4 h-4" />
                <span>5. Vector Space Canvas</span>
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition" />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Inspect 2D PCA vector projections in real time. Hover over document vector nodes to view similarity distances and text payloads.
            </p>
          </div>

          <div 
            onClick={onOpenIngest}
            className="bg-slate-950 hover:bg-slate-900 p-5 rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition cursor-pointer space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-cyan-300 flex items-center space-x-2">
                <UploadCloud className="w-4 h-4" />
                <span>6. Ingest Custom Documents</span>
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-300 transition" />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Click the "+ Ingest Document" button in the top bar to paste or upload your own TXT / MD / JSON logs directly into the vector store!
            </p>
          </div>

        </div>
      </div>

      {/* Section 4: Information Produced From This Portal */}
      <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 md:p-8 space-y-4 shadow-xl">
        <h2 className="text-xl font-bold text-slate-100 flex items-center space-x-2">
          <Award className="w-5 h-5 text-amber-400" />
          <span>What Information Can Be Produced From This Portal?</span>
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
          <li className="flex items-start space-x-2 bg-slate-950 p-3 rounded-lg border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Factual Grounded Answers</strong> back-linked to exact line numbers and document sources.</span>
          </li>
          <li className="flex items-start space-x-2 bg-slate-950 p-3 rounded-lg border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Model Benchmark Reports</strong> comparing Latency (ms), Throughput (tok/s), VRAM, and Cost.</span>
          </li>
          <li className="flex items-start space-x-2 bg-slate-950 p-3 rounded-lg border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Audio Podcast Scripts</strong> with browser voice synthesis & dual AI speaker dialogue.</span>
          </li>
          <li className="flex items-start space-x-2 bg-slate-950 p-3 rounded-lg border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Customized Vector Indexes</strong> built dynamically from your uploaded documents.</span>
          </li>
        </ul>
      </div>

    </div>
  );
}
