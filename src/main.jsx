import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import YoutubePlayer from './pages/YoutubePlayer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div id='site'>
      <YoutubePlayer/>
    </div>
  </StrictMode>,
)
