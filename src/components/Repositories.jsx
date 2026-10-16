import RepoCard from "./RepoCard";

function Repositories() {
    return (
         <main className="grid grid-cols-3 gap-8 px-20 pt-8">
            <RepoCard name="portfolio" description="My personal page built with React." language="JavaScript" commits={48} />
            <RepoCard name="todo-api" description="A simple todo API built with Node.js and Express." language="JavaScript" commits={32} />
            <RepoCard name="blog" description="A blog built with Django and React." language="Python" commits={64} />
        </main>
    )
}

export default Repositories;