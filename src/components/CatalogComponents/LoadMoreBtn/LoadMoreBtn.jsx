import { LoadMoreButton } from './LoadMoreBtn.styled';

const LoadMoreBtn = ({ loadMore }) => {
  return <LoadMoreButton onClick={loadMore}>Load more</LoadMoreButton>;
};

export default LoadMoreBtn;
