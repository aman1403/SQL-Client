import styled from "@emotion/styled";

export const HeaderItem = styled.div`
  margin: 15px 10px;
  display: flex;
`;

export const TableHeadings = styled.p``;

export const Table = styled.table`
  border-radius: 4px;
  border-collapse: collapse;
  width: 100%;
  color: ${(p) => p.TextColor};
  max-height: 500px;
`;

export const TableBody = styled.tbody``;
export const TableHead = styled.thead``;
export const TableHeadRow = styled.tr``;
export const TableRow = styled.tr``;

export const TableHeading = styled.th`
  padding-bottom: 20px;
  font-size: 15px;
  letter-spacing: 1px;
  color: #a7aaad;
  text-align: ${(p) => (p.rightAlign ? "center" : "left")};
  width: ${(p) => (p.fixedWidth ? "150px" : "")};
`;

export const TableData = styled.td`
  font-size: 15px;
  color: #fff;
  padding-bottom: 17.5px;
  text-align: left;
  width: ${(p) => (p.fixedWidth ? "150px" : "")};
`;

export const ActivePill = styled.div`
  padding: 3px 0px;
  background-color: #3ba55c;
  border-radius: 10px;
  text-align: center;
  width: "150px";
`;

export const ConnectionPill = styled.div`
  padding: 2px 5px;
  background-color: #7289da;
  border-radius: 5px;
  text-align: center;
  margin: 0px 5px;
  cursor: pointer;
  width: 100px;
`;

export const DisconnectionPill = styled.div`
  padding: 2px 5px;
  background-color: #3ba55c;
  border-radius: 5px;
  text-align: center;
  margin: 0px 5px;
  width: 100px;
  cursor: pointer;
`;

export const ConnectionPillDisabled = styled.div`
  padding: 2px 5px;
  background-color: #7289da;
  border-radius: 5px;
  text-align: center;
  margin: 0px 5px;
  cursor: default;
`;

export const RemovePill = styled.div`
  padding: 2px 5px;
  background-color: #ed4245;
  border-radius: 5px;
  text-align: center;
  margin: 0px 5px;
  cursor: pointer;
`;

export const InactivePill = styled.div`
  padding: 2px 5px;
  background-color: #2e3338;
  border-radius: 5px;
  text-align: center;
  margin: 0px 5px;
  cursor: default;
`;

export const ConnectionsContainer = styled.div`
  padding: 30px 45px;
  background-color: #23272a;
  border-radius: 15px;
`;

export const CreatePill = styled.div`
  padding: 6px 15px;
  background-color: #7289da;
  border-radius: 7.5px;
  text-align: center;
  width: auto;
  font-weight: 550;
  letter-spacing: 1px;
  text-transform: capitalize;
  &:hover {
    cursor: pointer;
    background-color: #677bc4;
    transition: 0.25s ease-in all;
  }
`;
