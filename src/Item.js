import React, { useState } from 'react'

const Item = ({ todo }) => {
  const [isChecked, setIsChecked] = useState(false) // チェック状態を管理するstateを定義、初期値はfalse

  const checkedCheck = () => {
    setIsChecked(!isChecked) // 現在設定されているisCheckedの"逆の"値でisCheckedを上書き
  }

  // isCheckedの値によって線の描写を切り替える関数を実装
  const renderLine = () => {
    if (isChecked) {
      return {
        textDecoration: 'line-through'
      }
    } else {
      return {
        textDecoration: 'none'
      }
    }
  }

  return (
    <>
      <p id="item">
          <input 
            type="checkbox" 
            id="check" 
            onClick={checkedCheck}
            style={renderLine()}
          />
            {todo}
      </p>
    </>
  )
}

export default Item
