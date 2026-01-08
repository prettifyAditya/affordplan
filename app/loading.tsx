"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Loader() {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, [pathname]);

    if (!loading) return null;

    return (
        <div style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(255,255,255,0.7)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                border: "4px solid #ccc",
                borderTopColor: "#4d3664",
                animation: "spin 0.7s linear infinite"
            }} />
            <style>
                {`@keyframes spin { to { transform: rotate(360deg); } }`}
            </style>
        </div>
    );
}
