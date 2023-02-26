import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    color: var(--text-information);
    margin-top: 1rem;
    font-size: 1.8rem;
  }
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const List = styled.ul`
  width: 100%;
  height: 100%;
  li {
    margin: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    padding: 1rem;
    list-style: none;
    background-color: var(--grey-900);
    color: var(--blue);
    display: flex;
    color: var(--text-information);
    font-weight: bold;
    flex-direction: column;
    div {
      display: flex;
      margin: 0.2rem;
    }
    h4 {
      margin-right: 0.5rem;
    }
  }
`;
