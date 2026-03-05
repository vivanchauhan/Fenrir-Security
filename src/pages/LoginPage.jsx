import { SignupForm } from "../components/login/SignupForm";

const FEATURES = [
  "Effortlessly spider and map targets to uncover hidden security flaws",
  "Deliver high-quality, validated findings in hours, not weeks.",
  "Generate professional, enterprise-grade security reports automatically.",
];

export function LoginPage({ onLogin }) {
  return (
    <div
      className="flex h-screen font-sans"
      style={{
        background:
          "radial-gradient(ellipse at 60% 80%, #b84a1a 0%, transparent 50%), radial-gradient(ellipse at 0% 50%, #0a3d38 0%, transparent 55%), radial-gradient(ellipse at 40% 100%, #7a2a0a 0%, transparent 45%), #0d1a17",
      }}
    >
      {/* Logo */}
      <div className="absolute top-5 left-5 flex items-center gap-2">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0CC8A8] flex items-center justify-center font-bold text-black text-sm">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
        <span className="font-bold text-xl text-white">aps</span>
      </div>
      {/* ── Left branding panel ── */}
      <div className="flex-1 flex flex-col justify-center px-16 py-16 text-white">
        <h1 className="text-4xl font-extrabold leading-tight mb-8 tracking-tight">
          Expert level Cybersecurity
          <br />
          in <span className="text-[#0CC8A8]">hours</span> not weeks.
        </h1>

        <p className="font-semibold text-white/70 text-sm mb-5">
          What's included
        </p>
        {FEATURES.map((text, i) => (
          <div key={i} className="flex gap-2.5 mb-3.5">
            <span className="text-[#0CC8A8] mt-0.5 font-bold">✓</span>
            <span className="text-white/80 text-sm leading-relaxed">
              {text}
            </span>
          </div>
        ))}

        <div className="mt-10 text-white/50 text-xs">
          <span className="text-[#0CC8A8] font-bold">★ Trustpilot</span>
          <br />
          <span className="font-bold text-white text-sm">
            Rated 4.5/5.0
          </span>{" "}
          <span>(100k+ reviews)</span>
        </div>
      </div>

      {/* ── Right sign-up card ── */}
      <div className="flex items-center justify-center p-20 min-w-[440px]">
        <div className="bg-white rounded-2xl px-10 py-10 w-[400px] shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
          <h2 className="text-2xl font-extrabold text-center mb-1.5 text-slate-900">
            Sign up
          </h2>
          <p className="text-center text-sm text-slate-400 mb-6">
            Already have an account?{" "}
            <span className="text-[#0CC8A8] cursor-pointer  underline">
              Log in
            </span>
          </p>
          <SignupForm onSuccess={onLogin} />
        </div>
      </div>
    </div>
  );
}
