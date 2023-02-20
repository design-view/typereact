import { useEffect } from 'react'
import useAsync, { SubjectdataType } from '../customhook/useAsync'
import styled from 'styled-components';
async function getData() {
    try {
        const response = await fetch('http://localhost:3003/subjects')
        const data = await response.json();
        return data;
    }
    catch (e) {
        console.log(e);
        return e;
    }
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
    onChange(subject: number): void;

}
function Subjects({ onChange }: propType) {
    const [subject, fetchData] = useAsync(getData);
    const { loading, data, error } = subject;
    if (loading) return <div>로딩중입니다.</div>
    if (error) return <div>에러가 발생했습니다.</div>
    if (!data) return <div>데이터가 없습니다.</div>

    return (
        <SubWrapper>
            {(data as Array<SubjectdataType>).map((da) => <div key={da.id} onClick={() => onChange(da.id)}>{da.name}</div>)}
        </SubWrapper>
    )
}

export default Subjects;
