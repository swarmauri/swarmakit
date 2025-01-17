import React from 'react';

interface HeroProps {
  state: 'displayed' | 'hidden' | 'withImage' | 'withText' | 'withCTA' | 'fullscreen';
  imageUrl?: string;
  text?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ state, imageUrl, text, ctaText, onCtaClick }) => {
  if (state === 'hidden') {
    return null;
  }

  return (
    <div className={`hero ${state}`} role="banner">
      {state === 'withImage' && imageUrl && (
        <img src={imageUrl} alt="" className="hero-image" />
      )}
      {state === 'withText' && text && (
        <div className="hero-text">{text}</div>
      )}
      {state === 'withCTA' && ctaText && (
        <button onClick={onCtaClick} className="hero-cta" aria-label={ctaText}>
          {ctaText}
        </button>
      )}
    </div>
  );
};

export default Hero;