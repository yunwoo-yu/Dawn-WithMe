import { Link } from 'react-router-dom';
import Img from '../../atoms/Img/Img';
import FeedContWrapper from './styled';

const FeedCont = ({ children, src, data }) => {
  return (
    <FeedContWrapper>
      <Link to={`/feeddetail/${data.id}`}>
        <p>{children}</p>
        {data.image &&
          src.map((item) => (
            <Img
              key={item}
              src={item}
              alt='게시판 사진'
              width='100%'
              className='feedImg'
            />
          ))}
      </Link>
    </FeedContWrapper>
  );
};

export default FeedCont;
