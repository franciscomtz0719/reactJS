import './App.css'
import List from './componentes/List/'
import users from './mocks/mock_user.js'

function App () {
  console.log(users)
  return (
    <div className='App'>
      <List data={users} />
    </div>
  )
}

export default App