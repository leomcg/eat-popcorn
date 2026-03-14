import { useState } from "react";

export default function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Expand",
  collapseButtonText = "Collapse",
  buttonColor = "orangered",
  expanded = false,
  className = "box",
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayedTest = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
  const buttonText = isExpanded ? collapseButtonText : expandButtonText;

  return (
    <div className={className}>
      <span>
        {displayedTest}{" "}
        <button
          onClick={() => setIsExpanded((exp) => !exp)}
          style={{ backgroundColor: buttonColor }}
        >
          {buttonText}
        </button>
      </span>
    </div>
  );
}
