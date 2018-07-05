import React from 'react';

const Paginator = (props) => {
  const { prev_page, next_page, handlePageChange } = props;
  const prev = [];
  const next = [];

  if (prev_page) {
    prev.push(
      <li style={{marginLeft: 20}} key={prev_page} className="page-item">
        <button className="page-link" 
          onClick={(event) => { handlePageChange(event, prev_page); }}>
          Prev
        </button>
      </li>
    );
  } else {
    prev.push(
      <li key={null} style={{marginLeft: 20}} className="page-item disabled">
        <button className="page-link">Prev</button>
      </li>
    );
  }

  if (next_page) {
    next.push(
      <li key={next_page} className="page-item">
        <button className="page-link" 
          onClick={(event) => { handlePageChange(event, next_page); }}>
          Next
        </button>
      </li>
    );
  } else {
    next.push(
      <li key={null} className="page-item disabled">
        <button className="page-link">Next</button>
      </li>
    );
  }

  return (
    <div>
      <ul className="pagination">
        {prev}&nbsp;{next}
      </ul>
    </div>
  );
};

export default Paginator;
