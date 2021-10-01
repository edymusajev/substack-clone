import ListItem from './listItem';

const List = () => {
  return (
    <div>
      <div className="px-4 mb-2">
        <ul className="flex border-b pb-2 text-gray-500">
          <li className="mr-4 border-b border-blue-500 mb-0 text-blue-500 font-semibold text-sm">
            New
          </li>
          <li className="mr-4">Top</li>
          <li className="mr-4">Community</li>
          <li className="mr-4 hidden sm:inline-block">What is Astral Codex Ten?</li>
          <li className="mr-4">Search</li>
        </ul>
      </div>

      <ul>
        <ListItem title="Whither Tartaria?" date={'Feb 18'} />
        <ListItem title="Whither Tartaria?" date={'Feb 18'} />
        <ListItem title="Whither Tartaria?" date={'Feb 18'} />
        <ListItem title="Whither Tartaria?" date={'Feb 18'} />
      </ul>
    </div>
  );
};

export default List;
