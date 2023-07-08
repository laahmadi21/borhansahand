import _ from "lodash";

const Pagination = ({ pages, setPage, activePage }) => {
  const prevePage = () => {
    setPage((oldPAge) => {
      let prevePAge = oldPAge - 1;
      if(prevePAge < 1){
        prevePAge = pages
      }

      return prevePAge
    });
  };

  const nextPage = () => {
    setPage((oldPAge) => {
      let nextPage = oldPAge + 1;
      if(nextPage > pages){
        nextPage = 1
      }

      return nextPage
    });
  };

  return (
    <nav>
      <ul className="pagination d-flex justify-content-center mt-5" dir="rtl">
        <li className="page-item" onClick={prevePage}>
          <a href="#" className="page-link">
            قبلی
          </a>
        </li>
        {_.times(pages, (index) => {
          return (
            <li
              key={`pagination-` + index}
              className={`page-item ${
                index + 1 === activePage ? "active" : ""
              }`}
              onClick={() => setPage(index + 1)}
            >
              <a href="#" className="page-link">
                {index + 1}
              </a>
            </li>
          );
        })}

        <li className="page-item" onClick={nextPage}>
          <a href="#" className="page-link">
            بعدی
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
