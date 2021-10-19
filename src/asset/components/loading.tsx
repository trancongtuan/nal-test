import ReactLoading from 'react-loading';
interface PropsLoading {
  loading: boolean;
}

const Loading = ({ loading }: PropsLoading) => {
  if (!loading) {
    return <div></div>;
  }

  return (
    <div className="loading">
      <ReactLoading className="loading--icon" type={'bubbles'} color="#fff" />
    </div>
  );
};

export default Loading;
