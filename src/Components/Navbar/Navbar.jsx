import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}))

const Navbar = () => {
  const classes = useStyles()
  return (
    <AppBar position="absolute">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          Momentuim-UI Clock
        </Typography>
        <AcUnitRoundedIcon />
      </Toolbar>
    </AppBar>
  )
}
export default Navbar
