import './Graph.css'

const Graph = () => {
  return (
    <div className='graph-wrapper'>
      <div className='row'>
        <div className='col'>
          <span>Pair Overview</span>
        </div>
        <div className='col'>
          <span>Daily Data</span>
        </div>
        <div className='col'>
          <span>Past Swaps</span>
        </div>
      </div>
      <div className='row'>
        <div className='sub-row'>
          <span>Trends</span>
        </div>
        <div className='sub-row'></div>
      </div>
    </div>
  )
}

export default Graph
