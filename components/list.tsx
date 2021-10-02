import { AllPostsData } from '../interfaces';
import ListItem from './listItem';

const List = ({ allPostsData }: { allPostsData: AllPostsData[] }) => {
  const renderList = () => {
    return allPostsData.map((post) => (
      <ListItem key={post.id} title={post.title} date={post.date} id={post.id} />
    ));
  };
  return (
    <div>
      <div className="mb-2">
        <ul className="flex border-b pb-2 text-gray-500 mx-4 ">
          <li className="mr-4 border-b border-blue-500 mb-0 text-blue-500 font-semibold text-sm">
            New
          </li>
          <li className="mr-4">Top</li>
          <li className="mr-4">Community</li>
          <li className="mr-4 hidden sm:inline-block">What is Astral Codex Ten?</li>
          <li className="mr-4">Search</li>
        </ul>
      </div>

      <ul className="">
        {renderList()}
        {/* <ListItem title="Whither Tartaria?" date={'Feb 18'} />
        <ListItem title="Whither Tartaria?" date={'Feb 18'} />
        <ListItem title="Whither Tartaria?" date={'Feb 18'} />
        <ListItem title="Whither Tartaria?" date={'Feb 18'} /> */}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {};

export default List;
