import React from "react"
import Row from "../Row"
import fetch_requests from "../../API/request_urls"

const Movies = () => {
  return (
    <div className="content">
      <Row
        title="Netflix Originals"
        fetchURL={fetch_requests.netflixOriginalsTV}
        largeRow
      />
      <Row
        title="Trending Today in India"
        fetchURL={fetch_requests.trendingIndia}
      />
      <Row
        title="Popular on Netflix"
        fetchURL={fetch_requests.popularOnNetflix}
      />
      <Row title="Top Rated" fetchURL={fetch_requests.topRated} />
      <Row
        title="Indian Movies"
        fetchURL={fetch_requests.netflixOriginalsMovie}
      />
      <Row title="Action Movies" fetchURL={fetch_requests.actionMovies} />
      <Row title="Comedy Movies" fetchURL={fetch_requests.comedyMovies} />
      <Row title="Horror Movies" fetchURL={fetch_requests.horrorMovies} />
      <Row title="Romance Movies" fetchURL={fetch_requests.romanceMovies} />
      <Row title="Science Fiction" fetchURL={fetch_requests.scienceFiction} />
    </div>
  )
}

export default Movies
