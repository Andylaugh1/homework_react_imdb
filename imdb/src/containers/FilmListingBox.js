import React from 'react';
import FilmList from '../components/FilmList.js'


class FilmListingBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [{
        title: "Sausage Party",
        showtime1: "15.30",
        showtime2: "17.00",
        showtime3: "19.45"
      },
      {
        title: "Cafe Society",
        showtime1: "15.30",
        showtime2: "17.00",
        showtime3: "19.45"
      },
      {
        title: "Morgan",
        showtime1: "15.30",
        showtime2: "17.00",
        showtime3: "19.45"
      },
      {
        title: "The 9th Life of Louis Drax",
        showtime1: "15.30",
        showtime2: "17.00",
        showtime3: "19.45"
      },
      {
        title: "Naam Hai Akira",
        showtime1: "15.30",
        showtime2: "17.00",
        showtime3: "19.45"
      }]
    }
  }

  render() {
    return (
      <div>
        <h2>UK Opening This Week</h2>
        <FilmList data={this.state.data} />
        <button onClick={this.state.data}>Showtimes</button>
      </div>
    )
  }
}

export default FilmListingBox;
