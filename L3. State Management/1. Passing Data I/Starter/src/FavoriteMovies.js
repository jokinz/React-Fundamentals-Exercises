import React from "react";

export default function FavoriteMovies(props) {
    return(
        <ul>
            {props.profiles.map((profile) =>{
                const userName = props.users[profile.userID].name
                const favoriteMovieName = props.movies[profile.favoriteMovieID].name
                return (
                <li>{`${userName}'s favorite movie is "${favoriteMovieName}"`}</li>
                )
            })}
        </ul>
    )
}