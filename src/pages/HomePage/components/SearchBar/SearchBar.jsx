function SearchBar({ onChange }) {
    return(
        <input type="search" className="searchbar" data-testid="SearchBar" placeholder="Search"
        onChange={onChange}
        />
    )
}

export default SearchBar;