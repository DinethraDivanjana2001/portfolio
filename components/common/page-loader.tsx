"use client";

import { useEffect, useState } from "react";

export function PageLoader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // 1.5 seconds

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
            <div className="relative">
                {/* Spinning circle */}
                <div className="w-20 h-20 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>

                {/* Center dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            </div>

            {/* Loading text */}
            <p className="absolute mt-32 text-sm text-muted-foreground animate-pulse">
                Loading...
            </p>
        </div>
    );
}
