import React, { useState } from "react";
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
  Sparkles,
  GitBranch,
  Cpu,
  Server,
  Lock,
  Search,
  Check,
  ChevronRight,
  Workflow
} from "lucide-react";

export default function OverviewPage({ onNavigateTab, onOpenIngest }) {
  const [activeParadigm, setActiveParadigm] = useState("naive");

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
            CyberRAG Studio is an interactive learning, architectural design, and simulation platform designed to demonstrate how RAG bridges Large Language Models (LLMs), Edge Small Language Models (SLMs), NotebookLLMs, and Enterprise Cybersecurity Threat Intelligence.
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

      {/* Section 1: What is RAG? (Core Concept) */}
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
      </div>

      {/* Section 2: Complete End-to-End RAG Architecture Diagram */}
      <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 md:p-8 space-y-6 shadow-xl">
        <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
          <Workflow className="w-6 h-6 text-indigo-400" />
          <div>
            <h2 className="text-xl font-bold text-slate-100">End-to-End RAG System Architecture Diagram</h2>
            <p className="text-xs text-slate-400">Visual dataflow across Offline Ingestion Phase and Online Query Execution Phase.</p>
          </div>
        </div>

        {/* Visual Architecture Diagram Graphic */}
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-8 overflow-x-auto scrollbar-thin">
          
          {/* Phase 1: Ingestion Pipeline */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>PHASE 1: Offline Document Ingestion Pipeline</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center space-y-2">
                <FileText className="w-7 h-7 text-cyan-400" />
                <span className="text-xs font-bold text-slate-200">1. Enterprise Data</span>
                <span className="text-[10px] text-slate-400">PDFs, JSON logs, Threat Intel, CVEs</span>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center space-y-2 relative">
                <Layers className="w-7 h-7 text-amber-400" />
                <span className="text-xs font-bold text-slate-200">2. Text Chunking</span>
                <span className="text-[10px] text-slate-400">Fixed/Semantic Tokens + Overlap</span>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center space-y-2">
                <Cpu className="w-7 h-7 text-purple-400" />
                <span className="text-xs font-bold text-slate-200">3. Embedding Model</span>
                <span className="text-[10px] text-slate-400">Dense Vectors & TF-IDF Maps</span>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-cyan-500/40 flex flex-col items-center justify-center space-y-2 bg-cyan-950/20">
                <Database className="w-7 h-7 text-cyan-300" />
                <span className="text-xs font-bold text-cyan-300">4. Vector Store</span>
                <span className="text-[10px] text-slate-400">Indexed Embedding Space</span>
              </div>

            </div>
          </div>

          {/* Connection Divider Arrow */}
          <div className="flex items-center justify-center py-1">
            <div className="h-px bg-slate-800 flex-1" />
            <div className="px-4 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-400 font-mono">
              ⬇️ User Query Initiation Phase ⬇️
            </div>
            <div className="h-px bg-slate-800 flex-1" />
          </div>

          {/* Phase 2: Online Query Execution Pipeline */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>PHASE 2: Online Query Execution & Generation Pipeline</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center space-y-2">
                <Search className="w-7 h-7 text-emerald-400" />
                <span className="text-xs font-bold text-slate-200">1. User Query</span>
                <span className="text-[10px] text-slate-400">Natural language threat question</span>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center space-y-2">
                <GitBranch className="w-7 h-7 text-indigo-400" />
                <span className="text-xs font-bold text-slate-200">2. Hybrid Retrieval</span>
                <span className="text-[10px] text-slate-400">Dense Cosine + Sparse BM25 + RRF</span>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center space-y-2">
                <FileText className="w-7 h-7 text-amber-400" />
                <span className="text-xs font-bold text-slate-200">3. Context Prompt</span>
                <span className="text-[10px] text-slate-400">System Instructions + Top-K Chunks</span>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-emerald-500/40 flex flex-col items-center justify-center space-y-2 bg-emerald-950/20">
                <Award className="w-7 h-7 text-emerald-400" />
                <span className="text-xs font-bold text-emerald-400">4. Grounded Output</span>
                <span className="text-[10px] text-slate-400">Verified Answer + Source Citations</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Section 3: RAG Architectural Evolution (Naive vs Advanced vs Modular) */}
      <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 md:p-8 space-y-6 shadow-xl">
        <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
          <GitBranch className="w-6 h-6 text-purple-400" />
          <div>
            <h2 className="text-xl font-bold text-slate-100">Evolution of RAG Architectural Paradigms</h2>
            <p className="text-xs text-slate-400">How RAG architectures evolved from simple indexing to advanced agentic routing.</p>
          </div>
        </div>

        {/* Interactive Paradigm Selector */}
        <div className="flex space-x-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 overflow-x-auto">
          <button
            onClick={() => setActiveParadigm("naive")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${
              activeParadigm === "naive" ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            1. Naive RAG (Basic)
          </button>
          <button
            onClick={() => setActiveParadigm("advanced")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${
              activeParadigm === "advanced" ? "bg-purple-500/20 text-purple-400 border border-purple-500/30" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            2. Advanced RAG (Pre/Post Processing)
          </button>
          <button
            onClick={() => setActiveParadigm("modular")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${
              activeParadigm === "modular" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            3. Modular & Agentic RAG (Modern)
          </button>
        </div>

        {/* Paradigm Details Card */}
        {activeParadigm === "naive" && (
          <div className="bg-slate-950 p-5 rounded-xl border border-cyan-500/30 space-y-3">
            <h3 className="font-bold text-sm text-cyan-400">Naive RAG Architecture: Indexing ➔ Retrieval ➔ Generation</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              The classic traditional approach. Raw text is chunked into fixed-length blocks, embedded into a vector database, and matched against queries using raw Cosine Similarity. While simple to implement, Naive RAG suffers from low precision when chunk sizes are suboptimal or when queries require multi-step reasoning.
            </p>
            <div className="text-[11px] text-slate-400 font-mono bg-slate-900 p-3 rounded-lg border border-slate-800">
              Flow: Document ➔ Fixed Chunking ➔ Embedding ➔ Top-K Vector Search ➔ LLM Prompt ➔ Answer
            </div>
          </div>
        )}

        {activeParadigm === "advanced" && (
          <div className="bg-slate-950 p-5 rounded-xl border border-purple-500/30 space-y-3">
            <h3 className="font-bold text-sm text-purple-400">Advanced RAG Architecture: Pre-Retrieval ➔ Hybrid Search ➔ Post-Retrieval Re-ranking</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Designed to solve precision and context fragmentation issues. Introduces <strong>Pre-Retrieval techniques</strong> (Query Expansion, HyDE hypothesis embeddings) and <strong>Post-Retrieval techniques</strong> (Cross-Encoder Re-ranking, Context Compression, Sentence Windowing). This powers the hybrid search engine in CyberRAG Studio.
            </p>
            <div className="text-[11px] text-slate-400 font-mono bg-slate-900 p-3 rounded-lg border border-slate-800">
              Flow: Query Expansion ➔ Dense Vector + Sparse BM25 Search ➔ Reciprocal Rank Fusion (RRF) ➔ Re-ranker ➔ Prompt Compression ➔ LLM
            </div>
          </div>
        )}

        {activeParadigm === "modular" && (
          <div className="bg-slate-950 p-5 rounded-xl border border-emerald-500/30 space-y-3">
            <h3 className="font-bold text-sm text-emerald-400">Modular & Agentic RAG Architecture: Dynamic Routing ➔ Knowledge Graphs ➔ Multi-Agent Synthesis</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              The modern state-of-the-art paradigm. Replaces static sequential pipelines with <strong>autonomous AI Agents</strong> that dynamically decide whether to query a vector store, search a Knowledge Graph (GraphRAG), invoke web APIs, or execute local code based on intent routing.
            </p>
            <div className="text-[11px] text-slate-400 font-mono bg-slate-900 p-3 rounded-lg border border-slate-800">
              Flow: Query ➔ Intent Router Agent ➔ [Vector DB | Knowledge Graph | Local SLM Tool] ➔ Evaluator Guardrail ➔ Final Answer
            </div>
          </div>
        )}
      </div>

      {/* Section 4: The RAG Triad Evaluation Framework */}
      <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 md:p-8 space-y-6 shadow-xl">
        <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
          <Award className="w-6 h-6 text-amber-400" />
          <div>
            <h2 className="text-xl font-bold text-slate-100">The RAG Triad: Evaluating Grounding Quality</h2>
            <p className="text-xs text-slate-400">The 3 mandatory pillars to prevent hallucinations and measure RAG fidelity.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
            <div className="text-xs font-bold text-cyan-400">1. Context Relevance</div>
            <h4 className="font-bold text-sm text-slate-100">Is Retrieved Context Relevant?</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Measures whether the Top-K document chunks retrieved from the vector database actually contain the information necessary to answer the user query.
            </p>
          </div>

          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
            <div className="text-xs font-bold text-purple-400">2. Grounded Faithfulness</div>
            <h4 className="font-bold text-sm text-slate-100">Is Answer Grounded in Context?</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Verifies that every claim in the generated answer is strictly derived from retrieved context without introducing unverified model hallucinations.
            </p>
          </div>

          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
            <div className="text-xs font-bold text-emerald-400">3. Answer Relevance</div>
            <h4 className="font-bold text-sm text-slate-100">Does Answer Address Query?</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ensures that the final generated response directly answers the original user question completely and concisely.
            </p>
          </div>

        </div>
      </div>

      {/* Section 5: How to Use This Portal & Available Tools */}
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

    </div>
  );
}
