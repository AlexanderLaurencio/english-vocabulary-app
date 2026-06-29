function SearchType({ onChange }) {
    return(
        <select className="search_type" data-testid="SearchType" onChange={onChange}>
            <option value="wordName">Word</option>
            <option value="wordMeaning">Meaning</option>
        </select>
    )
}

export default SearchType