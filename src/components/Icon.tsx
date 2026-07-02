import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";

type IconName = keyof typeof Icons;

export default function Icon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const LucideIcon = Icons[name as IconName] as React.ComponentType<LucideProps>;
  if (!LucideIcon) return null;
  return <LucideIcon {...props} />;
}
