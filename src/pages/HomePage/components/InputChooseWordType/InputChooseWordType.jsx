
function InputChooseWordType({ onChange, initialValue }) {
    return(
        <select name="filter type" className="input_choose_word_type" 
        data-testid="InputChooseWordType" onChange={onChange}
        defaultValue={initialValue}
        >
            <option value="noun">Noun</option>
            <option value="verb">Verb</option>
            <option value="adjective">Adjective</option>
            <option value="adverb">Adverb</option>
            <option value="phrasalVerb">Phrasal verb</option>
            <option value="idiom">Idiom</option>
        </select>
    )
}

export default InputChooseWordType