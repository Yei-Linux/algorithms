type SidebarItem = {
  text: string;
};

const SidebarItem = ({ text }: SidebarItem) => (
  <li className="py-2 cursor-pointer">
    <h3 className="flex gap-3">
      <span>✏️</span> {text}
    </h3>
  </li>
);

const items = [
  {
    text: 'Discover',
  },
  { text: 'Search' },
  { text: 'Favorites' },
];

export const Sidebar = () => {
  return (
    <aside className="flex flex-col items-center gap-10 grid-aside bg-primary py-10 px-10 text-white">
      <div className="flex flex-col items-center gap-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
          alt="profile_image"
          width={100}
        />
        <p>Bob Smith</p>
      </div>

      <ul className="flex flex-col gap-3 w-full">
        {items.map((item) => (
          <SidebarItem key={item.text} {...item} />
        ))}
      </ul>
    </aside>
  );
};
