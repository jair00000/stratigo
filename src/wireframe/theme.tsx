import React, { createContext, useContext } from "react";
import type { ColorTokens } from "../color/tokens";

const WireframeTheme = createContext<ColorTokens | null>(null);
export const useTheme = () => useContext(WireframeTheme)!;

export function WireframeProvider({
  tokens, children
}:{tokens: ColorTokens; children: React.ReactNode}) {
  return <WireframeTheme.Provider value={tokens}>{children}</WireframeTheme.Provider>;
}

