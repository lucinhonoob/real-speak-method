import { CSSProperties } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
  style?: CSSProperties;
}

/**
 * Imgur image optimizer.
 * Suffixes: t=160, m=320, l=640, h=1024 (jpg)
 * Generates srcset automatically when src matches https://i.imgur.com/{id}.jpg
 */
function buildImgurSrcSet(src: string) {
  const m = src.match(/^https?:\/\/i\.imgur\.com\/([A-Za-z0-9]+)(\.[a-z]+)$/i);
  if (!m) return null;
  const id = m[1];
  const ext = m[2];
  return {
    srcSet: [
      `https://i.imgur.com/${id}m${ext} 320w`,
      `https://i.imgur.com/${id}l${ext} 640w`,
      `https://i.imgur.com/${id}h${ext} 1024w`,
      `https://i.imgur.com/${id}${ext} 1280w`,
    ].join(", "),
    src: `https://i.imgur.com/${id}l${ext}`,
  };
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  sizes = "(max-width: 640px) 320px, (max-width: 1024px) 640px, 1024px",
  style,
}: Props) => {
  const imgur = buildImgurSrcSet(src);
  return (
    <img
      src={imgur?.src ?? src}
      srcSet={imgur?.srcSet}
      sizes={imgur ? sizes : undefined}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      style={style}
    />
  );
};
