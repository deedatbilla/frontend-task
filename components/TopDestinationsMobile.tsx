import React from 'react'
import CircleStoryCard from './CircleStoryCard'
import DestinationCard from './DestinationCard'
import { places } from './PopularPlaces'
import { data } from './TopDestinations'

function TopDestinationsMobile() {
  return (
    <div className="top-destinations-mobile">
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        marginTop: "20px",
      }}
    >
     <h1 style={{ textAlign: "left", fontSize:"20px" }}>
       Top Destinations
      </h1>

      <div className="places">
        {places.map((item) => (
          <CircleStoryCard data={item} />
        ))}
      </div>
      <div className="popular-places-container-mobile">
        <div>
          <div className={"popular-places-mobile"}>
            {data.slice(0, 4).map((item, key) => (
              <DestinationCard key={key} data={item} />
            ))}
          </div>
        </div>

        <div>
          <img style={{ width: "100%" }} src="/how-it-works.png" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default TopDestinationsMobile