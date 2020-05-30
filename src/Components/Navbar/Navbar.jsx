import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  appbarStyles: {
    flex: 1
  },
  toolStyles: {
    color: `white`,
    backgroundColor: `#60ddc2`
  }
}))

const Navbar = () => {
  let user = ['Chris', ' Hemsworth']
  const classes = useStyles()
  return (
    <AppBar position="absolute">
      <Toolbar className={classes.toolStyles}>
        <Typography className={classes.appbarStyles}>
          Momentium-UI Clock
        </Typography>
        <Typography> {user} &nbsp;</Typography>
        <AcUnitRoundedIcon />
      </Toolbar>
    </AppBar>
  )
}
export default Navbar
