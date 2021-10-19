import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IRootState } from '../reducers';
import Loading from '../asset/components/loading';
import { detailArticale, refreshItem } from '../action/articale';
import { useParams } from 'react-router';

const DetailArticale = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { articale, loading } = useSelector((state: IRootState) => state.articale);
  useEffect(() => {
    dispatch(detailArticale(parseInt(id)));
  }, [dispatch, id]);

  useEffect(
    () => () => {
      dispatch(refreshItem());
    },
    [dispatch]
  );
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center mt-3">
      <Loading loading={loading} />
      <h1>{articale.title}</h1>
      <img src={articale.image} alt="img" />
      <label>{articale.content}</label>
      <label>created at: {articale.createdAt}</label>
    </div>
  );
};

export default DetailArticale;
