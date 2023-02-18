import React from 'react'
import useAsync from '../customhook/useAsync'
import styled from 'styled-components';
async function getData() {
    try {
        const response = await fetch('http://localhost:3003/subjects')
        const data = await response.json();
        return data;
    }
    catch (e) {
        console.log(e)
    }
}
interface dataType {
    s_id: number;
    s_name: string;
}
const SubWrapper = styled.div`
    display:flex;
    justify-content: center;
    div {
        margin:10px;
        background: skyblue;
        color: white;
        padding: 10px 20px;
        border-radius: 6px;
    }
`;
interface propType {
    onChange(subject: number): void
}
function Subjects({ onChange }: propType) {
    const [subject, fetchData] = useAsync(getData);
    if (typeof subject === "object") {
        const { loading, data, error } = subject;
        if (loading) return <div>로딩중입니다.</div>
        if (error) return <div>에러가 발생했습니다.</div>
        if (!data) return <div>데이터가 없습니다.</div>
        console.log(data);
        return (
            <SubWrapper>
                {(data as Array<dataType>).map((da) => <div onClick={() => onChange(da.s_id)}>{da.s_name}</div>)}
            </SubWrapper>
        )
    } else {
        return (
            <div>
                데이터를 가져오지 못했습니다.
            </div>
        )
    }
}

export default Subjects;
