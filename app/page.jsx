"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { toPng } from "html-to-image";
import { TONES, generateMessage } from "../lib/messages";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GreetingCard from "../components/GreetingCard";
import ShareButtons from "../components/ShareButtons";
import ThemeSwitcher from "../components/ThemeSwitcher";
import StarField from "../components/StarField";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [senderName, setSenderName] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [tone, setTone] = useState("islamic");
  const [theme, setTheme] = useState("emerald");
  const [message, setMessage] = useState("");
  const [animKey, setAnimKey] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const cardRef = useRef(null);

  // Apply dark mode class
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const fireConfetti = useCallback(async () => {
    const confetti = (await import("canvas-confetti")).default;
    const colors = ["#34d399", "#a78bfa", "#fbbf24", "#f472b6", "#60a5fa"];
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.55 },
      colors,
      scalar: 1.2,
    });
    setTimeout(() => {
      confetti({
        particleCount: 60,
        spread: 120,
        origin: { y: 0.4, x: 0.2 },
        colors,
        angle: 60,
      });
      confetti({
        particleCount: 60,
        spread: 120,
        origin: { y: 0.4, x: 0.8 },
        colors,
        angle: 120,
      });
    }, 300);
  }, []);

  const handleGenerate = useCallback(() => {
    if (!senderName.trim()) {
      setError("Please enter your name ✨");
      return;
    }
    setError("");
    setLoading(true);

    setTimeout(() => {
      const msg = generateMessage(tone, senderName, receiverName);
      setMessage(msg);
      setAnimKey((k) => k + 1);
      setLoading(false);
      fireConfetti();

      setTimeout(() => {
        document
          .getElementById("card-section")
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    }, 350);
  }, [senderName, receiverName, tone, fireConfetti]);

  const handleRandomize = useCallback(() => {
    if (!senderName.trim()) {
      setError("Please enter your name first ✨");
      return;
    }
    setError("");
    const tones = TONES.map((t) => t.id);
    const randomTone = tones[Math.floor(Math.random() * tones.length)];
    setTone(randomTone);
    setLoading(true);

    setTimeout(() => {
      const msg = generateMessage(randomTone, senderName, receiverName);
      setMessage(msg);
      setAnimKey((k) => k + 1);
      setLoading(false);
      fireConfetti();
    }, 300);
  }, [senderName, receiverName, fireConfetti]);

  const handleDownload = useCallback(async () => {
    if (!cardRef.current) return;
    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        quality: 1,
        pixelRatio: 2,
        backgroundColor: "#0f172a",
      });
      const link = document.createElement("a");
      link.download = `eid-mubarak-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (e) {
      console.error("Download failed", e);
    }
  }, []);

  const bgGradient = darkMode
    ? "bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950"
    : "bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900";

  return (
    <div
      className={`min-h-screen relative transition-all duration-500 ${bgGradient}`}
    >
      <StarField />

      <div className="relative z-10">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="max-w-2xl mx-auto px-4 pt-32 pb-10">
          {/* Hero */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass bg-white/10 border border-white/15 text-white/60 text-xs font-body tracking-widest uppercase mb-6">
              <span className="animate-twinkle">✦</span>
              <span>Create • Share • Celebrate</span>
              <span
                className="animate-twinkle"
                style={{ animationDelay: "1s" }}
              >
                ✦
              </span>
            </div>
            <h2
              className="font-display text-white font-bold leading-tight mb-3"
              style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
            >
              Eid Mubarak
              <span
                className="block text-emerald-400"
                style={{ fontSize: "0.7em" }}
              >
                Greeting Generator
              </span>
            </h2>
            <p className="text-white/50 font-body max-w-sm mx-auto leading-relaxed">
              Craft a beautiful, personalised Eid greeting card in seconds.
              Choose your tone, download, and share.
            </p>
          </div>

          {/* Generator Form */}
          <div
            className="rounded-3xl glass border border-white/10 p-6 md:p-8 mb-8 animate-fade-in"
            style={{
              animationDelay: "0.1s",
              background: "rgba(255,255,255,0.05)",
            }}
          >
            <h3 className="font-display text-white text-lg font-semibold mb-6 flex items-center gap-2">
              <span>✍️</span> Personalise Your Card
            </h3>

            {/* Names */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-white/60 text-xs font-body uppercase tracking-wider mb-2">
                  Your Name <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  className="eid-input"
                  placeholder="e.g. Ahmed"
                  value={senderName}
                  onChange={(e) => {
                    setSenderName(e.target.value);
                    setError("");
                  }}
                />
              </div>
              <div>
                <label className="block text-white/60 text-xs font-body uppercase tracking-wider mb-2">
                  Receiver's Name{" "}
                  <span className="text-white/30">(optional)</span>
                </label>
                <input
                  type="text"
                  className="eid-input"
                  placeholder="e.g. Fatima"
                  value={receiverName}
                  onChange={(e) => setReceiverName(e.target.value)}
                />
              </div>
            </div>

            {/* Error */}
            {error && (
              <p className="text-amber-400 text-sm font-body mb-4 flex items-center gap-2 animate-fade-in">
                <span>⚠️</span> {error}
              </p>
            )}

            {/* Tone selector */}
            <div className="mb-6">
              <label className="block text-white/60 text-xs font-body uppercase tracking-wider mb-3">
                Message Tone
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {TONES.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTone(t.id)}
                    className={`tone-btn ${tone === t.id ? "active" : ""}`}
                  >
                    <span className="text-2xl">{t.emoji}</span>
                    <span className="text-xs font-medium leading-tight">
                      {t.label}
                    </span>
                    <span className="text-[10px] text-white/40 leading-tight">
                      {t.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Theme switcher */}
            <div className="mb-8">
              <label className="block text-white/60 text-xs font-body uppercase tracking-wider mb-3">
                Card Theme
              </label>
              <ThemeSwitcher activeTheme={theme} setTheme={setTheme} />
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="flex-1 relative overflow-hidden flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-body font-semibold text-base transition-all duration-200 active:scale-95 disabled:opacity-60"
                style={{
                  background:
                    "linear-gradient(135deg, #059669, #10b981, #34d399)",
                  color: "#fff",
                  boxShadow: "0 8px 32px rgba(16, 185, 129, 0.35)",
                }}
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <span>🌙</span> Generate Card
                  </>
                )}
              </button>

              <button
                onClick={handleRandomize}
                disabled={loading}
                className="flex items-center justify-center gap-2 py-4 px-5 rounded-2xl glass border border-white/20 bg-white/10 text-white font-body font-medium text-base hover:bg-white/20 transition-all duration-200 active:scale-95 disabled:opacity-60"
              >
                <span>🎲</span> Randomize
              </button>
            </div>
          </div>

          {/* Card Preview */}
          {message && (
            <div id="card-section" className="animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-white text-lg font-semibold flex items-center gap-2">
                  <span>🎴</span> Your Greeting Card
                </h3>
                <span className="text-white/30 text-xs font-body">
                  Tap below to share
                </span>
              </div>

              <GreetingCard
                ref={cardRef}
                message={message}
                senderName={senderName}
                theme={theme}
                animKey={animKey}
              />

              <div className="mt-6">
                <ShareButtons message={message} onDownload={handleDownload} />
              </div>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
}
