import Onboard from 'bnc-onboard'
import Web3 from 'web3'
import { useEffect } from 'react'

import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

import Account from '../Account/Account'
import Graph from '../Graph/Graph'
import Swap from '../Swap/Swap'

import './Dashboard.css'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const Dashboard = () => {

  return (
    <div className='dashboard-wrapper'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={4}>
            <Account />
          </Grid>
          <Grid item xs={5}>
            <Graph />
          </Grid>
          <Grid item>
            <Swap />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Dashboard
