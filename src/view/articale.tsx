import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { IRootState } from '../reducers';
import { fetchArticale } from '../action/articale';
import Loading from '../asset/components/loading';
import { useSelector, useDispatch } from 'react-redux';
import Paginator from '../asset/components/paginator';
import { useHistory } from 'react-router-dom';

export interface ICurrentPage {
  start: number;
  end: number;
  current: number;
}

enum KEY_PRESS {
  ENTER = 'Enter',
}

const Articale = () => {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState<ICurrentPage>({ start: 0, end: 10, current: 0 });
  const valueTitle = useRef(null);
  const valueContent = useRef(null);
  const dispatch = useDispatch();
  const articale = useSelector((state: IRootState) => state.articale);
  useEffect(() => {
    dispatch(fetchArticale());
  }, [dispatch]);

  const sortItem = (event: ChangeEvent<HTMLSelectElement>) => {
    const data = {
      sortBy: event.target.value,
    };
    dispatch(fetchArticale(data));
  };

  const searchParams = (e: string) => {
    if (e === KEY_PRESS.ENTER) {
      const data = {
        title: (valueTitle.current! as HTMLInputElement).value,
        content: (valueContent.current! as HTMLInputElement).value,
      };
      dispatch(fetchArticale(data));
    }
  };
  return (
    <div className="bg-white">
      <Loading loading={articale.loading} />
      <div className="d-flex">
        <div className="d-flex p-3">
          <label className="mr-1">sortBy:</label>
          <select className="text-center" onChange={event => sortItem(event)}>
            {['id', 'content', 'createdAt', 'title'].map(item => {
              return (
                <option value={item === 'id' ? '' : item} key={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="d-flex p-3">
          <label className="mr-1">Title</label>
          <input ref={valueTitle} onKeyPress={e => searchParams(e.key)} />
        </div>
        <div className="d-flex p-3">
          <label className="mr-1">Content</label>
          <input ref={valueContent} onKeyPress={e => searchParams(e.key)} />
        </div>
        <div className="d-flex align-self-center">
          <button onClick={() => searchParams(KEY_PRESS.ENTER)}>submit</button>
        </div>
      </div>
      <div className="d-flex align-items-center flex-column">
        {articale?.item?.slice(currentPage.start, currentPage.end)?.map((item, idx) => {
          return (
            <div
              className="media d-flex shadow-lg p-3 mb-3 bg-white rounded"
              key={item.id && item.id + idx}
              style={{ cursor: 'pointer', width: '98%' }}
              onClick={() => history.push(`articale/${item.id}`)}
            >
              <label className="d-flex align-self-center mr-1">{item.id}</label>
              <img width="70" src={item.image} alt={item.createdAt} />
              <div className="media-body" style={{ marginLeft: '1rem' }}>
                <h5 className="mt-0 mb-1">{item.title}</h5>
                <label>{item.content}</label>
                <label className="d-block">{item.createdAt}</label>
              </div>
            </div>
          );
        })}
      </div>
      <Paginator total={articale.item.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Articale;
