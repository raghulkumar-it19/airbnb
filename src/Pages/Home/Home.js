import React from 'react'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import "./Home.css"

const Home = () => {
  return (
    <div className="home">
      <Banner/>
      <div className="home__section">
        <Card
        src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=480"
        title="Online Experience"
        desc="Unique activities to do from home with Broadway casts and crews"
        />
        <Card
        src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=480"
        title="Unique stays"
        desc="Spaces that are more than just a place to sleep"
        />
        <Card
        src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=480"
        title="Entire homes"
        desc="Comfortable private places, with room for friends or family"
        />
      </div>
      <div className="home__section2">
        <Card
          src="https://a0.muscache.com/im/pictures/fa91c6d9-c37e-4bb3-bdc1-0edb3044adb4.jpg"
          title="Gashes Fluss Haus"
          desc="Walk back past tall trees, over a small wooden bridge with built-in love seats. Massage tired feet on a polished river-rock shower floor. This rustic 2-story cottage, has whitewashed stone walls and a wood-burning stove."
          price="₹5,563/ night"
        />
        <Card
          /* src="https://a0.muscache.com/im/pictures/74a8c300-941d-4c15-887d-8ed1bd8c9b80.jpg?im_w=720" */
          src="https://a0.muscache.com/im/pictures/fa91c6d9-c37e-4bb3-bdc1-0edb3044adb4.jpg"
          title="Underground Home with a View"
          desc="Unique modern tiny 'hobbit house' located on bucolic 9 acre farm in the mountains of Western North Carolina."
          price="₹6,463/ night"
        />
        <Card
         src="https://a0.muscache.com/im/pictures/miso/Hosting-11283225/original/df06d2de-2adf-4f37-b9a4-4929477f3ef1.jpeg?im_w=720"
          title="Airstream On The River"
          desc="Located within walking distance to Carrier Park, Asheville food park, and the climbing gym. You will be in the middle of it all! West Asheville, the River Arts District, and less than 5 miles from downtown."
          price="₹15,264/ night"
        />
      </div>
    </div>
  )
}

export default Home