import React from 'react';

const MovieList = (props) => {

 /*   function handleClick(event){
        //console.log("Button Clicked");
        console.log(event.pageX)
    }*/

        return (
            <div className="row">

                {props.movies.map((movies,i) => (
                    <div className="col-lg-4" key={i}>
                        <div className="card mb-4 shadow-sm">
                            <img src={movies.imageURL} className="car-img-top" alt="sample movie" />
                            <div className="card-body">
                                <h5 className="car-title">{movies.name}</h5>
                                <p className="card-text">{movies.overview}</p>
                                <div className="d-flex justify-content-between align-items-center">

                                    <button type="button" onClick={(event) => props.deleteMovieProp(movies) }
                                     className="btn btn-md btn-outline-danger">Delete</button>
                                     
                                    <h2><span className="badge badge-info">{movies.rating}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>


                )
                )}


            </div>
        )
    
}

export default MovieList;
