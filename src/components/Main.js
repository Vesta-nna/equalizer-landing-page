import React from "react"

import phone from "../img/illustration-app.png"
import decoration from "../img/bg-pattern-2.svg"
import ios from "../img/icon-apple.svg"
import android from "../img/icon-android.svg"

const Main = () => (
  <main>
    <div className="intro">
      <div className="inline">
        <h1>We make your music sound extraordinary.</h1>
        <div className="decoration"></div>
      </div>

      <p>A system audio equalizer specifically designed for Android and iOS. Freely tune the 
      way your music sounds with a professional grade parametric EQ & volume mixer. Control 
      bass, mids, treble, gain control, reverb, and more!</p>
    </div>

    <div className="offer inline">
      <img className="phone" alt="Phone présentation" src={phone} />
      <img className="decoration" alt="Decoration" src={decoration} />
      <div className="pricing">
        <h2>Premium EQ</h2>

        <p>Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take 
        your listening experience to a whole new level and access all our incredible features!</p>

        <p className="inline"><span className="bold">$4</span><span className="time"> / month</span></p>

        <div className="button inline ios"><img src={ios} alt="iOS icon" /><p>iOS Download</p></div>
        <div className="button inline android"><img src={android} alt="Android icon" /><p>Android Download</p></div>
      </div>
    </div>
  </main>
)

export default Main
