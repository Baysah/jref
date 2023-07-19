'use client';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const GithubRepoProfile = () => {
  const myGithubRepoProfile = 'https://api.github.com/repos/Baysah/jref';
  const { data, error, isLoading } = useSWR(myGithubRepoProfile, fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className='container py-10'>
      <h1 className='text-5xl font-bold tracking-tight text-slate-600 sm:text-[4rem]'>{data.name}</h1>
      <p>{data.description}</p>
      <strong>Views:{data.subscribers_count}</strong>{' '}
      <strong>Stars: {data.stargazers_count}</strong>{' '}
      <strong>Forks: {data.forks_count}</strong>
    </div>
  );
};

export default GithubRepoProfile;
