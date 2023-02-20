import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
type inprops = {
    sitename: string;
    onChange: (num: number) => void;
}
const HeaderWrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px;
`;
const HeaderUl = styled.ul`
    display:flex;
    align-items: center;
`
const Li = styled.li`
    list-style:none;
    padding: 0 20px;
`
function Header({ sitename, onChange }: inprops) {
    return (
        <HeaderWrapper>
            <h1>{sitename}</h1>
            <HeaderUl>
                <Li><Link to="/addSubject">과목등록</Link></Li>
                <Li>내장함수등록</Li>
                <Li onClick={() => onChange(0)}><Link to="/">함수리스트</Link></Li>
            </HeaderUl>
        </HeaderWrapper>
    )
}

export default Header
