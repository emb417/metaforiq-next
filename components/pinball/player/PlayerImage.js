import React from "react";
import { useState } from "react";
import Image from "next/image";
import {
  GiBabyFace,
  GiBearFace,
  GiCyborgFace,
  GiDwarfFace,
  GiDoctorFace,
  GiInvisibleFace,
  GiMonkFace,
  GiPigFace,
  GiWizardFace,
} from "react-icons/gi";

const faces = [
  GiBabyFace,
  GiBearFace,
  GiCyborgFace,
  GiDwarfFace,
  GiDoctorFace,
  GiInvisibleFace,
  GiMonkFace,
  GiPigFace,
  GiWizardFace,
];

export default function PlayerImage({ src, alt }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div>
      {hasError ? (
        React.createElement(faces[Math.floor(Math.random() * faces.length)], {
          className: "w-8 h-8 rounded-full bg-teal-950 text-teal-500",
        })
      ) : (
        <Image
          src={src}
          onError={() => setHasError(true)}
          width={32}
          height={32}
          alt={alt}
          className="rounded-full"
        />
      )}
    </div>
  );
}

