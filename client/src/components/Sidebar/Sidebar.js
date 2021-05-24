import * as s from "./Sidebar.styles";

const Sidebar = ({
  menuItems = [],
  selectedMenuItem,
  updateMenuItem,
  ActiveConnection,
  changeSelectedTable,
  tables = [],
}) => {
  const menuItemsJSX = menuItems.map((item, index) => {
    const connectionActive = ActiveConnection !== null;
    const isSelected = selectedMenuItem === item.name;
    return (
      <>
        {connectionActive || item.name === `Connections` ? (
          <s.MenuItem
            key={index}
            selected={isSelected}
            menuItem={item.name}
            onClick={() => {
              updateMenuItem(index);
            }}
          >
            <s.Icon src={item.icon}></s.Icon>
            <s.Item>{item.name}</s.Item>
          </s.MenuItem>
        ) : (
          <s.MenuItemDisabled key={index} menuItem={item.name}>
            <s.Icon src={item.icon}></s.Icon>
            <s.Item>{item.name}</s.Item>
          </s.MenuItemDisabled>
        )}
      </>
    );
  });

  const TablesJSX = tables.map((table, index) => {
    return (
      <s.MenuItem
        key={index}
        menuItem={table.name}
        onClick={() => {
          changeSelectedTable(table.name);
        }}
      >
        <s.Item>{table.name}</s.Item>
      </s.MenuItem>
    );
  });

  return (
    <s.SidebarContainer>
      <s.SidebarHeader></s.SidebarHeader>
      <s.MenuItemContainer>
        {menuItemsJSX}
        <s.MenuItemTableContainer>
          <s.MenuItemHeading>Tables</s.MenuItemHeading>
          <s.MenuItemTables>
            {tables.length > 0 ? (
              <>{TablesJSX}</>
            ) : (
              <>
                <s.HeaderItem
                  style={{ textAlign: "center", marginTop: "25px" }}
                >
                  No Tables To Display.
                </s.HeaderItem>
              </>
            )}
          </s.MenuItemTables>
        </s.MenuItemTableContainer>
      </s.MenuItemContainer>
    </s.SidebarContainer>
  );
};

export default Sidebar;
