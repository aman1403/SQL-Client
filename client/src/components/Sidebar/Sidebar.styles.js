import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
  flex: 0 0 250px;
  height: 100%;
  color: #fff;
  background-color: #2c2f33;
`;

export const SidebarHeader = styled.h3`
  padding: 20px 0;
  margin-bottom: 5px;
  text-align: left;
`;

export const HeaderItem = styled.div`
  padding: 0px 20px;
  font-size: 15px;
  font-weight: 200;
  margin: 10px 0;
`;

export const MenuItemContainer = styled.div`
  margin: 10px;
`;

export const MenuItem = styled.div`
  text-align: left;
  padding: 15px 20px;
  font-weight: 400;
  letter-spacing: 1px;
  color: ${(p) => (p.selected ? "#fff" : "#c8c9ca")};
  background-color: ${(p) => (p.selected ? "rgb(57,60,67,0.65)" : "")};
  border-radius: 5px;
  margin: 10px 0;

  &:hover {
    color: #fff;
    transition: 0.05s ease-in all;
    cursor: ${(p) =>
      p.menuItem !== `Tables` ? (p.selected ? "default" : "pointer") : ""};
    background-color: ${(p) => (p.selected ? "" : "rgb(57,60,67,0.65)")};
  }
`;

export const MenuItemDisabled = styled.div`
  text-align: left;
  padding: 15px 20px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #c8c9ca;
  border-radius: 5px;
  margin: 10px 0;

  &:hover {
    transition: 0.05s ease-in all;
    cursor: ${(p) =>
      p.menuItem !== `Tables` ? (p.selected ? "default" : "not-allowed") : ""};
    background-color: ${(p) => (p.selected ? "" : "rgb(57,60,67,0.65)")};
  }
`;

export const Item = styled.p`
  display: inline;
`;

export const Icon = styled.img`
  height: 20px;
  width: 20px;
  padding-right: 20px;
  color: #fff;
`;

export const MenuItemTableContainer = styled.div``;

export const MenuItemHeading = styled.div`
  text-align: left;
  padding: 15px 20px;
  font-weight: 400;
  letter-spacing: 1px;
  color: ${(p) => (p.selected ? "#fff" : "#c8c9ca")};
  background-color: ${(p) => (p.selected ? "#393c43" : "")};
  border-radius: 5px;
  margin: 10px 0;
  cursor: default;
`;

export const MenuItemTables = styled.div`
  min-height: 100px;
  margin: 0px 10px;
  padding: 7px 25px;
  background-color: #23272a;
  border-radius: 10px;
`;
