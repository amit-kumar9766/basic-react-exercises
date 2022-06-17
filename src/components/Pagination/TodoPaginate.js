import { useState } from 'react'
import './paginate.css'

const Todo = () => {
  const [currentPage, setCurrentPage] = useState(1)
  let todos = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
  const todosPerPage = 2
  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id))
  }

  const indexOfLastTodo = currentPage * todosPerPage
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo)

  const renderTodos = currentTodos.map((todo, index) => {
    return <li key={index}>{todo}</li>
  })

  const totalPageNumbers = Math.ceil(todos.length / todosPerPage)

  // Logic for displaying page numbers
  const pageNumbers = []
  for (let i = 1; i <= totalPageNumbers; i++) {
    pageNumbers.push(i)
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li key={number} id={number} onClick={handleClick}>
        {number}
      </li>
    )
  })

  return (
    <div>
      <ul>{renderTodos}</ul>
      <ul id="page-numbers">{renderPageNumbers}</ul>
    </div>
  )
}

export default Todo
