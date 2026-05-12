export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          IRS Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan Contractor Agreements for{" "}
          <span className="text-[#58a6ff]">Tax Compliance Risks</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload your contractor PDFs and get an instant misclassification risk score based on IRS guidelines — before an audit costs you thousands.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Scanning — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for free preview. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📄", title: "Upload Agreements", desc: "Drop in any contractor PDF and our AI parses every clause instantly." },
            { icon: "⚠️", title: "Risk Flags", desc: "Get specific IRS risk flags with severity scores and plain-English explanations." },
            { icon: "✅", title: "Fix Recommendations", desc: "Receive actionable edits to bring agreements into compliance fast." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-sm text-[#6e7681] mb-6">/month · cancel anytime</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited agreement scans",
              "IRS 20-factor checklist analysis",
              "Compliance score per contract",
              "Specific risk flags with severity",
              "Actionable fix recommendations",
              "PDF export of full report"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What makes contractor misclassification risky?",
              a: "The IRS can reclassify contractors as employees, triggering back taxes, penalties, and interest. Fines can exceed $50,000 per worker. Early detection is far cheaper than an audit."
            },
            {
              q: "How does the AI analyze my agreements?",
              a: "We apply the IRS 20-factor behavioral and financial control test to every clause in your PDF, scoring each risk area and explaining exactly which language raises red flags."
            },
            {
              q: "Is my contract data kept private?",
              a: "Yes. Documents are processed in isolated sessions, never stored permanently, and never used for training. Your agreements stay confidential."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Contractor Tax Compliance Scanner. Not legal advice.
      </footer>
    </main>
  );
}
