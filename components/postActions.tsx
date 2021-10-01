import { AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai';
import { RiShareForwardLine } from 'react-icons/ri';

const PostActions = ({ date }: { date?: string }) => {
  return (
    <div className="text-gray-400 flex items-center">
      {date && <span className="text-sm mr-4">{date}</span>}
      <div className="mr-4 flex items-center text-sm">
        <AiOutlineHeart size="1.125rem" />
        <span className="ml-1">1232</span>
      </div>
      <div className="mr-4 flex items-center text-sm">
        <AiOutlineMessage size="1.125rem" />
        <span className="ml-1">1232</span>
      </div>
      <div className="mr-4 flex items-center text-sm">
        <RiShareForwardLine size="1.25rem" />
      </div>
    </div>
  );
};

export default PostActions;
