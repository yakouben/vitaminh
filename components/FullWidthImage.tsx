import Image from "next/image";

interface FullWidthImageProps {
  src: string;
  alt: string;
  height?: string;
}

export default function FullWidthImage({ src, alt, height = "500px" }: FullWidthImageProps) {
  const isExternal = src.startsWith("http");
  return (
    <section className="w-full relative overflow-hidden" style={{ height }}>
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized={isExternal}
        className="object-cover"
        priority={false}
      />
    </section>
  );
}
