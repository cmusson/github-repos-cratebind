import { ScrollButton } from "../ScrollButton";

const Header = () => {
  return (
    <header className="fixed bg-black w-full flex items-center justify-between py-2 px-4">
      <ScrollButton>
        <img
          className="w-8"
          alt="cratebind logo"
          src="https://cdn.prod.website-files.com/6047f03cb0fc118b84025a8d/6049262b75e3c06a4ae17cb2_CrateBind%20Icon%20Logo.svg"
        />
      </ScrollButton>

      <h1 className="text-white tracking-tight font-forma-djr-display font-normal text-base bg-transparent px-4">{`Most Starred Github Repositories (without forks)`}</h1>
    </header>
  );
};

export default Header;
