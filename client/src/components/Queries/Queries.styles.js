import styled from "@emotion/styled";

export const mainHeading = styled.h3`
  color: white;
  font-weight: 600;
  font-size: 18px;
`;

export const headerSection = styled.div`
  justify-content: space-between;
  margin: 15px 10px;
  display: flex;
`;

export const queryContainer = styled.div`
  overflow: auto;
  padding: 25px;
  background-color: #23272a;
  height: 215px;
  border-radius: 10px;
  white-space: pre-wrap;
`;

export const textArea = styled.textarea`
  border: none;
  outline: none;
  height: 95%;
  width: 99%;
  background-color: transparent;
  resize: none;
  color: #dcddde;
  line-height: 1.8em;
  font: 1.075rem Inconsolata, monospace;
  ::selection {
    background-color: #36393f;
    outline: none;
    color: #2da5e1;
  }
`;

export const SendPill = styled.div`
  margin-right: 10px;
  padding: 6px 2px;
  background-color: #7289da;
  border-radius: 7.5px;
  text-align: center;
  width: 75px;
  font-weight: 550;
  letter-spacing: 1px;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    background-color: #7289da;
    transition: 0.25s ease-in all;
  }
`;

export const ClearPill = styled.div`
  margin-right: 10px;
  padding: 6px 2px;
  background-color: #f7b400;
  border-radius: 7.5px;
  text-align: center;
  width: 75px;
  font-weight: 550;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-left: auto;
  &:hover {
    cursor: pointer;
    background-color: #f7b400;
    transition: 0.25s ease-in all;
  }
`;

export const SavingPill = styled.div`
  padding: 6px 2px;
  background-color: #3ba55c;
  border-radius: 7.5px;
  text-align: center;
  width: 75px;
  font-weight: 550;
  letter-spacing: 1px;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    background-color: #3ba55c;
    transition: 0.25s ease-in all;
  }
`;

export const statusContainer = styled.div`
  margin: 15px 0px;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: ${(p) => p.backgroundColor};
  color: #fff;
`;
