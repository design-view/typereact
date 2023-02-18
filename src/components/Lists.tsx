import React from 'react'
import useAsync from '../customhook/useAsync';
import styled from 'styled-components';
async function getData() {
    try {
        const response = await fetch('http://localhost:3003/words')
        const data = await response.json();
        return data;
    }
    catch (e) {
        console.log(e)
    }
}

const ListWrapper = styled.div`
    text-align: center;
    h2 {
        padding: 50px;
        font-size: 28px;
    }
    table {
        width: 100%;
        max-width: 1100px;
        margin: 0 auto;
        border-collapse: collapse;
        th {
            border-top: 3px solid #333;
            border-bottom: 1px solid #ccc;
            padding: 20px;
        }
        td {
            padding: 20px;
            border-bottom: 1px solid #ccc;
        }
    }
   
`
interface propsType {
    subject: number;
}
interface dataType {
    w_id: number;
    subject: number;
    w_name: string;
    w_type: string;
    w_syntex: string;
    w_desc: string;
}
function Lists({ subject }: propsType) {
    const [words, fetchData] = useAsync(getData);
    if (typeof words === "object") {
        let { data, loading, error } = words;
        if (loading) return <div>로딩중입니다.</div>
        if (error) return <div>에러가 발생했습니다.</div>
        if (!data) return <div>데이터가 없습니다.</div>
        if (data) {
            if (subject > 0) {
                data = (data as Array<dataType>).filter(da => da.subject === subject);
            }
        }
        return (
            <ListWrapper>
                <h2>주요 내장함수</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>번호</th>
                            <th>함수명</th>
                            <th>데이터타입</th>
                            <th>구문</th>
                            <th>설명</th>
                        </tr>
                        {(data as Array<dataType>).map(da => <tr>
                            <td>{da.w_id}</td>
                            <td>{da.w_name}</td>
                            <td>{da.w_type}</td>
                            <td>{da.w_syntex}</td>
                            <td>{da.w_desc}</td>
                        </tr>)}
                    </tbody>
                </table>
            </ListWrapper>
        )

    } else {
        return (<div></div>)
    }


}

export default Lists
