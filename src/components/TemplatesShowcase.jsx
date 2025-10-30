import { Palette, MapPin, Camera, MessageSquare } from "lucide-react";

const templates = [
  {
    name: "Wedding Classic",
    tag: "Wedding",
    preview:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1640&auto=format&fit=crop",
  },
  {
    name: "Corporate Summit",
    tag: "Corporate",
    preview:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1640&auto=format&fit=crop",
  },
  {
    name: "Birthday Brights",
    tag: "Birthday",
    preview:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1640&auto=format&fit=crop",
  },
  {
    name: "Baby Shower Soft",
    tag: "Baby Shower",
    preview:
      "https://images.unsplash.com/photo-1536236744-8d2f0d0663ed?q=80&w=1640&auto=format&fit=crop",
  },
];

export default function TemplatesShowcase() {
  return (
    <section id="templates" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="sm:flex sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Start from a polished template
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Choose a theme, customize colors, fonts, and sections. Embed maps, photo galleries, and RSVP forms.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 grid grid-cols-2 gap-2 text-xs text-slate-600">
            <MiniFeature icon={<Palette className="h-4 w-4" />} label="Themes" />
            <MiniFeature icon={<MapPin className="h-4 w-4" />} label="Google Maps" />
            <MiniFeature icon={<Camera className="h-4 w-4" />} label="Photo uploads" />
            <MiniFeature icon={<MessageSquare className="h-4 w-4" />} label="Guest messages" />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {templates.map((t) => (
            <article
              key={t.name}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={t.preview}
                  alt={t.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                  {t.tag}
                </span>
                <h3 className="mt-2 text-sm font-semibold text-slate-900">{t.name}</h3>
                <button className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50">
                  Use this template
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MiniFeature({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2.5 py-1">
      <span className="text-slate-700">{icon}</span>
      <span className="text-slate-600">{label}</span>
    </div>
  );
}
