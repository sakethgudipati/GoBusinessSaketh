import Navbar from '../Navbar/index'
import SearchBar from '../SearchBar/index'
import CardsItem from '../CardsItem/index'
import ReferralInfo from '../ReferralInfo/index'
import ReferralForm from '../ReferralForm/index'
import EntryTable from '../EntryTable/index'
import Footer from '../Footer/index'
import './index.css'

const cardsList = [
  {
    id: 0,
    imgUrl:
      'https://res.cloudinary.com/defacaof3/image/upload/v1711697429/48cf1bd48fa2c88ab68fa747c1be05c9_kj75da.png',
    value: '$9,568.00',
    displayText: 'Total Balance',
  },
  {
    id: 1,
    imgUrl:
      'https://res.cloudinary.com/defacaof3/image/upload/v1711697575/fbe0f928f9ec5fd36a975cc9cfaa212c_ozxbhz.png',
    value: '60%',
    displayText: 'Discount Percentage',
  },
  {
    id: 2,
    imgUrl:
      'https://res.cloudinary.com/defacaof3/image/upload/v1711697604/85df99690d913ca638c8768b9eff5616_ys9xd0.png',
    value: '300',
    displayText: 'Total Referral',
  },
  {
    id: 3,
    imgUrl:
      'https://res.cloudinary.com/defacaof3/image/upload/v1711697714/01ba36d7f6cc61a4a434693b0521fcbf_ccqxkg.png',
    value: '$300',
    displayText: 'Discount Amount',
  },
  {
    id: 4,
    imgUrl:
      'https://res.cloudinary.com/defacaof3/image/upload/v1711697735/3d9b87ae0c22a4aed2fb1be4e047eaef_nfhfkq.png',
    value: '$465.00',
    displayText: 'Commision Amount',
  },
  {
    id: 5,
    imgUrl:
      'https://res.cloudinary.com/defacaof3/image/upload/v1711697864/adfd2d5583bdeea46241711cec1f847d_achioa.png',
    value: '$158.00',
    displayText: 'Total Earning',
  },
  {
    id: 6,
    imgUrl:
      'https://res.cloudinary.com/defacaof3/image/upload/v1711697975/01463f25a8ada594ceaa0f6266ba8097_f99jl6.png',
    value: '40%',
    displayText: 'Commision Discount',
  },
  {
    id: 7,
    imgUrl:
      'https://res.cloudinary.com/defacaof3/image/upload/v1711698016/26425d2810f6febcdff88ca6d9bf0d51_zy2oc2.png',
    value: '$534.00',
    displayText: 'Total Bank Balance',
  },
]

const entryData = [
  {
    id: 10,
    name: 'Pranjal',
    serviceName: 'PM',
    date: '2011/11/28',
    profit: '$162,700',
  },
  {
    id: 11,
    name: 'Paritosh',
    serviceName: 'PM',
    date: '2007/10/09',
    profit: '$1,200,000',
  },
  {
    id: 12,
    name: 'Palav',
    serviceName: 'B2b',
    date: '2009/01/12',
    profit: '$86,000',
  },
  {
    id: 13,
    name: 'Moumitha',
    serviceName: 'HR',
    date: '2012/10/13',
    profit: '$132,000',
  },
  {
    id: 14,
    name: 'Mitesh',
    serviceName: 'Graphics',
    date: '2011/06/07',
    profit: '$206,850',
  },
  {
    id: 15,
    name: 'Srinivas',
    serviceName: 'Frontend',
    date: '2012/12/02',
    profit: '$372,000',
  },
  {
    id: 16,
    name: 'Hrithik',
    serviceName: 'Graphics',
    date: '2011/05/03',
    profit: '$163,500',
  },
  {
    id: 17,
    name: 'abc',
    serviceName: 'HR',
    date: '2012/12/02',
    profit: '$106,450',
  },
  {
    id: 18,
    name: 'xyz',
    serviceName: 'B2b',
    date: '2011/12/06',
    profit: '$145,600',
  },
  {
    id: 19,
    name: 'bcd',
    serviceName: 'B2b',
    date: '2012/03/29',
    profit: '$433,060',
  },
]

const MainDashboard = () => (
  <>
    <Navbar />
    <div className="main-dashboard">
      <SearchBar />
      <ul className="cards-list">
        {cardsList.map(eachCard => (
          <CardsItem key={eachCard.id} cardInfo={eachCard} />
        ))}
      </ul>
      <ReferralInfo />
      <div>
        <h1 className="refer-head">Refer Friends And Earn More !!</h1>
        <hr className="line" />
      </div>
      <ReferralForm />
      <div className="search-entries-container">
        <p className="entry-para">
          Show <span className="entry-span">10</span> Entries
        </p>
        <p className="entry-search-para">
          Search:{' '}
          <span>
            <input type="search" className="entry-search-input" />
          </span>
        </p>
      </div>
      <ul className="heading-list">
        <li className="heading-para">Name</li>
        <li className="heading-para">Service Name</li>
        <li className="heading-para">Date</li>
        <li className="heading-para">Profit</li>
      </ul>
      <ul className="entry-list">
        {entryData.map(eachData => (
          <EntryTable key={eachData.id} entryInfo={eachData} />
        ))}
      </ul>
      <div className="entry-bottom">
        <p className="entry-count-para">Showing 1 to 10 of 57 entries</p>
        <div className="entry-slots">
          <p className="entry">Previous</p>
          <p className="entry">1</p>
          <p className="entry">2</p>
          <p className="entry">3</p>
          <p className="entry">4</p>
          <p className="entry">5</p>
          <p className="entry">6</p>
          <p className="entry">Next</p>
        </div>
      </div>
    </div>
    <Footer />
  </>
)

export default MainDashboard
