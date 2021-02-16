import React, { useEffect, useState } from "react"
import instance from "../../API/axios_instance"
import "./Row.css"
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"

const Row = ({ title, fetchURL, largeRow }) => {
  const [content, setContent] = useState([])
  const [trailerURL, setTrailerURL] = useState("")
  useEffect(() => {
    const fetchContent = async () => {
      const response = await instance.get(fetchURL)
      setContent(response.data.results)
      return response
    }
    fetchContent()
  }, [fetchURL])

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }

  const handleClick = (content) => {
    if (trailerURL) setTrailerURL("")
    else {
      movieTrailer(content?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerURL(urlParams.get("v"))
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">
        {content.map((element) => (
          <img
            onClick={() => handleClick(element)}
            className={`poster ${largeRow ? "poster_large" : ""}`}
            key={element?.id}
            src={process.env.REACT_APP_IMAGEURL + element?.poster_path}
            alt={element?.name}
          />
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  )
}

export default Row
