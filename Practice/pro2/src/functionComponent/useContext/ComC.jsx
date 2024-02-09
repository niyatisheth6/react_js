import React, { useContext } from 'react'
import { BioData } from './ComA';

function ComC() {
    const contextt = useContext(BioData);
  return (
    <div>{contextt}</div>
  )
}

export default ComC