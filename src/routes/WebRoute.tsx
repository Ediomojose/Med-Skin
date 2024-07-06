import { Routes, Route } from "react-router-dom"
import Home from '../pages/home/Home'

const WebRoute = () => {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
   </Routes>
  )
}

export default WebRoute