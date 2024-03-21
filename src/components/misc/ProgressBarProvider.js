"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

import React from "react";

export default function ProgressBarProvider({ children }) {
    return (
        <>
            {children}
            <ProgressBar
                color="rgb(219 39 119)"
                options={{
                    showSpinner: false,
                }}
            />
        </>
    );
}
