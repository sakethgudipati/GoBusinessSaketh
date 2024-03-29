import './index.css'

const EntryTable = props => {
  const {entryInfo} = props
  const {name, serviceName, date, profit} = entryInfo

  return (
    <li className="entry-item">
      <p className="entry-data-para">{name}</p>
      <p className="entry-data-para">{serviceName}</p>
      <p className="entry-data-para">{date}</p>
      <p className="entry-data-para">{profit}</p>
    </li>
  )
}

export default EntryTable
