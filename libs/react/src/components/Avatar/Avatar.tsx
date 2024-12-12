import React from 'react';

interface AvatarProps {
  imageUrl?: string;
  altText: string;
  size?: 'small' | 'medium' | 'large';
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, altText, size = 'medium' }) => {
  return (
    <div className={`avatar ${size}`}>
      {imageUrl ? (
        <img src={imageUrl} alt={altText} aria-label={altText} />
      ) : (
        <div className="placeholder" aria-label={altText}>
          {altText.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
};

export default Avatar;