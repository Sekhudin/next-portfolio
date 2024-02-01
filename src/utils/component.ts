import { HTMLAttributeAnchorTarget } from "react";
export { toast } from "src/components/ui/use-toast";

export const hrefTo = (href?: string | null, target?: HTMLAttributeAnchorTarget) => {
  if (href) {
    if (target) {
      window.open(href, target);
      return;
    }
    window.location.href = href;
    return;
  }
};