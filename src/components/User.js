import React from "react"
import "./User.css"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import MailIcon from "@material-ui/icons/Mail"
import EventIcon from "@material-ui/icons/Event"
import LocationOnIcon from "@material-ui/icons/LocationOn"

function User() {
  return (
    <div className="user">
      <img src="./images/avatar.png" className="user__avatar" alt="Yves KOKOU" />
      <h1 className="user__name">Yves KOKOU</h1>
      <p className="user__profession">Développeur Web et mobile</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon /> Boulevard Eyadema Lomé
        </p>
        <p className="user__info">
          <PhoneIcon /> <a href="tel:+22896529200">96529200</a>
        </p>
        <p className="user__info">
          <MailIcon /> <a href="mailto:johndoe@gmail.com">yves.kokou.10@gmail.com</a>
        </p>
        <p className="user__info">
          <EventIcon /> Date de naissance: 29 mai 1998
        </p>
        <p className="user__info">
          <LocationOnIcon /> Lieu de naissance: Togo
        </p>
      </div>
    </div>
  )
}

export default User
