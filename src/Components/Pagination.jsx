import { useState } from "react";

const Pagination = (props) => {
  const [arra, setArra] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  let count = 10;
  const sendPage = (e) => {
    if (e.target.value == count) {
      for (var i = 0; i <= 10; i++) {
        arra = setArra(arra[i] + 10);
      }
      count = count + 10;
    }
    console.log(e.target.value);
    // props.PageNO(e.target.value);
  };
  const renderPageNo = () => {
    return arra.map((val, idx) => {
      return (
        <li class="page-item">
          <button onClick={sendPage} value={val} class="page-link">
            {val}
          </button>
        </li>
      );
    });
  };
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          {renderPageNo()}
          <li class="page-item">
            <a class="page-link" href="#">
              Last
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Pagination;
