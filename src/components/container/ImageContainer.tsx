import clsx from "clsx";
import Image from "next/image";
import React from "react";

type ImageContainerProps = {
  section?: boolean;
  image: string;
};

const ImageContainer: React.FC<ImageContainerProps> = ({
  section = false,
  image,
}) => {
  return (
    <div className="relative">
      <div className="w-80 h-80 border-[10px] mx-8 rounded-md" />
      <Image
        className={clsx(
          "absolute -top-8  rounded-md h-full",
          section ? "right-0" : "left-0"
        )}
        src={image}
        width={300}
        height={300}
        style={{
          height: "100%",
        }}
        alt="logo"
      />
    </div>
  );
};

export default ImageContainer;
