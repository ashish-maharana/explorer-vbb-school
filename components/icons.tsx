import { Atom, Sparkles } from "lucide-react";

type Props = {
  name: string;
  size?: number;
  className?: string;
};

const icons = {
  Atom,
  Sparkles,
};

export function IconGlyph({ name, size = 20, className }: Props) {
  const Icon = (icons as Record<string, typeof Atom>)[name] ?? Sparkles;
  return <Icon size={size} className={className} aria-hidden />;
}
