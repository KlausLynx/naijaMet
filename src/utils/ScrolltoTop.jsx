import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        const id = pathname.replace("/", "");
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    },[pathname]);
}