import { useState } from "react"
import { deleteRecord, modifyRecord } from "../../../../services/IndexedDB"
import SearchType from "../SearchType/SearchType"
import FilterType from "../FilterType/FilterType"
import InputChooseWordType from "../InputChooseWordType/InputChooseWordType"
import Button from "../../../../components/Button/Button"

function Word({ word, onChange }) {
    let [isEditing, setIsEditing] = useState(false)
    let [isLearning, setIsLearning] = useState(word.isLearning)
    let [isFavorite, setIsFavorite] = useState(word.isFavorite)
    let [wordType, setWordType] = useState(word.wordType)
    let [wordName, setWordName] = useState(word.wordName)
    let [wordMeaning, setMeaning] = useState(word.wordMeaning)
    let [example, setExample] = useState(word.example)

    function deleteWord(e) {
        document.querySelectorAll(".word").forEach(w => {
            if (w.dataset.id == word.id) {
                w.remove()
            }
        })
        deleteRecord(word.id)
    }

    async function changeIsLearning() {
        await modifyRecord({...word, isLearning: !isLearning});
        onChange();
        setIsLearning(!word.isLearning)
    }
    async function changeIsFavorite() {
        await modifyRecord({...word, isFavorite: !isFavorite});
        onChange();
        setIsFavorite(!word.isFavorite)
    }
    async function saveChanges(){
        await modifyRecord({id: word.id, isLearning, isFavorite, wordType, wordName, wordMeaning, example});
        onChange();
        setIsEditing(!isEditing)
    }
    return(
        <article className="word" data-testid="Word" data-id={`${word.id}`}>

            <Button onClick={changeIsFavorite} className="button_mark_favorite">
                {isFavorite 
                ? <img src="src/assets/images/WordFavoriteFilled.svg"/>
                : <img src="src/assets/images/WordFavoriteEmpty.svg"/>  
                }
            </Button>

            {isEditing 
            ?<InputChooseWordType initialValue={word.wordType} onChange={(e) => setWordType(e.target.value)}/> 
            :<span className="word_type">{word.wordType}</span>}
            
            {isEditing 
            ?<input defaultValue={word.wordName} type="text"  className="input_change_word_name"
              onChange={(e) => setWordName(e.target.value)} maxLength={40}
            />: 
            <h3 className="word_name">{word.wordName}</h3>}
            
            {isEditing 
            ?<input defaultValue={word.wordMeaning} type="text" className="input_change_word_meaning"
              onChange={(e) => setMeaning(e.target.value)} maxLength={115}
            /> 
            :<p className="word_meaning">{word.wordMeaning}</p>}

            <div className="word_example_container">
                <span className="word_example_title">Example:</span>
                {isEditing 

                ?<input defaultValue={word.example} type="text" className="input_change_word_example"
                onChange={(e) => setExample(e.target.value)} maxLength={115}
                /> 

                :<p className="word_example">{word.example}</p>}
            </div>

            <Button onClick={changeIsLearning} className="word_state_button"> 
                {isLearning ? "Learning" : "Learned"} 
            </Button>
            
            <div className="word_buttons_container">
                    {isEditing 
                    ? <Button onClick={saveChanges} className="button_save_word_changes">
                        <img src="src/assets/images/WordSaveButton.svg" alt="Save word" />
                    </Button>
                    :<Button onClick={() => setIsEditing(!isEditing)} className="button_edit_word">
                        <img src="src/assets/images/WordEditButton.svg" alt="Edit word" />
                    </Button>}
            
                <Button onClick={deleteWord} className="button_delete_word">
                    <img src="src/assets/images/WordDeleteButton.svg" alt="Delete word" />
                </Button>
            </div>
        </article>
    )
};

export default Word