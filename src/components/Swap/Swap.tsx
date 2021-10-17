import { useState } from 'react'
import {
  ChainId,
  Token,
  WETH,
  Fetcher,
  Route,
  Trade,
  TokenAmount,
  TradeType,
} from '@uniswap/sdk'

import './Swap.css'

const Swap = () => {
  const [midPrice, setMidPrice] = useState('')
  const [invertedMidPrice, setInvertedMidPrice] = useState('')
  const [executionPrice, setExecutionPrice] = useState('')
  const [nextMidPrice, setNextMidPrice] = useState('')

  const DAI = new Token(
    ChainId.MAINNET,
    '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    18,
  )

  const fetchData = async () => {
    // note that you may want/need to handle this async code differently,
    // for example if top-level await is not an option
    const pair = await Fetcher.fetchPairData(DAI, WETH[DAI.chainId])

    const route = new Route([pair], WETH[DAI.chainId])

    const trade = new Trade(
      route,
      new TokenAmount(WETH[DAI.chainId], '1000000000000000000'),
      TradeType.EXACT_INPUT,
    )

    setExecutionPrice(trade.executionPrice.toSignificant(6))
    setNextMidPrice(trade.nextMidPrice.toSignificant(6))
    setMidPrice(route.midPrice.toSignificant(6)) // 201.306
    setInvertedMidPrice(route.midPrice.invert().toSignificant(6)) // 0.00496756
  }

  const handleSwapDAI = async ()=>{
    
  }

  fetchData()

  return (
    <div className='swap-wrapper'>
      <div className='row'>0.0001 ETH</div>
      <div className='row'>Swap To DAI</div>
      <div className='row'>
        <ul>
          <li>Mid. Price {midPrice}</li>
          <li>Inverted Mid. Price {invertedMidPrice}</li>
          <li>Execution Price {executionPrice}</li>
          <li>Next Mid. Price {nextMidPrice}</li>
        </ul>
      </div>
      <div className='row'>
        <span>Note: Slippage @0.5% Gas @100 Gwei</span>
      </div>
    </div>
  )
}

export default Swap
