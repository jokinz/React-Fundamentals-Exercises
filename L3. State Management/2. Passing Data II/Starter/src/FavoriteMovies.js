import React from "react";

export default function FavoriteMovies(props) {
    let movieFavoriteCounters = []
    for(var key in props.movies){
        let favoriteCounter = 0
        let favoriteUsersList = []
        {props.profiles.map((profile) =>{
            if(profile.favoriteMovieID === props.movies[key].id.toString()){
                favoriteCounter++
                favoriteUsersList.push(props.users[profile.userID].name)
            }
        })}
        movieFavoriteCounters.push([props.movies[key].name, favoriteCounter, favoriteUsersList])
    }
    return(
        <ul>
            {movieFavoriteCounters.map ((item) =>{
                if(item[1] !== 0){
                    return(
                        <li>{`${item[0]} has been favorited by ${item[2]}`}</li>
                    )
                }else{
                    return(
                        <li>{`${item[0]} hasn't been favorited`}</li>
                    )
                }
            })}
        </ul>
    )
}