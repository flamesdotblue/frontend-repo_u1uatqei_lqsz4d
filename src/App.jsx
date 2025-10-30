import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TemplatesShowcase from "./components/TemplatesShowcase";
import Pricing from "./components/Pricing";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
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
