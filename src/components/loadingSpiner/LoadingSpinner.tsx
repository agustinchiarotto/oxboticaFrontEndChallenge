import Loader from 'react-loader-spinner';

const LoadingSpinner = () => {
  return (
    <>
      <h1>Loading...</h1>
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </>
  );
};

export default LoadingSpinner;
