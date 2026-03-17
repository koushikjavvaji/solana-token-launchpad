export function validateTokenInputs({ name, symbol, supply, decimals }) {
  if (!name.trim()) throw new Error("Token name is required");
  if (!symbol.trim()) throw new Error("Token symbol is required");
  if (supply <= 0) throw new Error("Supply must be greater than 0");
  if (decimals < 0 || decimals > 9) throw new Error("Decimals must be between 0 and 9");
}
