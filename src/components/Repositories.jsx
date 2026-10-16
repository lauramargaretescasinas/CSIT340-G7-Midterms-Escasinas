import RepoCard from "./RepoCard";

function Repositories({handleStarPortfolio, handleStarTodo, handleStarDotfiles}) {
    return (
         <main className="grid grid-cols-3 gap-8 px-20 pt-8">
            <RepoCard name="Portfolio" description="My personal portfolio website." 
            language="HTML, CSS, JavaScript" commits={50} statefunction={handleStarPortfolio} statename="portfolio" />

            <RepoCard name="Todo API" description="A simple todo API built with Node.js and Express." 
            language="JavaScript" commits={32} statefunction={handleStarTodo} statename="todo" />
            
            <RepoCard name="Blog" description="A blog built with Django and React." 
            language="Python" commits={64} statefunction={handleStarDotfiles} statename="dotfiles" />
        </main>
    )
}

export default Repositories;


