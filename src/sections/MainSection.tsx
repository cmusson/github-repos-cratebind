import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Input, RepoList } from "../components";
import { IRepo } from "../typings";

const MainSection = () => {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState<IRepo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRepos = async (username: string) => {
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!res.ok) {
        setError("invalid request");
      }
      const data = (await res.json()) as IRepo[];
      const repositories = data
        .filter((repo) => !repo.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count);
      setRepos(() => repositories);
      setError("");
    } catch (error) {
      setRepos([]);
      setError("User not found !");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetchRepos(username);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <section className="p-2 flex flex-col items-center gap-2 pt-16">
      <form
        className="flex gap-2 flex-col sm:flex-row"
        name={"fetchRepos"}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Input
          onChange={(e) => {
            handleChange(e);
          }}
          value={username}
        />
        <Button>FETCH REPOSITORIES</Button>
      </form>

      <div className="text-xs">
        Enter a username to fetch the users repos in order of stars
      </div>

      <RepoList repos={repos} loading={loading} />
      {error.length ? (
        <div className="bg-red-100 text-red-700 p-2 rounded-lg">{error}</div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default MainSection;
