import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

function Header() {
    const [user] = useAuthState(auth)

    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar
                    onClick={() => auth.signOut()}
                    src={user?.photoURL}
                    alt={user?.displayName}
                />
                <AccessTimeIcon />
            </HeaderLeft>

            <HeaderSearch>
                <SearchIcon />
                <input placeholder='Search PapaFam'></input>
            </HeaderSearch>

            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root {
        margin: 0 20px 0 auto;
    }
`

const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    display: flex;
    padding: 0 50px;

    > input {
        background: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: none;
        color: white;
    }
`

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background: var(--slack-color);
    color: white;
`

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    /* background-color: orange; */

    > .MuiSvgIcon-root {
        margin: 0px 30px 0px auto;
    }
`

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    transition: 300ms;

    :hover {
        opacity: 0.8;
    }
`
