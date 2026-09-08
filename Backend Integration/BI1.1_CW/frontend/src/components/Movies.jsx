import useFetch from "../useFetch";

const Movies = () => {
    const { data, loading, error } = useFetch("https://frontend-jet-nine-90.vercel.app/movies")
    
    console.log(data);

    return (
        <div>
            <ul>
                {data?.map((movie) => (
                    <li>{movie.title}</li>
               
                ))}
            </ul>
        </div>
    );
};

export default Movies;
