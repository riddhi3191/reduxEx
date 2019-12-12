import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

function Bio(props) {
    // const First_name = "Riddhi";
    // const Last_name = "Patel";
    // const Fav_Dev_Lang = "React";
    // const Year_started = "2015"

    return (
        <div className="card d-inline-block text-dark" >
            <div className="card-body">
            
                <h5 className="card-title">{props.developer.firstName} {props.developer.lastName}</h5>
                <p className="card-text">
                    <span className="bold">Favorite Dev Language:</span>{props.developer.favDevLang}
                </p>
                <p className="card-text">
                    <span className="bold">Year Started:</span>{props.developer.year_Started}
                </p>
            </div>
        </div>
    );
}

export default Bio;