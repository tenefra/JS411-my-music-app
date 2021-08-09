import React from "react"

import "./notificationsStyles.css"

import Typography from "@material-ui/core/Typography"

function Notifications(props) {
  return (
    <>
      <div className="notification-container">
        <Typography variant="h5" component="h2">
          System Notifications:
        </Typography>
        {props.onlineMode ? (
          <div></div>
        ) : (
          <Typography variant="h6" component="h2">
            Your application is offline. You won't be able to share or stream music to other devices.
          </Typography>
        )}
        {props.userVolume > 80 ? (
          <Typography variant="h6" component="h2">
            Listening to music at a high volume could cause long-term hearing loss.
          </Typography>
        ) : (
          <div></div>
        )}
        {props.soundQuality === "Low" ? (
          <Typography variant="h6" component="h2">
            Music quality is degraded. Increase quality if your connection allows it.
          </Typography>
        ) : (
          <div></div>
        )}
      </div>
    </>
  )
}

export default Notifications
