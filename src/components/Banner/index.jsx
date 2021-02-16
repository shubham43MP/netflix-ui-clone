import React, { useState, useEffect } from "react"
import "./Banner.css"
import instance from "../../API/axios_instance"
import fetch_requests from "../../API/request_urls"

const Banner = () => {
  const [banner, setBanner] = useState([])
  useEffect(() => {
    const fetchBanner = async () => {
      const response = await instance.get(fetch_requests.netflixOriginalsTV)
      setBanner(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ]
      )
      return response
    }
    fetchBanner()
  }, [])

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str
  }
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${process.env.REACT_APP_IMAGEURL}${banner?.backdrop_path})`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {banner?.name || banner?.title || banner?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(banner?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner
