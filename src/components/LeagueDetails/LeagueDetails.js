import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import manImage from '../../images/man.jpg';
import womanImage from '../../images/woman.jpg';
import './LeagueDetails.css';
const LeagueDetails = () => {
    const {idLeague} = useParams();
    
    const [leagueDetails, setLeagueDetails] = useState({});
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagueDetails(data.leagues[0]));
    }, [idLeague])

    let image;
    if(leagueDetails.strGender==="Male"){
        image = manImage;
    }
    else{
        image = womanImage;
    }
    return (
        <div>
            <img className="genderImage" src={image} alt=""/>
            <div>
            <img src={leagueDetails.strBadge} alt=""/>
                <h3 className="text-success">Country: {leagueDetails.strCountry}</h3>
                <p>{leagueDetails.strDescriptionEN}</p>
                <p>{leagueDetails.strDescriptionFR}</p>
            </div>
        </div>
    );
};

export default LeagueDetails;