import React, { useState } from "react"
import styled from "styled-components"

const Container = styled.form`
  width: 70%;
  height: 290px;
  position: absolute;
  top: 11rem;
`
const Type = styled.div`
  height: 50%;
  padding: 8px;
`
const TypeTop = styled.div`
  margin-bottom: 0.5rem;
`
const Radio = styled.input<{url:string}>`
  margin-right: 8px;
  width: 1rem;
  height: 1rem;
  border: 1px solid white;
  appearance: none;
  &:checked {
    background-image:url(${props=>props.url});
    background-size: cover;
    background-position: center;
  }
`
const Label = styled.label`
`
const TypeMiddle = styled.div`
  input {
    width: 4rem;
    text-align: center;
    background-color: transparent;
    border-bottom: 1px solid ${props=>props.theme.silverColor};
    color: ${props=>props.theme.textColor};
    outline: none;
  }
`
const TypeBottom = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  gap: 0.5rem;
  color: ${props=>props.theme.silverColor};
`
function Time() {
  const [type, setType] = useState('minute')
  const [minutes, setMinutes] = useState('') 
  const [hours, setHours] = useState('') 
  let url = process.env.PUBLIC_URL + '/images/check.png'

  function changeType(event:React.FormEvent<HTMLInputElement>) {
    setType(event.currentTarget.id)
  }
  function changeMinutes(event:React.FormEvent<HTMLInputElement>) {
    if(Number(event.currentTarget.value)==0||event.currentTarget.value===''){
      return setMinutes(event.currentTarget.value)
    }
    if(!Number(event.currentTarget.value)){
      alert('숫자를 입력해주세요.')
      setMinutes('')
      return;
    }
    if(Number(event.currentTarget.value)>99999) {
      alert('99999 이하의 값을 입력해주세요.')
      setMinutes('')
      return;
    }
    setMinutes(event.currentTarget.value)
  }
  function changeHours(event:React.FormEvent<HTMLInputElement>) {
    if(Number(event.currentTarget.value)==0||event.currentTarget.value===''){
      return setHours(event.currentTarget.value)
    }
    if(!Number(event.currentTarget.value)){
      alert('숫자를 입력해주세요.')
      setHours('')
      return;
    }
    if(Number(event.currentTarget.value)>200) {
      alert('200 이하의 값을 입력해주세요.')
      setHours('')
      return;
    }
    setHours(event.currentTarget.value)
  }
  return (
    <Container onSubmit={(e)=>{e.preventDefault()}}>
      <Type>
        <TypeTop>
          <Radio
            type="radio" name="type" id="minute" 
            checked={type==='minute'? true : false}
            onChange={changeType} 
            url={url}
          />
          <Label htmlFor="minute">Minutes → Hours</Label>
        </TypeTop>
          {
            type === 'minute' ? 
            <>
              <TypeMiddle>
                <input 
                  type="text" placeholder="ex) 180"
                  value={minutes} 
                  onChange={changeMinutes} 
                /> 
                분은 {Math.floor(Number(minutes)/60)}시간 {Number(minutes)%60}분입니다.
              </TypeMiddle>
              <TypeBottom>
                <p>* 분을 입력하면 시간으로 변환해줍니다.</p>
                <p>* 99999가 넘는 값은 입력할 수 없습니다.</p>
              </TypeBottom>
            </>
            : null
          }
        
      </Type>
      <Type>
        <TypeTop>
          <Radio
            type="radio" name="type" id="hour" 
            onChange={changeType} 
            checked={type==='minute'? false : true}
            url={url}
          />
          <Label htmlFor="hour">Hours → Minutes</Label>
        </TypeTop>
        {
          type === 'hour' ? 
          <>
            <TypeMiddle>
              <input 
                type="text" placeholder="ex) 30"
                value={hours} 
                onChange={changeHours} 
              /> 
              시간은 {Number(hours)*60}분입니다.
            </TypeMiddle>
            <TypeBottom>
              <p>* 시간을 입력하면 분으로 변환해줍니다.</p>
              <p>* 300이 넘는 값은 입력할 수 없습니다.</p>
            </TypeBottom>
          </>
          : null
          }
      </Type>
    </Container>
  )
}

export default Time