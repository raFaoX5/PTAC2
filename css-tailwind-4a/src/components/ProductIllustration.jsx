const shapes = {
  sunglasses: (
    <>
      <rect x="30" y="88" width="34" height="10" rx="5" fill="#1c1c1c" />
      <circle cx="72" cy="112" r="26" fill="#161616" />
      <circle cx="128" cy="112" r="26" fill="#161616" />
      {/* ... hastes, ponte e reflexos */}
    </>
  ),
  belt: (/* círculo + fivela */),
  case:  (/* retângulo + câmeras */),
  // ... 6 outros produtos
};

export default function ProductIllustration({ type, className = "" }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      {shapes[type] ?? <rect x="70" y="70" width="60" height="60" rx="8" fill="#1c1c1c" />}
    </svg>
  );
}