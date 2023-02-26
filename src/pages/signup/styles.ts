import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 100%; 
`;
export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 2.5rem;
    color: var(--text-information);
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    max-width: 600px;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;
    &::placeholder {
      color: var(--text-body);
    }
    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    max-width: 600px;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter 0.2s;
    font-weight: 600;
    &:active:hover {
      filter: brightness(0.9);
    }
  }

  a {
    margin-top: 0.5rem;
    color: var(--text-body)
  }

`;
