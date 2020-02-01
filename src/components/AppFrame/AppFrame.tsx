import React from 'react'
import styled from 'styled-components'
import useRadius from './useRadius'

interface IProps {
  className?: string
  radius?: number
}

const AppFrame: React.FC<IProps> = ({
  children,
  className,
  radius = 9.375,
}) => {
  const ref = useRadius(radius)
  return (
    <FrameMask ref={ref} className={className}>
      {children}
    </FrameMask>
  )
}

const FrameMask = styled.div`
  display: inline-block;
  overflow: hidden;

  img {
    display: block;
  }
`

export default AppFrame
