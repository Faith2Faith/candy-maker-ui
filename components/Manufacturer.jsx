import React from 'react'

export default ({ id, name, country }) => (
  <div key={id} className="manufacturer">
    {`${name} (${country})`}
  </div>
)
