import { useState } from "react";
import { motion } from "framer-motion";

function ImageLazyLoad({ path }: { path: string }) {
  const [isLoaded, setLoaded] = useState<boolean>(false);

  const imageLoaded = (): void => {
    setLoaded(true);
  };

  return (
    <motion.img
      src={path}
      style={{
        maxWidth: "100%",
        objectFit: "contain",
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: isLoaded ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        type: "tween",
      }}
      exit={{ opacity: 0 }}
      onLoad={imageLoaded}
    />
  );
}

export default ImageLazyLoad;
