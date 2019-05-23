import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {

    years = [2016, 2017, 2018, 2019]

    render() {
        const { year, photos } = this.props
        return (<div className="ib page">
            <p>
                {this.years.map(year => <button key={year} className={'btn'} onClick={this.props.setYear.bind(this, year)} > {year} </button>)}
            </p>
            <h3>{year} год</h3>
            <p>У тебя {photos.length} фото.</p>
            <p>
                У тебя {photos.length}
                фото за {year}
                год
            </p>
        </div>
        )
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
}