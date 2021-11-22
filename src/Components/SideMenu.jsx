import React from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Menu, Typography } from 'antd'
import Icon from '@ant-design/icons'

import routes from '../Routes/routes'

const { Title } = Typography
const { Sider } = Layout

const SideMenu = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken)
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type)
      }}
      style={{ height: '100vh' }}
    >
      <Title
        level={3}
        className="logo"
        style={{ color: '#fff', textAlign: 'center' }}
      >
        BookMyDoc
      </Title>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['Doctors']}>
        {routes.map((route, index) => {
          return (
            <>
              {route.visibleOnMenu && (
                <Menu.Item
                  key={route.title}
                  icon={<Icon component={route.icon} />}
                >
                  <NavLink to={route.path}>{route.title}</NavLink>
                </Menu.Item>
              )}
            </>
          )
        })}
      </Menu>
    </Sider>
  )
}

export default SideMenu
