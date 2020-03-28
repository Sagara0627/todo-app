import React from 'react'
import Item from './Item'

const List = ({ todo }) => {
  return (
    <>
      <div class="item_wrap">
        <Item todo="サンプルテキスト" />
        <Item todo="サンプルテキスト" />
        <Item todo="サンプルテキスト" />
      </div>
    </>
  )
}

export default List