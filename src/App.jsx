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

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-10">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-2">
            Meta Tag Generator
          </h1>
          <p className="text-gray-400 text-sm">
            Generate SEO-ready meta tags for your website instantly — free, no signup needed.
          </p>
        </div>

        {/* Form */}
        <div className="bg-gray-900 rounded-2xl p-6 space-y-4 mb-6">
          {[
            { label: "Page Title *", name: "title", placeholder: "e.g. Best Boarding Schools in India 2026" },
            { label: "Meta Description *", name: "description", placeholder: "e.g. Discover the top 21 boarding schools in India with fees, rankings and reviews." },
            { label: "Keywords", name: "keywords", placeholder: "e.g. boarding schools, india, top schools" },
            { label: "Author", name: "author", placeholder: "e.g. Roshan Singh" },
            { label: "Page URL", name: "url", placeholder: "e.g. https://yourwebsite.com/page" },
            { label: "OG Image URL", name: "image", placeholder: "e.g. https://yourwebsite.com/image.jpg" },
          ].map(({ label, name, placeholder }) => (
            <div key={name}>
              <label className="block text-sm text-gray-400 mb-1">{label}</label>
              <input
                type="text"
                name={name}
                value={form[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>
          ))}
        </div>

        {/* Output */}
        {isReady && (
          <div className="bg-gray-900 rounded-2xl p-6 mb-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-sm font-semibold text-gray-300">Generated Meta Tags</h2>
              <button
                onClick={handleCopy}
                className="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-lg transition"
              >
                {copied ? "Copied!" : "Copy All"}
              </button>
            </div>
            <pre className="text-xs text-green-400 whitespace-pre-wrap break-words bg-gray-800 rounded-lg p-4 overflow-auto">
              {generateTags()}
            </pre>
          </div>
        )}

        {!isReady && (
          <div className="text-center text-gray-600 text-sm mb-6">
            Fill in at least Title and Description to generate tags.
          </div>
        )}

        {/* Footer */}
        <div className="text-center space-y-3">
          <p className="text-xs text-gray-600">
            Built by <span className="text-gray-400">Roshan Singh</span> —{" "}
            <a href="mailto:roshansingh200477@gmail.com" className="text-blue-400 hover:underline">
              roshansingh200477@gmail.com
            </a>
          </p>
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2 rounded-full transition"
          >
            Built for Digital Heroes
          </a>
        </div>

      </div>
    </div>
  );
}