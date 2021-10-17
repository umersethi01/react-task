import Onboard from 'bnc-onboard'
import Web3 from 'web3'
import { useEffect, useState } from 'react'

import './Account.css'

import EthLogo from '../../static/image/Ethereum-Logo.svg'
import DAILogo from '../../static/image/DAI-Logo.svg'

const Account = () => {
  const [userStateDataAddress, setUserStateDataAddress] = useState('')

  let web3
  const onboard = Onboard({
    dappId: '3478d739-3b7a-4ebb-b6a6-c94cf8e0691b',
    networkId: 4,
    subscriptions: {
      wallet: (wallet: any) => {
        web3 = new Web3(wallet.provider)
      },
    },
  })

  const handleWallet = async () => {
    const walletSelected = await onboard.walletSelect()
    if (walletSelected) {
      await onboard.walletCheck()
      await setUserStateDataAddress(onboard.getState().address)
      localStorage.setItem('address', userStateDataAddress)
    } else {
      handleWallet()
    }
  }

  useEffect(() => {
    handleWallet()
  }, [])

  return (
    <div className='account-wrapper'>
      <div className='col'>
        <div className='sub-col'>Account Card</div>
        <div className='sub-col'>More</div>
      </div>
      <div className='col'>
        <div className='sub-col'>
          <div className='address-heading'>
            <span>Address</span>
          </div>
          <div className='address'>
            <span>{userStateDataAddress}</span>
          </div>
        </div>
      </div>
      <div className='col'>
        <div className='sub-col'>
          <div className='icon'>
            <img src={EthLogo} alt='Ethereum-Logo' />
          </div>
          <div className='balance'>0.000, ETH</div>
        </div>
        <div className='sub-col'>
          <div className='dai-icon'>
            <img src={DAILogo} alt='DAI-Logo' width='25px' />
          </div>
          <div className='balance'>0.000, DAI</div>
        </div>
      </div>
    </div>
  )
}

export default Account
