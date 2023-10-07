import { useEffect, useState } from "react";

const UseEffectComponents = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  useEffect(() => {
    console.log('effect');
    return () => {
      console.log('unmount');
    }
  }, []);

  const onChangeName = e => {
    setName(e.target.value);
  }
  const onChangeNickName = e => {
    setNickname(e.target.value);
  }

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName}></input>
        <input value={nickname} onChange={onChangeNickName}></input>
      </div>
      <div>
        <div>
          <b>이름 :</b> {name}
        </div>
        <div>
          <b>닉네임 :</b> {nickname}
        </div>
      </div>
    </div>
  )
}

export default UseEffectComponents;