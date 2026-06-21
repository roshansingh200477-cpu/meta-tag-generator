import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    keywords: "",
    author: "",
    url: "",
    image: "",
  });

  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateTags = () => {
    return `<!-- Primary Meta Tags -->
<title>${form.title}</title>
<meta name="title" content="${form.title}" />
<meta name="description" content="${form.description}" />
<meta name="keywords" content="${form.keywords}" />
<meta name="author" content="${form.author}" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="${form.url}" />
<meta property="og:title" content="${form.title}" />
<meta property="og:description" content="${form.description}" />
<meta property="og:image" content="${form.image}" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="${form.url}" />
<meta property="twitter:title" content="${form.title}" />
<meta property="twitter:description" content="${form.description}" />
<meta property="twitter:image" content="${form.image}" />`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateTags());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isReady = form.title && form.description;

  const fields = [
    {
      label: "Page Title",
      name: "title",
      placeholder: "e.g. Best Boarding Schools in India 2026",
      required: true,
    },
    {
      label: "Meta Description",
      name: "description",
      placeholder:
        "e.g. Discover the top 21 boarding schools in India with fees and rankings.",
      required: true,
    },
    {
      label: "Keywords",
      name: "keywords",
      placeholder: "e.g. boarding schools, india, top schools",
      required: false,
    },
    {
      label: "Author",
      name: "author",
      placeholder: "e.g. Roshan Singh",
      required: false,
    },
    {
      label: "Page URL",
      name: "url",
      placeholder: "e.g. https://yourwebsite.com/page",
      required: false,
    },
    {
      label: "OG Image URL",
      name: "image",
      placeholder: "e.g. https://yourwebsite.com/image.jpg",
      required: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdf7ee] text-stone-800" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>

      {/* Subtle warm grain overlay */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px" }} />

      {/* Top Bar */}
      <div className="border-b border-amber-100/80 bg-[#fdf7ee]/90 backdrop-blur-md sticky top-0 z-10 px-8 py-3.5 flex justify-between items-center">
        <span className="text-[11px] tracking-[0.12em] uppercase text-amber-700/50 font-semibold">
          Digital Heroes · Free Tools
        </span>
        <a
          href="https://digitalheroesco.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] text-stone-400 hover:text-amber-700 transition-colors duration-200 font-medium"
        >
          digitalheroesco.com ↗
        </a>
      </div>

      {/* Hero */}
      <div className="max-w-[720px] mx-auto px-6 pt-16 pb-10">
        <div className="mb-3 flex items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-200/80 text-[10px] tracking-[0.14em] uppercase font-bold text-amber-700">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
            SEO & Marketing Tool
          </span>
        </div>

        <h1 className="text-[clamp(32px,6vw,52px)] font-extrabold leading-[1.08] tracking-[-0.03em] mb-4 text-stone-900">
          Meta Tag Generator.
        </h1>

        <p className="text-[15px] text-stone-400 leading-relaxed max-w-[540px]">
          Generate SEO-ready meta tags instantly — Primary, Open Graph, and
          Twitter Card. Free, no signup needed.
        </p>
      </div>

      {/* Form */}
      <div className="max-w-[720px] mx-auto px-6">
        <div className="rounded-2xl overflow-hidden border border-stone-200/80 bg-white shadow-[0_4px_32px_rgba(180,130,60,0.07),0_1px_4px_rgba(180,130,60,0.04)] mb-6">
          {fields.map(({ label, name, placeholder, required }, i) => (
            <div
              key={name}
              className={`group px-6 py-5 transition-colors duration-150 hover:bg-amber-50/40 ${i < fields.length - 1 ? "border-b border-stone-100" : ""}`}
            >
              <label className="block text-[10px] tracking-[0.12em] uppercase font-bold text-stone-400 group-hover:text-amber-600 transition-colors duration-150 mb-2 select-none">
                {label}{" "}
                {required && (
                  <span className="text-amber-500 ml-0.5">*</span>
                )}
              </label>

              <input
                type="text"
                name={name}
                value={form[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full bg-transparent border-none outline-none text-[15px] text-stone-800 placeholder:text-stone-300 caret-amber-500 font-medium"
              />
            </div>
          ))}
        </div>

        {/* Output */}
        {isReady ? (
          <div className="rounded-2xl overflow-hidden border border-stone-200/80 bg-white shadow-[0_4px_32px_rgba(180,130,60,0.07),0_1px_4px_rgba(180,130,60,0.04)] mb-6">
            <div className="px-6 py-4 border-b border-stone-100 flex justify-between items-center bg-stone-50/60">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
                <span className="text-[10px] tracking-[0.12em] uppercase font-bold text-stone-400">
                  Generated Tags
                </span>
              </div>

              <button
                onClick={handleCopy}
                className={`
                  px-4 py-1.5 rounded-lg text-[11px] font-bold tracking-[0.06em] uppercase transition-all duration-200 cursor-pointer border
                  ${copied
                    ? "bg-emerald-50 text-emerald-600 border-emerald-200"
                    : "bg-stone-900 text-amber-50 border-stone-900 shadow-[0_2px_8px_rgba(0,0,0,0.15)] hover:bg-amber-700 hover:border-amber-700 hover:shadow-[0_4px_12px_rgba(180,100,30,0.3)] active:scale-95"
                  }
                `}
              >
                {copied ? "Copied ✓" : "Copy All"}
              </button>
            </div>

            <pre className="m-0 px-6 py-6 text-[12px] leading-[1.8] text-emerald-600 whitespace-pre-wrap break-words overflow-x-auto bg-[#fafdf8] font-mono">
              {generateTags()}
            </pre>
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-stone-200 bg-white/60 px-6 py-10 text-center mb-6">
            <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center mx-auto mb-3">
              <span className="text-amber-400 text-lg">✦</span>
            </div>
            <p className="text-stone-400 text-[13px] leading-relaxed">
              Fill in <span className="text-stone-600 font-semibold">Title</span> and <span className="text-stone-600 font-semibold">Description</span> to generate your meta tags.
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="border-t border-stone-200/60 pt-8 pb-12 flex flex-col items-center gap-4">
          <p className="text-[12px] text-stone-400">
            Built by{" "}
            <span className="text-stone-600 font-semibold">Roshan Singh</span>{" "}
            ·{" "}
            <a
              href="mailto:roshansingh200477@gmail.com"
              className="text-stone-500 hover:text-amber-600 transition-colors duration-200"
            >
              roshansingh200477@gmail.com
            </a>
          </p>

          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-stone-900 text-amber-50 no-underline px-6 py-2.5 rounded-full text-[12px] font-bold tracking-[0.06em] uppercase shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:bg-amber-700 hover:shadow-[0_6px_20px_rgba(180,100,30,0.35)] transition-all duration-200 active:scale-95"
          >
            Built for Digital Heroes
            <span className="opacity-70">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}