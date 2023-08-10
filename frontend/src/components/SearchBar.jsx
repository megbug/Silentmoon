// import '../sass/SearchBar.scss'

const Searchbar = (props) => {
    const {searchTerm, setSearchTerm} = props;

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <input type="text" value={searchTerm} onChange={handleSearch} placeholder="looking for something?"/>
    );
};

export default Searchbar;

