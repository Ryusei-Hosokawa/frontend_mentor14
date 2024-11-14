import React from 'react'

interface CollectionImageProps {
    src: string;
    alt?: string;
}

const CollectionImage: React.FC<CollectionImageProps> = ({ src, alt = 'Image' }) => (
    <img src={ src } alt={ alt } className="w-full h-full object-cover" />
);
export default CollectionImage;