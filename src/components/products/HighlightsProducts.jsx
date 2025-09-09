import React from 'react'
import { motion } from 'framer-motion';

const HighlightsProducts = ({index, highlight}) => {
    return (
        <motion.div>
            <p>{highlight}</p>
        </motion.div>
    )
}

export default HighlightsProducts
