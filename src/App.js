import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [isStockOnly, setIsStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        text={[filterText, setFilterText]}
        check={[isStockOnly, setIsStockOnly]}
      />
      <ProductTable
        products={products}
        text={[filterText, setFilterText]}
        check={[isStockOnly, setIsStockOnly]}
      />
    </div>
  );
}

export default FilterableProductTable;
