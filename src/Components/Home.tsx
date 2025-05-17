import { useState } from "react"
import styled from "styled-components"
import Time from "./Time"
import Distance from "./Distance"


const Container = styled.div`
  padding: 2rem 0;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid ${(props)=>props.theme.pointColor};
`
const Title = styled.h1`
  margin-bottom: 2rem;
  position: absolute;
  top: 2rem;
  font-size: 2rem;
  font-weight: 700;
`
const Types = styled.ul`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 7rem;
  gap: 1rem;
`
const Type = styled.li`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${(props)=>props.theme.silverColor};
  &.checked {
    color: ${(props)=>props.theme.textColor}
  }
`
export default function Home() {
  const [type, setType] = useState('')
  function changeType(event:React.MouseEvent<HTMLLIElement>) {
    setType(event.currentTarget.id)
  }
  return (
    <Container>
      <Title>단위 변환기</Title>
      <Types>
        <Type onClick={changeType} className={type==='시간'?'checked':''} id="시간">시간</Type>
        <Type onClick={changeType} className={type==='거리'?'checked':''} id="거리">거리</Type>
      </Types>
      { type==='시간' ? <Time/> : null }
      { type==='거리' ? <Distance/> : null }
    </Container>
  )
}
