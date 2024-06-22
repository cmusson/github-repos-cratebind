import { IRepo } from "../../typings";
import { Repo } from "../Repo";

interface IRepoProps {
  repos: IRepo[];
  loading: boolean;
}

const RepoList = ({ repos, loading }: IRepoProps) => {
  return (
    <div className="w-full p-4 flex flex-col items-center max-w-6xl">
      <h2 className="text-black mt-0 mb-4 font-forma-djr-display font-semibold text-4xl leading-130">
        {loading ? "Fetching Repositories..." : "Repositories"}
      </h2>
      <ul className="flex flex-col gap-4 w-full">
        {repos.map((repo, idx) => (
          <li className="w-full" key={idx}>
            <Repo repo={repo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
