import { Outlet } from 'react-router-dom';
import { SidebarWrapper } from '..';

const Layout = ({ children }) => {
    return (
        <SidebarWrapper>
            {children}
            <Outlet />
        </SidebarWrapper>
    );
};

export default Layout;
