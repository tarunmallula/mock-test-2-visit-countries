import './index.css'

const CountryItem = props => {
  const {country, onChangeStatus} = props
  const changeStatus = () => {
    onChangeStatus(country.id)
  }
  return (
    <li className="item">
      <div className="list-item">
        <p className="name">{country.name}</p>
        {country.isVisited ? (
          <p className="name2">Visited</p>
        ) : (
          <button type="button" className="button" onClick={changeStatus}>
            Visit
          </button>
        )}
      </div>
    </li>
  )
}

export default CountryItem
