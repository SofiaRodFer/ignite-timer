import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { History } from './Pages/History/index.ts'
import { DefaultLayout } from './layouts/DefaultLayout/Index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
