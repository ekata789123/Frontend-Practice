import "./PagignationComponent.css";
import { useEffect, useState } from "react";

export const Pagignation = () => {
  const LIMIT = 15;
  const [result, setResult] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1); 

  const totalPages = Math.max(1, Math.ceil(total / LIMIT));
  const pageList = Array.from({ length: totalPages }, (_, i) => i + 1);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  async function fetchData(currentPage) {
    const skip = (currentPage - 1) * LIMIT;
    const res = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}&select=title,price`
    );
    const json = await res.json();
    setResult(json.products || []);
    setTotal(json.total || 0);
  }

  return (
    <div className="pagignation-component">
        <div className="heading">
       <h2>Frontend Machine Coding</h2>
        <h3>Pagignation Component</h3>
       </div>
      <div className="pagignation-data">
        {result.map((item) => (
          <div key={item.id} className="pagignation-row">
            <span>{item.title}</span>
            <span>₹{item.price}</span>
          </div>
        ))}
      </div>

      <div className="pagination-buttons">
        <button
          className="page-btn"
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          Prev
        </button>

        {pageList.map((p) => (
          <button
            key={p}
            className={`page-btn ${page === p ? "active" : ""}`}
            onClick={() => setPage(p)} 
          >
            {p}
          </button>
        ))}

        <button
          className="page-btn"
          disabled={page === totalPages}
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        >
          Next
        </button>
      </div>
    </div>
  );
};
