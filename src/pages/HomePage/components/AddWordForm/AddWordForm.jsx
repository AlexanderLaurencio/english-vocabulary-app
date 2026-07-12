import { useState, useRef } from "react"
import { allFieldsFilled } from "../../../../utils/allFieldsFilled.js"
import { addRecord, getAllRecords } from "../../../../services/IndexedDB.js"
import { resetInputs } from "../../../../utils/resetInputs.js"
import Button from "../../../../components/Button/Button.jsx"
import { showAddWordModalWindow } from "../../../../utils/showAddWordModalWindow.js"
import { input } from "@testing-library/user-event/dist/cjs/event/input.js"
import starIconFilled from "../../../../assets/images/WordFavoriteFilled.svg"
import starIconEmpty from "../../../../assets/images/WordFavoriteEmpty.svg"

function AddWordForm({ onRefreshUI }) {
    let [isFavorite, setIsFavorite] = useState(false)
    let [wordType, setWordType] = useState("noun")
    let [wordName, setWordName] = useState("")
    let [wordMeaning, setWordMeaning] = useState("")
    let [example, setExample] = useState("")
    let wordTemplate = {
        isFavorite: isFavorite,
        wordType: String(wordType).trim(),
        wordName: String(wordName).trim(), 
        wordMeaning: String(wordMeaning).trim(),
        example: String(example).trim(),
        isLearning: true
    }
    
    function markAsFavorite(e) {
        e.preventDefault();
        setIsFavorite(!isFavorite);
    }

    async function addWord(e) {
        if (allFieldsFilled({wordName, wordMeaning, example})) {
                addRecord(wordTemplate);
                resetInputs();
                setWordName("");
                setWordMeaning("")
                setExample("")
                showAddWordModalWindow(e);
                onRefreshUI();
                
        } else {
            e.preventDefault();
            alert("Please fill all fields")
        }
    }
    return(
        <form className="add_wordform" data-testid="AddWordForm">
            <Button onClick={markAsFavorite} className={"button_mark_favorite"}>
                {isFavorite 
                    ? <img src={starIconFilled}/>
                    : <img src={starIconEmpty}/>  
                }   
            </Button>
            <label htmlFor="input_word_name" className="add_word_label">
                Word
                <input type="text" id="input_word_name" className="add_word_input" 
                onChange={(e) => setWordName(e.target.value)} maxLength={40}/>
            </label>
            <label htmlFor="input_word_meaning" className="add_word_label">
                Meaning
                <input type="text" id="input_word_meaning" className="add_word_input" 
                onChange={(e) => setWordMeaning(e.target.value)} 
                maxLength={115} />
            </label>
            <label htmlFor="input_word_example" className="add_word_label">
                Example
                <input type="text" id="input_word_example" className="add_word_input" 
                onChange={(e) => setExample(e.target.value)} maxLength={115} />
            </label>
            <label htmlFor="input_word_type" className="add_word_label">
                Category
                <select id="input_word_type" className="add_word_input"
                onChange={(e) => setWordType(e.target.value)}> 
                    <option value="noun">Noun</option>
                    <option value="adjective">Adjective</option>
                    <option value="verb">Verb</option>
                    <option value="phrasalVerb">Phrasal verb</option>
                    <option value="adverb">Adverb</option>
                    <option value="idiom">Idiom</option>
                </select>
            </label>
            <div className="add_wordform_buttons">
                <Button className="close_modalwindow_button" onClick={showAddWordModalWindow}
                    dataTestId="CloseAddModalWindow">Cancel</Button>  
                <Button className="save_word_button" onClick={addWord} 
                    dataTestId="SaveWordButton">Save</Button>
            </div>
        </form>
    )
};
 
export default AddWordForm