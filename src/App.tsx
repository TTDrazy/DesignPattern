import React from "react";
import "./App.css";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Link } from "react-router-dom";
export interface IAppProps {}

class App extends React.Component<IAppProps> {
    state = {
        collapsed: false
    };
    onCollapse = (collapsed: boolean) => {
        this.setState({ collapsed });
    };

    public render() {
        const { Header, Content, Footer, Sider } = Layout;
        const { SubMenu } = Menu;
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={["1"]}
                        mode="inline"
                    >
                        <Menu.Item key="1">
                            <Link to="/simpleFactory">
                                <Icon type="shop" />
                                <span>简单工厂</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/unknown">
                                <Icon type="question" />
                                <span>未知</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header
                        style={{
                            background: "#fff",
                            padding: 0,
                            fontSize: "28px",
                            textAlign: "center"
                        }}
                    >
                        设计模式
                    </Header>
                    <Content style={{ margin: "0 16px" }}>
                        <Breadcrumb style={{ margin: "16px 0" }}>
                            <Breadcrumb.Item>设计模式案例</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            style={{
                                padding: 24,
                                background: "#fff",
                                minHeight: 360
                            }}
                        >
                            {this.props.children ? (
                                this.props.children
                            ) : (
                                <div style={{ textAlign: "center" }}>
                                    欢迎学习设计模式
                                </div>
                            )}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Design ©2019 Created by Drazy
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;
