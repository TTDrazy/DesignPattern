import React from "react";
import "./App.css";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Link } from "react-router-dom";
export interface IAppProps {}

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class App extends React.Component<IAppProps> {
    state = {
        collapsed: false
    };
    onCollapse = (collapsed: boolean) => {
        this.setState({ collapsed });
    };

    public render() {
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
                        <SubMenu
                            key="2"
                            title={
                                <Link to="/strategy">
                                    <Icon type="ordered-list" />
                                    <span>策略模式</span>
                                </Link>
                            }
                        >
                            <Menu.Item key="2.1">
                                <Link to="/strategy/old">
                                    <Icon type="fall" />
                                    <span>旧版</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2.2">
                                <Link to="/strategy">
                                    <Icon type="rise" />
                                    <span>新版</span>
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="3"
                            title={
                                <Link to="/strategy">
                                    <Icon type="border-outer" />
                                    <span>装饰模式</span>
                                </Link>
                            }
                        >
                            <Menu.Item key="3.1">
                                <Link to="/decorator/old">
                                    <Icon type="fall" />
                                    <span>旧版</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3.2">
                                <Link to="/decorator">
                                    <Icon type="rise" />
                                    <span>新版</span>
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="4">
                            <Link to="/prototype">
                            <Icon type="import" />
                                <span>原型模式</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to="/singleton">
                            <Icon type="minus" />
                                    <span>单例模式</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="24">
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
