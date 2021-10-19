import { Dispatch, SetStateAction } from 'react';
import { ICurrentPage } from '../../view/articale';

interface PropsPanigator {
  total: number;
  currentPage: ICurrentPage;
  setCurrentPage: Dispatch<SetStateAction<ICurrentPage>>;
}

const Paginator = ({ total, currentPage, setCurrentPage }: PropsPanigator) => {
  const calcAllItemInPage = () => {
    return Math.floor(total / 10) + (total % 10 > 0 ? 1 : 0);
  };

  const numberPage = (): number[] => {
    return total > 0 ? Array.from(Array(calcAllItemInPage()).keys()) : [];
  };
  if (total < 1) {
    return <div></div>;
  }
  return (
    <nav className="d-flex justify-content-center">
      <ul className="pagination">
        <li
          onClick={() =>
            currentPage.current &&
            setCurrentPage({
              start: (currentPage.current - 1) * 10,
              end: (currentPage.current - 1) * 10 + 10,
              current: currentPage.current - 1,
            })
          }
          className={`page-item ${currentPage.current === 0 ? 'disabled' : ''}`}
        >
          <label className="page-link" aria-disabled="true">
            Previous
          </label>
        </li>
        {numberPage()?.map((item, idx) => {
          return (
            <li
              onClick={() => setCurrentPage({ start: item * 10, end: item * 10 + 10, current: item })}
              key={item + idx}
              className={`page-item ${currentPage.current === item ? 'active' : ''}`}
            >
              <label className="page-link">{item + 1}</label>
            </li>
          );
        })}
        <li
          onClick={() =>
            currentPage.current !== numberPage().length - 1 &&
            setCurrentPage({
              start: (currentPage.current + 1) * 10,
              end: (currentPage.current + 1) * 10 + 10,
              current: currentPage.current + 1,
            })
          }
          className={`page-item ${currentPage.current === numberPage().length - 1 ? 'disabled' : ''}`}
        >
          <label className="page-link" aria-disabled="true">
            Next
          </label>
        </li>
      </ul>
    </nav>
  );
};

export default Paginator;
