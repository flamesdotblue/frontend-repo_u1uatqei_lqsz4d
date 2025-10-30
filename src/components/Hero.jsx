import Spline from "@splinetool/react-spline";
import { Calendar, Image as ImageIcon, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6cHjWm1Qz3OqKc0C/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-20 sm:py-28 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Live preview — build an event page in minutes
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Create beautiful, interactive event pages with Eventify
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-600 sm:text-lg">
            Pick a template, customize the look, manage RSVPs, and collect guest photos — all in one place.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#templates"
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-700"
            >
              Explore templates
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              See pricing
            </a>
          </div>

          <dl className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            <FeatureStat icon={<Calendar className="h-4 w-4" />} label="Event wizard" value="5-step setup" />
            <FeatureStat icon={<Users className="h-4 w-4" />} label="RSVPs" value="Smart tracking" />
            <FeatureStat icon={<ImageIcon className="h-4 w-4" />} label="Gallery" value="Guest uploads" />
          </dl>
        </div>
      </div>
    </section>
  );
}

function FeatureStat({ icon, label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white/80 p-4 text-left shadow-sm backdrop-blur">
      <div className="flex items-center gap-2 text-slate-700">
        <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 text-slate-700">
          {icon}
        </div>
        <div>
          <p className="text-xs text-slate-500">{label}</p>
          <p className="text-sm font-semibold text-slate-900">{value}</p>
        </div>
      </div>
    </div>
  );
}
