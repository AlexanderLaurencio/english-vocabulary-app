import { useState } from "react";

function WordList({ children }) {
    return(
        <div className="word_list" data-testid="WordList">
            {children}
        </div>
    )
};

export default WordList;