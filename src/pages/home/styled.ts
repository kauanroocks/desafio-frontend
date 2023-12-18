import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	height: calc( 100vh - 60px );
`;

export const LeftSide = styled.div`
	display: flex;
	align-items: center;
	width: 50%;
	background-color: #232527;
`
export const RightSide = styled.div`
	width: 50%;
	background-color: #F0F2F5;
`

export const ContainerLeftSide = styled.div`
	h1 {
		margin-left: 80px;
		font-size: 42px;
		max-width: 350px;
		color: #FFF;
	}

	button {
		margin-top: 40px;
		margin-left: 80px;
		width: 200px;
		height: 40px;
		border: 2px solid #FFF;;
		cursor: pointer;
		border-radius: 3px;
		color: #FFF;
		background-color: transparent;
	}

	button:hover {
		background-color: #FFF;
		color: #000;
		border: 0;
		transition: .5s;
	}
`