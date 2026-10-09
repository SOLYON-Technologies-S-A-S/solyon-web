import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const ICONS = {
  photo: (
    <>
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <circle cx="12" cy="13" r="4" />
      <path d="M8 6l2-3h4l2 3" />
    </>
  ),
  phone: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M10 18h4" />
    </>
  ),
  desktop: (
    <>
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
};

// Marco de foto del diseño (figure.media). Si el archivo existe en public/visual/
// se muestra la imagen real; si no, se conserva el marco con su etiqueta.
export default function Media({ className = "media", kind, tag, icon = "photo", file, label, alt, children }) {
  const exists = file && fs.existsSync(path.join(process.cwd(), "public", "visual", file));
  return (
    <figure className={className}>
      <div className="media-top">
        <span className="media-kind"><span className="dot"></span>{kind}</span>
        <span>{tag}</span>
      </div>
      {exists ? (
        <Image src={`/visual/${file}`} alt={alt || ""} fill sizes="(max-width: 960px) 100vw, 50vw" />
      ) : (
        <div className="media-center">
          <svg viewBox="0 0 24 24" aria-hidden="true">{ICONS[icon]}</svg>
          <span>{label || file}</span>
        </div>
      )}
      {children ? <figcaption>{children}</figcaption> : null}
    </figure>
  );
}
