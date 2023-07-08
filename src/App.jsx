import { useEffect, useState } from "react";
import useAxios from "./useAxios";
import usePaginatedFetch from "./usePaginatedFetch";
import Card from "./components/card";
import Pagination from "./components/pagination";
const url =
  "https://react-mini-projects-api.classbon.com/Programmer/programmers";
function App() {
  const [data, loading] = usePaginatedFetch(url, 3);
  const [page, setPage] = useState(1);
  const [dataProgrammer, setDataProgrammer] = useState([]);

  useEffect(() => {
    if (loading) return;
    setDataProgrammer(data[page - 1]);
  }, [loading, page]);

  return (
    <div className="container pt-5">
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border"></div>
        </div>
      )}
      {!loading && (
        <>
          <div className="row d-flex justify-content-center">
            {dataProgrammer.map(({ id, ...programmer }) => {
              return (
                <div key={id} className="col-3">
                  <Card {...programmer} />
                </div>
              );
            })}
          </div>
          <div className="row"><Pagination pages={dataProgrammer.length} setPage={setPage} activePage={page} /></div>
        </>
      )}
    </div>
  );
}

export default App;
