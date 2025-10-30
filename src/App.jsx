import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TemplatesShowcase from "./components/TemplatesShowcase";
import Pricing from "./components/Pricing";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <ErrorBoundary
          fallback={
            <section className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-pink-50" />
              <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center py-20 sm:py-28 text-center">
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-yellow-500" />
                    3D preview unavailable — showing static hero
                  </span>
                  <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                    Create beautiful, interactive event pages with Eventify
                  </h1>
                  <p className="mt-5 max-w-2xl text-base text-slate-600 sm:text-lg">
                    Pick a template, customize the look, manage RSVPs, and collect guest photos — all in one place.
                  </p>
                </div>
              </div>
            </section>
          }
        >
          <Hero />
        </ErrorBoundary>

        <section id="features" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <FeatureCard
              title="Build fast"
              desc="Guided event wizard with previews for details, schedule, and RSVP form."
            />
            <FeatureCard
              title="Engage guests"
              desc="Collect RSVPs, guest messages, and photo uploads with approval controls."
            />
            <FeatureCard
              title="Grow with you"
              desc="Upgrade to add custom domains, analytics, and WhatsApp integration."
            />
          </div>
        </section>
        <TemplatesShowcase />
        <Pricing />
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Eventify. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  );
}
