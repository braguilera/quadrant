import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const InteractiveHotspot = ({
  title,
  description,
  position,
  direction = "top-right",
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay * 300)

    return () => clearTimeout(timer)
  }, [delay])

  const directionConfig = {
    "top-right": {
      line: { width: "80px", height: "2px", rotate: -45, transformOrigin: "left center" },
      infoBox: { x: 60, y: -80 },
    },
    "top-left": {
      line: { width: "80px", height: "2px", rotate: 45, transformOrigin: "right center" },
      infoBox: { x: -260, y: -80 },
    },
    "bottom-right": {
      line: { width: "80px", height: "2px", rotate: 45, transformOrigin: "left center" },
      infoBox: { x: 60, y: 40 },
    },
    "bottom-left": {
      line: { width: "80px", height: "2px", rotate: -45, transformOrigin: "right center" },
      infoBox: { x: -260, y: 40 },
    },
    right: {
      line: { width: "80px", height: "2px", rotate: 0, transformOrigin: "left center" },
      infoBox: { x: 90, y: -40 },
    },
    left: {
      line: { width: "80px", height: "2px", rotate: 0, transformOrigin: "right center" },
      infoBox: { x: -290, y: -40 },
    },
  }

  const config = directionConfig[direction]

  return (
    <div
      className="absolute z-10"
      style={{
        top: position.top,
        left: position.left,
        transform: "translate(-50%, -50%)",
      }}
    >
      <motion.div
        className="relative"
        initial={{ scale: 0, opacity: 0 }}
        animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 w-6 h-6 bg-secondary rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 0.3, 0.7],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="relative w-6 h-6 bg-secondary rounded-full border-2 border-white shadow-lg flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
        <motion.div
          className="absolute bg-secondary"
          style={{
            ...config.line,
            top: "50%",
            left: direction.includes("left") ? "auto" : "50%",
            right: direction.includes("left") ? "50%" : "auto",
            transformOrigin: config.line.transformOrigin,
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isVisible ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.5,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="absolute bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200 p-4 min-w-[200px] max-w-[250px]"
          style={{
            left: config.infoBox.x,
            top: config.infoBox.y,
          }}
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.9 }}
          transition={{
            delay: 0.8,
            duration: 0.4,
            ease: "easeOut",
          }}
        >
          <div
            className="absolute w-3 h-3"
            style={{
              [direction.includes("top") ? "bottom" : "top"]: "-6px",
              [direction.includes("left") ? "right" : "left"]:
                direction.includes("right") || direction.includes("left") ? "20px" : "50%",
              marginLeft: direction === "right" || direction === "left" ? "0" : "-6px",
            }}
          />
          <h3 className="font-bold text-gray-900 text-sm mb-2 leading-tight">{title}</h3>
          <p className="text-gray-600 text-xs leading-relaxed">{description}</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default InteractiveHotspot