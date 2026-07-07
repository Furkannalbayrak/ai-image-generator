import React from 'react'
import './App.css'
import RouterConfig from './config/RouterConfig'
import Header from './components/Header'
import Gallery from './components/Gallery'

function App() {
  return (
    <div style={{
      backgroundImage: 'url("https://readdy.ai/api/search-image?query=deep%20space%20background%20with%20stars%2C%20nebula%2C%20and%20subtle%20cosmic%20dust%2C%20dark%20blue%20and%20purple%20colors%2C%20high%20quality%20digital%20art%2C%208k%20resolution%2C%20space%20theme&width=1920&height=1080&seq=spaceBg01&orientation=landscape") ',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: 'fixed',
      width: "100%",
      minHeight: "100vh",
    }}>
      <div>
        <RouterConfig />
      </div>
    </div>

  )
}

export default App
