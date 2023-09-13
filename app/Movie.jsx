import Link from "next/link"
import Image from "next/image"

export default function Movie({ title, id,  release_date, poster_path}) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h1 className="text-white py-3 font-semibold">{title}</h1>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          width={800}
          height={800}
          alt={title}
          priority
        />
      </Link>
      <h2 className="text-white py-1">{release_date}</h2>
    </div>
  )
}