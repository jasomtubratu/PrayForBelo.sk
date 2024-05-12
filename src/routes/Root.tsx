import { Box, Divider } from "@mantine/core";
import HeroWeb from "./components/HeroWeb";
import NewsAdam from "./components/NewsAdam";
import KtoJeAdam from "./components/KtoJeAdam";
import Podporit from "./components/Podporit";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Root() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#novinky") {
            const newsAdamElement = document.getElementById("newsAdam");
            if (newsAdamElement) {
                newsAdamElement.scrollIntoView({ behavior: "smooth" });
            }
        } else if (location.hash === "#podpora") {
            const newsAdamElement = document.getElementById("podpora");
            if (newsAdamElement) {
                newsAdamElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <Box>
            <HeroWeb />
            <Divider variant="dashed" />

            
            <KtoJeAdam />

            <Podporit />


            <NewsAdam />

            
        </Box>
    );
}
