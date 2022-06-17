import React, { useState } from 'react'
import styled from 'styled-components'

export const RightDiv = styled.div`
  position: relative;
  left: 50px;
`

const GreenText = styled.div`
  color: green;
  cursor: pointer;
`

const commentsData = {
  title: 'Fake article title.',
  author: 'grzm',
  comments: [
    {
      id: 1,
      text: 'Example comment here in 1.',
      author: 'user2',
      children: [
        {
          id: 2,
          text: 'Another example comment text in 2.',
          author: 'user3',
          children: [
            {
              id: 3,
              text: 'Another example comment text  in 3.',
              author: 'user4',
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      text: 'Example comment here 2.',
      author: 'user5',
      children: [],
    },
  ],
}

const Comment = ({ comment }) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      {comment?.children?.length > 0 ? (
        comment?.children?.map((item) => {
          return (
            <RightDiv>
              <RightDiv>{comment?.text}</RightDiv>
              {/* <button onClick={() => setOpen(!open)}>Reply</button> */}
              <GreenText onClick={() => setOpen(!open)}>Reply</GreenText>
              {open && <input value={value} onChange={handleChange}></input>}
              <Comment comment={item} />
            </RightDiv>
          )
        })
      ) : (
        <RightDiv>
          <RightDiv>{comment?.text}</RightDiv>
          <GreenText onClick={() => setOpen(!open)}>Reply</GreenText>
          {open && <input value={value} onChange={handleChange}></input>}
        </RightDiv>
      )}
    </div>
  )
}

export const NestedComments = () => {
  const [data, setData] = useState(commentsData)
  return (
    <>
      <div>Nested Comments</div>
      {data?.comments?.map((comment) => {
        return <Comment key={comment?.id} comment={comment} />
      })}
    </>
  )
}
