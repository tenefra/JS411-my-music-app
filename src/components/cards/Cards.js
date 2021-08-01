import React from "react"

import "./cardStyles.css"

import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Switch from "@material-ui/core/Switch"
import Slider from "@material-ui/core/Slider"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

function valuetext(value) {
  return `${value}°C`
}

function Cards(props) {
  return (
    <>
      <div className="cards">
        <Card className="single-card" variant="outlined">
          <CardContent className="card-content">
            <Typography variant="h5" component="h2">
              Online Mode
            </Typography>
            <Typography variant="body2" component="p">
              Is this application connected to the internet?
            </Typography>
            <Switch name="checkedA" onChange={props.toggleOnlineMode} inputProps={{ "aria-label": "secondary checkbox" }} />
          </CardContent>
          <CardActions></CardActions>
        </Card>
        <Card className="single-card" variant="outlined">
          <CardContent className="card-content">
            <Typography variant="h5" component="h2">
              Master Volume
            </Typography>
            <Typography variant="body2" component="p">
              Overrides all other sound settings in this application
            </Typography>
            <Slider defaultValue={30} getAriaValueText={valuetext} onChange={(e, val) => props.setUserVolume(val)} aria-labelledby="discrete-slider" valueLabelDisplay="auto" step={10} marks min={0} max={100} />
          </CardContent>
          <CardActions></CardActions>
        </Card>
        <Card className="single-card" variant="outlined">
          <CardContent className="card-content">
            <Typography variant="h5" component="h2">
              Sound Quality
            </Typography>
            <Typography variant="body2" component="p">
              Manually control the music quality in event of poor connection
            </Typography>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Normal</InputLabel>
              <Select className="select" onChange={e => props.setSoundQuality(e.target.value)} labelId="demo-simple-select-label" id="demo-simple-select">
                <MenuItem value={"High"}>High</MenuItem>
                <MenuItem value={"Normal"}>Normal</MenuItem>
                <MenuItem value={"Low"}>Low</MenuItem>
              </Select>
            </FormControl>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </div>
    </>
  )
}

export default Cards
