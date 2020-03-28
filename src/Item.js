import React from 'react'

const Item = ({ todo }) => {

  const checkedCheck = () => {
    const check = document.getElementById("check")
    const item = document.getElementById("item")
    if (check.checked) {
      item.style.textDecoration = "line-through"
    } else if (!(check.checked)) {
      item.style.textDecoration = "none"
    }
  }

  return (
    <>
      <p id="item"><input type="checkbox" id="check" onClick={checkedCheck}></input>{todo}</p>
    </>
  )
}

export default Item