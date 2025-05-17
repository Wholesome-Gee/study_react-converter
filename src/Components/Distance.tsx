import React, { useState } from "react"
import styled from "styled-components"

const Container = styled.form`
  width: 70%;
  height: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 11rem;
`
const Top = styled.div`
  display: flex;
  input {
    margin-right: 4px;
    width: 6rem;
    border-bottom: 1px solid ${props=>props.theme.silverColor};
    color: ${props=>props.theme.textColor};
    text-align: center;
    outline: none;
    background-color: transparent;
  }
`
const Select = styled.div`
  padding-top: 5px;
  width: 2.8rem;
  position: relative;
  border-radius: 8px;
  cursor: pointer;
  &::after {
    content: "⌵";
    position: absolute;
    top: 4px;
    right: 0;
    color: ${props=>props.theme.pointColor};
    font-size: 1rem;
    font-weight: 600;
  }
`
const Type = styled.span`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
  
`;
const SelectOptions = styled.ul<{show:string}>`
  width: 100%;
  height: ${(props) => (props.show==='true' ? "auto" : "0")};
  position: absolute;
  list-style: none;
  top: 1.5rem;
  overflow: hidden;
  background-color: ${props=>props.theme.silverColor};
  color: #fefefe;
`;
const Option = styled.li`
  padding-left: 4px;
  padding-bottom: 8px;
  transition: background-color 0.1s ease-in;
  &:hover {
    background-color: ${props=>props.theme.pointColor};
  }
`;
const Middle = styled.div`
  margin-top: 2.5rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`
const Bottom = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  gap: 0.5rem;
  color: ${props=>props.theme.silverColor};
  span {
    color: ${props=>props.theme.pointColor};
    font-weight: 600;
  }
`
function Distance() {
  const [unit,setUnit] = useState('mm')
  const [value, setValue] = useState('') 
  const [isShow, setIsShow] = useState(false);
  let options = ['mm','cm','m','km']
  
  function changeIsShow(){setIsShow(prev=>!prev)}
  function changeUnit(event:React.MouseEvent<HTMLElement>){setUnit(event.currentTarget.id)}
  function changeValue(event:React.FormEvent<HTMLInputElement>){
    if(Number(event.currentTarget.value)===0||event.currentTarget.value===''){
      setValue(event.currentTarget.value)
      return;
    }
    if(Number(event.currentTarget.value)>99999999){
      alert('99999999 이하의 값을 입력해주세요.')
      setValue('')
      return;
    }
    if(!Number(event.currentTarget.value)){
      alert('숫자를 입력해주세요.')
      setValue('')
      return;
    }
    setValue(event.currentTarget.value)
  }

  return (
    <Container onSubmit={(e)=>{e.preventDefault()}}>
      <Top>
        <input onChange={changeValue} value={value} type="text" placeholder="ex) 3000"></input>
        <Select onClick={changeIsShow}>
          <Type>{unit}</Type>
          <SelectOptions show={String(isShow)}>
            {options.map((item)=>(<Option key={item} id={item} onClick={changeUnit}>{item}</Option>))}
          </SelectOptions>
        </Select>
      </Top>
        { unit==='mm' ?
          <Middle>
            <p>{Number(value)/10} cm입니다.</p>
            <p>{Number(value)/1000} m입니다.</p>
            <p>{Number(value)/100000} km입니다.</p>
          </Middle> :
          null
        }
        { unit==='cm' ?
          <Middle>
            <p>{Number(value)*10} mm입니다.</p>
            <p>{Number(value)/100} m입니다.</p>
            <p>{Number(value)/100000} km입니다.</p>
          </Middle> :
          null
        }
        { unit==='m' ?
          <Middle>
            <p>{Number(value)*1000} mm입니다.</p>
            <p>{Number(value)*100} cm입니다.</p>
            <p>{Number(value)/1000} km입니다.</p>
          </Middle> :
          null
        }
        { unit==='km' ?
          <Middle>
            <p>{Number(value)*1000000} mm입니다.</p>
            <p>{Number(value)*100000} cm입니다.</p>
            <p>{Number(value)*1000} m입니다.</p>
          </Middle> :
          null
        }
        <Bottom>
          <p>* <span>⌵</span> 을 눌러서 단위를 변경할 수 있습니다.</p>
          <p>* 99999999가 넘는 값은 입력할 수 없습니다.</p>
        </Bottom>
    </Container>
  )
}

export default Distance