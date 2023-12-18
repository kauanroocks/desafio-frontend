import styled from "styled-components";

export const Container = styled.div`
	display flex;
	align-items: center;
	padding-right: 50px;
	padding-left: 50px;

	width: 100vw;
	height: 60px;
	box-shadow: 0 2px 6px 0 rgba(0,0,0,.12), inset 0 -1px 0 0 #dadce0;
`

export const NavigationList = styled.div`
	display: flex;
	align-items: center;
	height: inherit;
	ul {
		display: flex;
		list-style: none;
	}

	a {
		text-decoration: none;
		color: #000;
	}

	li {
		font-size: 14px;
		color: #232527;
		padding: 5px;
		margin: 10px;
	}

	li:hover {
		cursor: pointer;
	}
`