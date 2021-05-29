import React from "react";
import { useState } from "react";

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, text, check }) {
  const [filterText, setFilterText] = text;
  const [isStockOnly, setIsStockOnly] = check;

  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.indexOf(filterText) === -1) {
      return;
    }
    if (isStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({ text, check}) {
  const [filterText, setFilterText] = text;
  const [isStockOnly, setIsStockOnly] = check;

  const handleInStockChange= (e)=>{
    setIsStockOnly(!(isStockOnly))
  
  }
 
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e)=>setFilterText(e.target.value)}
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
