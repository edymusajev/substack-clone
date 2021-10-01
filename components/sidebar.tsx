interface List {
  title: string;
  id: number;
  items: { title: string; link: string }[];
}

const placeholder: List = {
  title: 'Community',
  id: 0,
  items: [
    { title: 'Bulletin Board', link: '123' },
    { title: 'Discord Chat', link: '123' },
    { title: 'Bulletin Board', link: '123' },
    { title: 'Subreddit', link: '123' },
    { title: 'Podcast', link: '123' },
    { title: 'Online meetups', link: '123' },
  ],
};

type SidebarListProps = {
  list: List;
};

const SidebarList = ({ list }: SidebarListProps) => {
  const renderList = () => {
    return list.items.map((item) => {
      return (
        <li
          className="mb-2 hover:underline cursor-pointer text-gray-700"
          key={((Math.random() * 101024) / Math.random()) * 2314}
        >
          <a href="">{item.title}</a>
        </li>
      );
    });
  };
  return (
    <div className="mb-8">
      <h4 className="pb-2 border-b mb-2 border-blue-400 inline-block">{list.title}</h4>
      <ul>{renderList()}</ul>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div>
      <SidebarList list={placeholder} />
      <SidebarList list={placeholder} />
      {/* <div className="mb-8">
        <h4 className="pb-2 border-b mb-2 border-blue-400 inline-block">Blogroll</h4>
        <ul>
          <li className="mb-2 hover:underline cursor-pointer">Alexey Guzey</li>
          <li>Applied Divinity Studies</li>
          <li>Artir Kel</li>
          <li>Greg Cochan</li>
          <li>Jacob Falkovich</li>
          <li>Julia Galef</li>
          <li>Kelsey Piper</li>
          <li>Less Wrong</li>
          <li>Marginal Revolution</li>
          <li>Razib Khan</li>
          <li>Scott Aaronson</li>
          <li>Steve Hsu</li>
          <li>Zeynep Tufekci</li>
          <li>Zvi Mowshowitz</li>
          <li>Eli Dourado</li>
          <li>Peter McLuskey</li>
          <li>Tanner Greer</li>
          <li>Derek Lowe</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Sidebar;
