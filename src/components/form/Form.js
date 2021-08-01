import React from "react"

import "./formStyles.css"

import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

function Form(props) {
  return (
    <>
      <div className="form-container">
        <form className="form" noValidate autoComplete="off">
          <TextField className="form-field" id="standard-basic" label="Username*" />
          <TextField className="form-field" id="standard-basic" label="Password*" />
        </form>
        <Button className="button" variant="contained" color="primary" onClick={() => props.setLoginStatus(true)} disableElevation>
          Login
        </Button>
      </div>
    </>
  )
}

export default Form
