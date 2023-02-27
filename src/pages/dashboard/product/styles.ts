import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  h2 {
    color: var(--text-information);
    font-size: 1.8rem;
  }
  flex-direction: column;
  width: 100%;
  .header {
    display: flex;
    justify-content: space-around;
    width: 100%;
    button {
      background-color: transparent;
      border: none;
      img {
        background-color: transparent;
        height: 2rem;
      }
    }
  }
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
