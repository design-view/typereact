import React, { useState } from 'react'

const AddSubject = () => {
    const [subject, setSubject] = useState<string>("");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const su = e.target.value;
        setSubject(su);
    }

    const submit = () => {
        fetch(`http://localhost:3003/subjects/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: subject
            })
        }).then(res => {
            console.log(res);
            if (res.ok) {
                alert("생성이 완료 되었습니다.");
            }
        }).catch(e => console.log(e))
    }
    return (
        <div>
            <input type="text" name="subject" onChange={onChange} />
            <button onClick={submit}>추가하기</button>
        </div>
    )
}

export default AddSubject
