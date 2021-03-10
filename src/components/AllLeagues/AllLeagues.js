import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './AllLeagues.css';

const AllLeague = (props) => {
    const {strLeague, strSport, idLeague} = props.allLeague;
    
    const [leagues, setLeagues] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues[0]))
    }, [idLeague])

    const divStyle={
        width: '18rem'
    }
    const history = useHistory();
    const showLeagues = idLeague =>{
        const url = `league/${idLeague}`;
        history.push(url);
    }
    return (
        <div className="card-group leagueComponent">
                <div className="card" style={divStyle}>
                    <img className="card-img-top leaguePoster" src={leagues.strPoster} alt="League Poster"></img>
                    <div className="card-body">
                        <h5 className="card-title">{strLeague}</h5>
                        <p>Sport type: {strSport}</p>
                        <button className="btn btn-primary" onClick={() => showLeagues(idLeague)}>Details</button>
                    </div>
                </div>
        </div>
    );
};

export default AllLeague;