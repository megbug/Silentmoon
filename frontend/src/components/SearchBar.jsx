const Searchbar = (props) => {
    const {searchTerm, setSearchTerm} = props;

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <input className="searchInput" type="text" value={searchTerm} onChange={handleSearch}/>
    );
};

export default Searchbar;

