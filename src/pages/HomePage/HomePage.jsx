import { useEffect, useRef, useState } from "react";
import { addRecord, getAllRecords } from "../../services/IndexedDB.js";
import HomePageHeader from "./components/HomePageHeader/HomePageHeader.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import FilterType from "./components/FilterType/FilterType.jsx";
import SearchType from "./components/SearchType/SearchType.jsx";
import AddWordModalWindow from "./components/AddWordModalWindow/AddWordModalWindow.jsx";
import AddWordForm from "./components/AddWordForm/AddWordForm.jsx";
import WordList from "./components/WordList/WordList.jsx";
import Word from "./components/Word/Word.jsx";
import { showAddWordModalWindow } from "../../utils/showAddWordModalWindow.js";
import Button from "../../components/Button/Button.jsx";
import { showSidenav } from "../../utils/showSidenav.js";
import SideBarButtonOpen from "../../assets/images/SideBarButtonOpen.svg"
import sunIcon from "../../assets/images/sun.svg"
import moonIcon from "../../assets/images/moon.svg"

function HomePage() {
    let [isDarkmode, setIsDarkmode] = useState()
    let [words, setWords] = useState(null);
    let [wordsCopy, setWordsCopy] = useState(null);
    let [searchBy, setSearchBy] = useState("wordName");

    useEffect(() => {
    showWords()
    },[]);
    useEffect(() => {
        switch (localStorage.getItem("theme")) {
        case null:
            localStorage.setItem("theme","light")
            setIsDarkmode(false)
            break
        case "light":
            document.body.classList.remove("darkmode");
            break
        case "dark":
            setIsDarkmode(true)
            document.body.classList.add("darkmode");
            break
        }  
    },[]);
    async function showWords() {
        let response = await getAllRecords();
            if (response !== undefined) {
                setWords(response);
                setWordsCopy(response);
            }
    };
    async function filterWords(e) {
        if (e.target.value !== "all") {
            let response = await getAllRecords();
            let filteredWords = response.filter(w => w.wordType === e.target.value);
            setWords(filteredWords);
            setWordsCopy(filteredWords);
        } else {
            let response = await getAllRecords();;
            setWords(response);
            setWordsCopy(response);
        }
    }
    function onSearchBarChange(e) {
        if (e.target.value === "") {
            setWords(wordsCopy)
        }

        let reg = new RegExp(`${e.target.value}`,"i");
        let filteredWords = words.filter(w => {
            if (searchBy === "wordName") {
                    return w.wordName.match(reg)
                 } else {
                    return w.wordMeaning.match(reg)
                }
            }
        );
        if (e.target.value !== "") {
            setWords(filteredWords)
        }
    }
    
    function onSearchByChange(e) {
            setSearchBy(e.target.value);
    };
    
    function toggleTheme() {
        if (localStorage.getItem("theme") === "dark") {
            localStorage.setItem("theme","light");
            document.body.classList.remove("darkmode");
            setIsDarkmode(false);
        } else if (localStorage.getItem("theme") === "light") {
            localStorage.setItem("theme","dark");
            document.body.classList.add("darkmode");
            setIsDarkmode(true);
        }
    }; 

    return(
        <main className="home_page" data-testid="HomePage">
            <HomePageHeader > 
                <Button className="sidebar_button-open" dataTestId="SideBarButtonOpen" onClick={showSidenav}> 
                    <img src={SideBarButtonOpen} alt="SideBar Button" />
                </Button>
                <SearchBar onChange={onSearchBarChange}/>
                <Button className="button_toggle_theme" dataTestId="ButtonToggleTheme" onClick={toggleTheme}>
                    {isDarkmode 
                    ?<img src={sunIcon} alt="Sun"/>
                    :<img src={moonIcon} alt="Moon"/>
                    }
                </Button>
                <div className="home_page_header_container-buttons">
                     <FilterType onChange={filterWords}/>
                     <SearchType onChange={onSearchByChange}/>
                    <Button onClick={showAddWordModalWindow} 
                    className="add_word_button" dataTestId="AddWordButton">Add</Button>
                </div>     
            </HomePageHeader>
            {words && <WordList >
                    {words.map(w => <Word word={w} key={w.id} onChange={showWords} />)}
                </WordList>}
            <AddWordModalWindow >
                <AddWordForm onRefreshUI={showWords} /> 
            </AddWordModalWindow>
        </main>
    )
}

export default HomePage;