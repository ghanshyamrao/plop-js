import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export const Header=()=> {
  return (
        <header>
        <nav>
    <ul>
      <a href="/home">Home/</a>
      <a href="/about">About</a>
      <a href="/resume">Resume</a>
      <a href="/info">Info</a>
      <a href="/educations">Educations</a>
    </ul>   
        </nav>
        </header>
  )
}
