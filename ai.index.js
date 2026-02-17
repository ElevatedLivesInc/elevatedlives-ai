
async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Elevated Lives • Proof of Mind Network</title>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", sans-serif;
      line-height: 1.7;
      color: #e8edf2;
      background: #0a1628;
      min-height:100vh;
    }
    .container { max-width:1140px; margin:0 auto; padding:40px 20px; }
    nav {
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding:1.5rem 0;
      margin-bottom:4rem;
    }
    .logo {
      font-size:1.4rem;
      font-weight:600;
      letter-spacing:-0.5px;
      color:#fff;
    }
    .nav-links {
      display:flex;
      gap:2.5rem;
      list-style:none;
    }
    .nav-links a {
      color:#8b9cb6;
      text-decoration:none;
      font-size:0.95rem;
      transition: color 0.3s;
    }
    .nav-links a:hover { color:#fff; }
    .hero {
      margin:6rem 0 4rem;
      max-width:880px;
    }
    .eyebrow {
      font-size:0.8rem;
      letter-spacing:2px;
      text-transform:uppercase;
      color:#6b8cce;
      margin-bottom:1.5rem;
      font-weight:500;
    }
    h1 {
      font-size:3.5rem;
      line-height:1.15;
      color:#fff;
      margin-bottom:1.5rem;
      font-weight:600;
      letter-spacing:-1px;
    }
    .hero-subtitle {
      font-size:1.25rem;
      color:#a8b9d1;
      margin-bottom:2.5rem;
      line-height:1.65;
    }
    .truth-statement {
      background:rgba(76,111,255,0.08);
      border-left:3px solid #4c6fff;
      padding:1.5rem;
      margin:2rem 0;
      border-radius:8px;
      font-size:1.05rem;
      color:#b8c9e0;
      line-height:1.7;
    }
    .cta-group {
      display:flex;
      gap:1rem;
      margin-bottom:1.5rem;
    }
    .btn-primary {
      padding:0.9rem 2rem;
      background:#4c6fff;
      color:#fff;
      border:none;
      border-radius:8px;
      font-size:1rem;
      font-weight:500;
      cursor:pointer;
      text-decoration:none;
      display:inline-block;
      transition: all 0.3s;
    }
    .btn-primary:hover { 
      background:#5c7fff;
      transform:translateY(-2px);
    }
    .btn-secondary {
      padding:0.9rem 2rem;
      background:transparent;
      color:#a8b9d1;
      border:1.5px solid #2a3f5f;
      border-radius:8px;
      font-size:1rem;
      font-weight:500;
      cursor:pointer;
      text-decoration:none;
      display:inline-block;
      transition: all 0.3s;
    }
    .btn-secondary:hover { 
      border-color:#4c6fff;
      color:#fff;
    }
    .trust-line {
      font-size:0.85rem;
      color:#6b8cce;
      margin-top:1.5rem;
    }
    .features {
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(340px,1fr));
      gap:2rem;
      margin:6rem 0;
    }
    .feature-card {
      background:rgba(255,255,255,0.03);
      padding:2.5rem;
      border-radius:12px;
      border:1px solid rgba(255,255,255,0.06);
      transition: all 0.3s;
    }
    .feature-card:hover {
      background:rgba(255,255,255,0.05);
      border-color:rgba(76,111,255,0.3);
      transform:translateY(-4px);
    }
    .feature-icon {
      font-size:2.5rem;
      margin-bottom:1.5rem;
      display:block;
    }
    .feature-card h3 {
      font-size:1.4rem;
      color:#fff;
      margin-bottom:1rem;
      font-weight:500;
    }
    .feature-card p {
      color:#a8b9d1;
      line-height:1.7;
    }
    .network-section {
      background:rgba(76,111,255,0.05);
      border:1px solid rgba(76,111,255,0.15);
      border-radius:16px;
      padding:3.5rem 3rem;
      margin:5rem 0;
      text-align:center;
    }
    .network-section h2 {
      font-size:2.2rem;
      color:#fff;
      margin-bottom:1rem;
    }
    .network-section p {
      font-size:1.15rem;
      color:#a8b9d1;
      max-width:740px;
      margin:0 auto 2.5rem;
    }
    footer {
      border-top:1px solid rgba(255,255,255,0.06);
      padding:3rem 0 2rem;
      margin-top:6rem;
      text-align:center;
      color:#6b8cce;
      font-size:0.9rem;
    }
    footer a {
      color:#8b9cb6;
      text-decoration:none;
      margin:0 1rem;
    }
    footer a:hover { color:#fff; }
    @media (max-width: 768px) {
      h1 { font-size:2.3rem; }
      .features { grid-template-columns:1fr; }
      .cta-group { flex-direction:column; }
      nav { flex-direction:column; gap:1.5rem; }
    }
  </style>
</head>
<body>
  <div class="container">
    <nav>
      <div class="logo">ELEVATED LIVES</div>
      <ul class="nav-links">
        <li><a href="https://elevatedlives.xyz">Inner Net</a></li>
        <li><a href="#proof">Proof Mechanism</a></li>
        <li><a href="#network">Network</a></li>
        <li><a href="mailto:hello@elevatedlives.xyz">Contact</a></li>
      </ul>
    </nav>

    <section class="hero">
      <div class="eyebrow">PROOF OF MIND • WHAT YOU SEE CREATES WHAT YOU GET</div>
      <h1>Your attention isn't for sale. Your imagination creates reality.</h1>
      <p class="hero-subtitle">
        Elevated Lives is a network where breathwork, meditation, and consciousness check-ins become cryptographically proven value. 
        The lemon experiment proved it: what you imagine triggers the same response as reality. 
        We built participation proof for your inner work.
      </p>

      <div class="truth-statement">
        <strong>The Science:</strong> Your nervous system can't tell the difference between vividly imagined experience and physical reality. 
        We store your breathwork sessions, meditation check-ins, and signal coaching engagement as cryptographic proof. 
        Your visualization work = measurable contribution. Signal over noise. Heart over hype.
      </div>

      <div class="cta-group">
        <a href="mailto:hello@elevatedlives.xyz?subject=Join Proof Network" class="btn-primary">Join the Network</a>
        <a href="https://elevatedlives.xyz" class="btn-secondary">Explore Inner Net</a>
      </div>
      <div class="trust-line">
        Arizona-based Corporation • Founded April 2025 • Polygon Network
      </div>
    </section>

    <section class="features" id="proof">
      <div class="feature-card">
        <span class="feature-icon">🫁</span>
        <h3>Breathwork Check-Ins</h3>
        <p>Daily breathwork sessions tracked and cryptographically stored. Your nervous system regulation = proof-of-participation. Box breathing, Wim Hof, coherent breathing—all validated as network contribution.</p>
      </div>

      <div class="feature-card">
        <span class="feature-icon">🧘</span>
        <h3>Meditation Proofs</h3>
        <p>Meditation sessions verified through check-in mechanisms. Your stillness and focus generate SoulPrints. Not tracked for surveillance—stored as sovereign proof you did the inner work.</p>
      </div>

      <div class="feature-card">
        <span class="feature-icon">🗣️</span>
        <h3>Signal Coach Engagement</h3>
        <p>Work with consciousness coaches who speak signal, not noise. Coaching sessions validated and stored. Guidance from practitioners who understand neuro-linguistic expansion for good.</p>
      </div>

      <div class="feature-card">
        <span class="feature-icon">🌈</span>
        <h3>Aura Resonance Mapping</h3>
        <p>Energetic signature tracking through biometric and self-reported data. Your aura's resonance frequency mapped over time. Overlapping network participants create collective field coherence.</p>
      </div>

      <div class="feature-card">
        <span class="feature-icon">🍋</span>
        <h3>The Lemon Experiment</h3>
        <p>Imagine biting a lemon—your mouth waters. Same neural response as reality. What you see and imagine MATTERS. We store your visualization work as participation proof with economic value.</p>
      </div>

      <div class="feature-card">
        <span class="feature-icon">🔐</span>
        <h3>Cryptographic Consciousness</h3>
        <p>Hash storage + JSON inversion for all participation. Breathwork, meditations, coaching, aura maps—immutable proof stored on Polygon. You own your consciousness data.</p>
      </div>

      <div class="feature-card">
        <span class="feature-icon">🧠</span>
        <h3>Neuro-Linguistic Proof</h3>
        <p>NLP techniques for expansion, not manipulation. Your words and mental rehearsals create measurable neural pathways. We validate that work cryptographically.</p>
      </div>

      <div class="feature-card">
        <span class="feature-icon">🌐</span>
        <h3>Overlapping Network Maps</h3>
        <p>See how your aura resonance overlaps with other participants. Collective consciousness mapped in real-time. Find your signal-worthy collaborators through energetic alignment.</p>
      </div>

      <div class="feature-card">
        <span class="feature-icon">💎</span>
        <h3>SoulPrints as Currency</h3>
        <p>Your breath sessions, meditation minutes, and coach engagement become encrypted SoulPrints. Verifiable e-consciousness currency. Mental work = economic value in the network.</p>
      </div>
    </section>

    <section class="network-section" id="network">
      <h2>For participants who prove, not speculate.</h2>
      <p>
        This isn't a token airdrop. This isn't Discord admin grind hoping for magic value. 
        This is a cryptographic network where minds create real value through participation proof. 
        If you contribute signal, you earn. If you speak with heart, you belong.
      </p>
      <div class="cta-group" style="justify-content:center;">
        <a href="mailto:hello@elevatedlives.xyz?subject=Proof Network Application" class="btn-primary">Apply to Join</a>
        <a href="https://elevatedlives.xyz" class="btn-secondary">Visit Inner Net</a>
      </div>
    </section>
  </div>

  <footer>
    <p>
      &copy; 2026 Elevated Lives Inc • Proof of Mind Network • Arizona Corporation<br/>
      <a href="mailto:hello@elevatedlives.xyz">Contact</a>
      <a href="https://elevatedlives.xyz">Inner Net</a>
      <a href="#">SoulPrints</a>
      <a href="#">Polygon Proof</a>
    </p>
  </footer>
</body>
</html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};
