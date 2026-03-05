import { useState } from "react";
import logs from "../../mock/consoleLogs.json";

function LogLine({ log }) {
  switch (log.type) {
    case "link":
      return (
        <>
          <span className="text-slate-700 dark:text-slate-200">
            {log.prefix}
          </span>
          <span className="text-[#0CC8A8]">{log.link}</span>
          <span className="text-slate-700 dark:text-slate-200">
            {log.suffix}
          </span>
        </>
      );
    case "tagged":
      return (
        <>
          <span className="text-slate-700 dark:text-slate-200">
            {log.prefix}
          </span>
          <span className="text-amber-600 dark:text-amber-400">{log.tag}</span>
          <span className="text-slate-700 dark:text-slate-200">
            {log.middle}
          </span>
          {log.code && (
            <span className="bg-[#0CC8A8]/20 text-[#0CC8A8] px-1 rounded">
              {log.code}
            </span>
          )}
          <span className="text-slate-700 dark:text-slate-200">
            {log.suffix}
          </span>
        </>
      );
    case "idor":
      return (
        <>
          <span className="text-slate-700 dark:text-slate-200">
            {log.prefix}
          </span>
          <span className="bg-[#0CC8A8]/20 text-[#0CC8A8] px-1 rounded">
            {log.code}
          </span>
          <span className="text-slate-700 dark:text-slate-200">
            {log.middle}
          </span>
          <span className="text-orange-600 dark:text-orange-400 font-semibold">
            {log.bold}
          </span>
          <span className="text-slate-700 dark:text-slate-200">
            {log.suffix}
          </span>
        </>
      );
    default:
      return (
        <span className="text-slate-700 dark:text-slate-200 whitespace-pre-wrap">
          {log.text}
        </span>
      );
  }
}

const TABS = ["Activity Log", "Verification Loops"];

export function LiveConsole() {
  const [activeTab, setActiveTab] = useState("Activity Log");

  return (
    <div className="bg-white dark:bg-[#1a1a1a] rounded-xl border border-black/[0.08] dark:border-white/[0.06] overflow-hidden flex flex-col">
      {/* Header */}
      <div className="px-5 py-3.5 border-b border-black/[0.08] dark:border-white/[0.06] flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-[#0CC8A8] inline-block" />
        <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
          Live Scan Console
        </span>
        <span className="text-xs text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-full">
          ⏱ Running...
        </span>
        <div className="ml-auto flex gap-2.5">
          <button
            aria-label="Minimize"
            className="bg-transparent border-none text-slate-400 cursor-pointer text-base"
          >
            ⌄
          </button>
          <button
            aria-label="Close"
            className="bg-transparent border-none text-slate-400 cursor-pointer text-sm"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-black/[0.08] dark:border-white/[0.06]">
        {TABS.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 border-none bg-transparent text-sm cursor-pointer transition-all font-sans
              ${
                activeTab === tab
                  ? "text-[#0CC8A8] font-semibold border-b-2 border-[#0CC8A8]"
                  : "text-slate-400 font-normal border-b-2 border-transparent"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Log output */}
      <div className="p-5 font-mono text-xs leading-7 bg-slate-50 dark:bg-[#111111] max-h-[340px] overflow-y-auto flex-1">
        {activeTab === "Activity Log" ? (
          logs.map((log, i) => (
            <div key={i} className="mb-2">
              <span className="text-slate-400">[{log.time}]</span>{" "}
              <LogLine log={log} />
            </div>
          ))
        ) : (
          <p className="text-slate-400 py-5">
            No verification loops recorded yet.
          </p>
        )}
      </div>
    </div>
  );
}
