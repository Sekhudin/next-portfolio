import { HTMLAttributeAnchorTarget } from "react";

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

export { toast } from "src/components/ui/use-toast";