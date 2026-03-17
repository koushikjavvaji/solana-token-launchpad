export function TxSuccess({ txSig, cluster = "devnet" }) {
  if (!txSig) return null;
  return (
    <div style={{ marginTop: "1rem", color: "green" }}>
      ✅ Token Created!{" "}
      
        href={`https://solscan.io/tx/${txSig}?cluster=${cluster}`}
        target="_blank"
        rel="noreferrer"
      >
        View on Solscan →
      </a>
    </div>
  );
}
