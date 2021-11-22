// ==> External Imports
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout, Typography } from 'antd'
import 'antd/dist/antd.css'

// ==> Internal Imports
import SideMenu from './Components/SideMenu'
import routes from './Routes/routes'
import './App.css'

const { Header, Footer, Content } = Layout
const { Title } = Typography

function App() {
  return (
    <Router>
      <Layout>
        <SideMenu />
        <Layout style={{ height: '100vh' }}>
          <Header
            className="site-layout-sub-header-background"
            style={{ background: '#1890ff' }}
          >
            <Title
              style={{ color: '#fff', textAlign: 'center', margin: '5px' }}
            >
              Welcome John Doe
            </Title>
          </Header>
          <Content>
            <Switch>
              {routes.map((route, index) => {
                return (
                  <Route
                    exact={true}
                    path={route.path}
                    key={route.title}
                    component={route.component}
                  />
                )
              })}
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ©2021 Created by Kelvin Sudani
          </Footer>
        </Layout>
      </Layout>
    </Router>
  )
}

export default App
