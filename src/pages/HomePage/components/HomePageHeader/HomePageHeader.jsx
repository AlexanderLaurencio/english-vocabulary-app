import { useState } from "react";

function HomePageHeader({ children }) {
    return(
        <header className="home_page_header" data-testid="HomePageHeader">
            {children}
        </header>
    )
}

export default HomePageHeader