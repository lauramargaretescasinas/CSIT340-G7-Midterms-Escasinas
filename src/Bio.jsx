function Bio({name, user, desc}) {
    return (
        <header>
            <h2 className="text-6xl font-bold">{name}</h2>
            <p className="mt-1 text-2xl text-[#FA8112]">
              {user}
            </p>
            <p className="mt-3 text-2xl">{desc}</p>
        </header>
    )
}

export default Bio;