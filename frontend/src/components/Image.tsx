type ImagePropsType = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

const Image = ({ src, className, alt, height, width }: ImagePropsType) => {
  return (
    <img
      src={src}
      className={className}
      alt={alt || "Image Loading"}
      height={height || 100}
      width={width || 100}
      loading="lazy"
    />
  );
};

export default Image;
