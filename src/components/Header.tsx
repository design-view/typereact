import React from 'react';
import styled from 'styled-components';
type inprops = {
    sitename: string
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
function Header({ sitename }: inprops) {
    return (
        <HeaderWrapper>
            <h1>{sitename}</h1>
            <HeaderUl>
                <Li>과목등록</Li>
                <Li>내장함수등록</Li>
                <Li>함수리스트</Li>
            </HeaderUl>
        </HeaderWrapper>
    )
}

export default Header
