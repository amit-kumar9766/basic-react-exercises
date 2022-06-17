import './App.css'
import Timer from './components/Timer'
import { CustomModal } from './components/Modal/CustomModal'
import { NestedComments } from './components/NestedComments'
import { Rating } from './components/Rating'
import Chess from './components/Chess'
import Todo from './components/Pagination/TodoPaginate'

function App() {
  return (
    <div className="App">
      {/* <CustomModal/>
       <Rating/>
       <Chess/> */}
      {/* <Timer/>  */}
      {/* <NestedComments /> */}
      <Todo />
    </div>
  )
}

export default App
