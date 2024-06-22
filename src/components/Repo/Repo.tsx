import { IRepo } from "../../typings";

interface IRepoProps {
  repo: IRepo;
}

const Repo = ({ repo }: IRepoProps) => {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black block bg-opacity-5 p-4 rounded-lg w-full hover:bg-opacity-10 active:bg-opacity-15 flex flex-col gap-2"
    >
      <div>
        <span className="font-semibold">Repository:</span> {repo.name}
      </div>
      <div>
        <span className="font-semibold">Description:</span>{" "}
        {repo.description ? repo.description : "No description provided"}
      </div>
      <div>
        <span className="font-semibold">Language:</span>{" "}
        {repo.language ? repo.language : "No language information"}
      </div>
      <div>
        <span className="font-semibold">Stars:</span> {repo.stargazers_count}
      </div>
    </a>
  );
};

export default Repo;
