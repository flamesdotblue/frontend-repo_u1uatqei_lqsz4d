import { Rocket, User, Settings } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-pink-500 text-white">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="text-xl font-semibold tracking-tight">Eventify</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#templates" className="hover:text-slate-900 transition-colors">Templates</a>
            <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
              <User className="h-4 w-4" />
              Sign in
            </button>
            <button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700">
              <Settings className="h-4 w-4" />
              Start building
            </button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-300 p-2 text-slate-700 hover:bg-slate-50"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2 text-sm text-slate-700">
              <a href="#templates" className="rounded-md px-3 py-2 hover:bg-slate-50">Templates</a>
              <a href="#pricing" className="rounded-md px-3 py-2 hover:bg-slate-50">Pricing</a>
              <a href="#features" className="rounded-md px-3 py-2 hover:bg-slate-50">Features</a>
            </nav>
            <div className="mt-3 flex items-center gap-2">
              <button className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                Sign in
              </button>
              <button className="flex-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                Start building
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
