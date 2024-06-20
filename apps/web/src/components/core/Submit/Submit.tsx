import { cn } from "lib/utils";

import type { DetailedHTMLProps, HTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isLoading?: boolean;
}

const Submit = ({ isLoading, children, className, ...rest }: Props) => (
  <div
    className={cn(
      "relative items-center overflow-hidden rounded-lg p-px",
      className,
    )}
    {...rest}
  >
    {isLoading && (
      <div className="animate-rotate -z-10 absolute inset-0 h-full w-full bg-[conic-gradient(transparent_120deg,var(--colors-accent-default)_220deg)]" />
    )}
    {children}
  </div>
);

export default Submit;
