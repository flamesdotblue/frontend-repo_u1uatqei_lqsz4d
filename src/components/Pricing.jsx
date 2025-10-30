import { Check, CreditCard, Shield, Zap } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "$0",
    descriptor: "Get started",
    features: [
      "1 event",
      "Basic templates",
      "RSVP collection",
      "Community support",
    ],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Standard",
    price: "$10",
    descriptor: "For small events",
    features: [
      "Up to 3 events",
      "Photo uploads",
      "RSVP analytics",
      "Email reminders",
    ],
    cta: "Choose Standard",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$25",
    descriptor: "Power features",
    features: [
      "Up to 10 events",
      "Custom domains",
      "Theme customization",
      "Guest messaging",
    ],
    cta: "Choose Pro",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$50",
    descriptor: "Scale without limits",
    features: [
      "Unlimited events",
      "AI template assistant",
      "WhatsApp integration",
      "Advanced analytics",
    ],
    cta: "Go Premium",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative border-t border-slate-200 bg-slate-50/60">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
            <Shield className="h-4 w-4 text-emerald-600" />
            Flexible plans, cancel anytime
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Simple pricing for every occasion
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-slate-600">
            Start free, upgrade when you need more power. All plans include secure hosting and fast CDN.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`flex flex-col rounded-2xl border bg-white p-6 shadow-sm ${
                t.highlighted ? "border-indigo-500 ring-2 ring-indigo-200" : "border-slate-200"
              }`}
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
                  <p className="text-xs text-slate-500">{t.descriptor}</p>
                </div>
                {t.highlighted ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700">
                    <Zap className="h-3 w-3" /> Best value
                  </span>
                ) : null}
              </div>

              <div className="mt-4 flex items-end gap-1">
                <span className="text-3xl font-extrabold text-slate-900">{t.price}</span>
                <span className="text-sm text-slate-500">/mo</span>
              </div>

              <ul className="mt-4 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-700">
                    <Check className="h-4 w-4 text-emerald-600" /> {f}
                  </li>
                ))}
              </ul>

              <button className="mt-6 inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
                <CreditCard className="mr-2 h-4 w-4" /> {t.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
