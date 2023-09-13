import Movie from "./Movie"

export async function generatedStaticParams(){
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  )
  const res = await data.json()
  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }))
}

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  )
  
  const res = await data.json()
  return (
    <main>
      <h1 className="text-4xl italic underline-decoration-2 text-red-600 text-center font-semibold align-middle">Popular Movies</h1>
      <div className="grid grid-cols-fluid gap-16 py-20 text-center shadow-lg p-10 rounded-xl my-10 bg-gradient-to-r from-red-500 text- to-red-300 flex-1">
        {res.results.map((movie) => (
          <Movie
            key= {movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  )
}