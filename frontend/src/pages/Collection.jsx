import React from 'react'
import AllCollection from '../components/AllCollection'
import Subscribe from '../components/Subscribe'

const Collection = ({searchText,setsearchText}) => {
  return (
    <div>
      <AllCollection searchText={searchText} setsearchText={setsearchText}/>
      <Subscribe/>
    </div>
  )
}

export default Collection