function SearchBar({ text, check }) {
  const [filterText, setFilterText] = text;
  const [isStockOnly, setIsStockOnly] = check;

  const handleInStockChange = (e) => {
    setIsStockOnly(!isStockOnly);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <p>
        <input
          type="checkbox"
          // value={isStockOnly}
          onChange={handleInStockChange} // 체크->true값됨/ 다시 클릭시-> state 상태변함 ->다시 렌더링
        />{" "}
        Only show products in stock
      </p>
    </form>
  );
}

export default SearchBar;
