"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FadeInUp({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-fit"
        >
            {children}
        </motion.div>
    );
}
