import React, { useEffect, useState } from 'react';
import AllLeagues from '../AllLeagues/AllLeagues';


const Home = () => {
    const [allLeagues, setAllLeagues] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(url)
        .then(res => res.json())
        .then(data => setAllLeagues(data.leagues))
    }, [])
    return (
        <div>
            <p className='text-success'>There are {allLeagues.length} leagues</p>
            {
                allLeagues.map(allLeague => <AllLeagues allLeague={allLeague}></AllLeagues>)
            }
        </div>
    );
};

export default Home;