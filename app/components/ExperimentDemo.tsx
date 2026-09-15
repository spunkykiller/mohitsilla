"use client";

import { useId, useRef, useState } from "react";

type ExperimentDemoProps = {
  name: string;
  youtubeId: string;
};

export default function ExperimentDemo({ name, youtubeId }: ExperimentDemoProps) {
  const [isOpen, setIsOpen] = useState(false);
  const playerId = useId();
  const playButton = useRef<HTMLButtonElement>(null);

  function closeDemo() {
    setIsOpen(false);
    playButton.current?.focus();
  }

  return (
    <div className="experiment-demo">
      <div className="demo-controls">
        <button
          ref={playButton}
          type="button"
          className="text-link"
          aria-expanded={isOpen}
          aria-controls={playerId}
          aria-label={`${isOpen ? "Close" : "Play"} the ${name} demo`}
          onClick={() => (isOpen ? closeDemo() : setIsOpen(true))}
        >
          {isOpen ? "Close demo" : "Play demo"}
          <span aria-hidden="true">{isOpen ? " ×" : " ↗"}</span>
        </button>
        <a
          className="text-link"
          href={`https://www.youtube.com/watch?v=${youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Watch the ${name} demo on YouTube (opens in a new tab)`}
        >
          Watch on YouTube <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div id={playerId}>
        {isOpen && (
          <iframe
            className="demo-frame"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
            title={`${name} demonstration video`}
            width="640"
            height="360"
            style={{ width: "100%", height: "auto", aspectRatio: "16 / 9" }}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}
