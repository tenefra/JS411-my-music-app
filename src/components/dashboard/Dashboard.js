import React, { useEffect, useState } from "react"

import Form from "../form/Form"
import Cards from "../cards/Cards"

function Dashboard() {
  const [loginStatus, setLoginStatus] = useState(false)
  const [onlineMode, setOnlineMode] = useState(false)
  const [userVolume, setUserVolume] = useState(30)
  const [soundQuality, setSoundQuality] = useState("Normal")

  const toggleOnlineMode = () => {
    setOnlineMode(prevOnlineMode => !prevOnlineMode)
  }

  useEffect(() => {
    console.log(loginStatus)
  }, [loginStatus])

  useEffect(() => {
    console.log(onlineMode)
  }, [onlineMode])

  useEffect(() => {
    console.log(userVolume)
  }, [userVolume])

  useEffect(() => {
    console.log(soundQuality)
  }, [soundQuality])

  return <>{loginStatus ? <Cards setOnlineMode={setOnlineMode} toggleOnlineMode={toggleOnlineMode} setUserVolume={setUserVolume} setSoundQuality={setSoundQuality} /> : <Form setLoginStatus={setLoginStatus} />}</>
}

export default Dashboard
