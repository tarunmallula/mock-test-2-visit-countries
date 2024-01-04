import './index.css'

const VisitedItem = props => {
  const {country, onChangeStatus} = props
  const onChangeBoolean = () => {
    onChangeStatus(country.id)
  }
  return (
    <li className="list-element">
      <img className="image" src={country.imageUrl} alt="thumbnail" />
      <div className="country-and-delete">
        <p className="visited-country">{country.name}</p>
        <button
          type="button"
          className="delete-button"
          onClick={onChangeBoolean}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedItem
