import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [
  {
    author: 'Rebecca Yarros',
    title: 'Iron Flame: The Empyrean Bk 2',
    img: 'https://images-fe.ssl-images-amazon.com/images/I/81cL2H23nVL._AC_UL600_SR600,400_.jpg',
    id: 1,
  },
  {
    author: 'Hannah Grace',
    title: 'Wildfire',
    img: 'https://images-fe.ssl-images-amazon.com/images/I/710saGRaxhL._AC_UL600_SR600,400_.jpg',
    id: 2,
  },
]

const names = ['john', 'peter', 'susan']

const newnames = names.map((name) => {
  console.log(name)
  return <h1>{name}</h1>
})

const someFunc = (para1, para2) => {
  console.log(para1, para2)
}

someFunc('java', 'developer')

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    console.log('handle form input')
  }
  const handleButtonClick = () => {
    alert('handle button click')
  }
  const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: '1rem 0' }}
        />
        <button type="submit">submit</button>
      </form>

      <button onClick={() => console.log('click me')} type="button">
        click me
      </button>
    </section>
  )
}

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }

  const someValue = 'shakeAndBake'
  const displayValue = () => {
    console.log(someValue)
  }
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        //const { img, title, author, id } = book
        return <Book {...book} key={book.id} getBook={getBook} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, getBook, id } = props
  const displayTitle = () => {
    console.log(title)
  }

  const getSingleBook = () => {
    getBook(id)
  }
  console.log(props)
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button
        onClick={() => {
          getBook(id)
        }}
      >
        Click me
      </button>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

/*在JSX（JavaScript XML）中，"expression" 和 "statement" 与普通的 JavaScript 中的概念相似，但有一些特定的区别和注意事项。下面是它们在 JSX 中的区别：

表达式（Expression）：

表达式是一个产生值的代码片段，可以嵌入到 JSX 中，通常用于在 JSX 中插入变量的值或执行计算。
在 JSX 中，用花括号 {} 将表达式包裹起来，以在 JSX 中嵌入 JavaScript 表达式。
示例：
jsx
Copy code
const name = "John";
const greeting = <p>Hello, {name}!</p>;
语句（Statement）：

语句通常是执行某些操作的代码片段，它们不返回值，因此不能直接嵌入到 JSX 中。
在 JSX 中，不应该使用 JavaScript 语句，例如 if 语句或 for 循环，因为它们不会返回值，这会导致错误。
示例（错误的用法）：
jsx
Copy code
// 错误：不能在 JSX 中使用语句
const isTrue = true;
<p>
  if (isTrue) {
    "This is true";
  } else {
    "This is false";
  }
</p>
在 JSX 中，应该主要使用表达式来构建界面，因为表达式会返回一个值，而且可以直接嵌入到 JSX 中。如果需要条件渲染或循环操作，应该使用 JavaScript 表达式来生成元素，而不是语句。

例如，上述错误的示例可以改为以下正确的用法：

jsx
Copy code
const isTrue = true;
const message = isTrue ? "This is true" : "This is false";
<p>{message}</p>
总之，在 JSX 中，要注意避免使用不返回值的语句，而应该使用返回值的表达式来构建界面。




*/
