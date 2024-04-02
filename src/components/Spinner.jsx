import ClipLoader from 'react-spinners/ClipLoader'

import React from 'react'

const override = {
    display: 'block',
    margin: '100 px auto'
}
const Spinner = ({loading }) => {
  return (
    <ClipLoader
    color = '#4338ca'
    loading = {loading}
    cssOverride = {override}
    />
  )
}

export default Spinner