
function FilterType({ onChange }) {
    return(
        <select name="filter type" className="filter_type" data-testid="FilterType" onChange={onChange}>
            <option value="all">All</option>
            <option value="noun">Noun</option>
            <option value="verb">Verb</option>
            <option value="adjective">Adjective</option>
            <option value="adverb">Adverb</option>
            <option value="phrasalVerb">Phrasal verb</option>
            <option value="idiom">Idiom</option>
        </select>
    )
}

export default FilterType