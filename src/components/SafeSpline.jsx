import { useEffect, useState } from "react";

// A safe wrapper that attempts to render a Spline scene.
// If the library or scene fails to load, it gracefully falls back
// to a decorative gradient background without crashing the app.
export default function SafeSpline({ scene }) {
  const [SplineComp, setSplineComp] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const mod = await import("@splinetool/react-spline");
        if (mounted) setSplineComp(() => mod.default);
      } catch (e) {
        console.error("Failed to load Spline:", e);
        if (mounted) setFailed(true);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (failed) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-pink-50" />
    );
  }

  if (!SplineComp) {
    return (
      <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-indigo-50 via-white to-pink-50" />
    );
  }

  const Spline = SplineComp;
  return (
    <Spline scene={scene} style={{ width: "100%", height: "100%" }} />
  );
}
