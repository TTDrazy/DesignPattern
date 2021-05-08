import React from "react";
import "./App.css";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Link } from "react-router-dom";
import { RouterEnum } from "./router/RouterEnum";
export interface IAppProps {}

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class App extends React.Component<IAppProps> {
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed: boolean) => {
        this.setState({ collapsed });
    };

    public render() {
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={[RouterEnum.simpleFactory]} mode="inline">
                        <Menu.Item key={RouterEnum.simpleFactory}>
                            <Link to={RouterEnum.simpleFactory}>
                                <Icon type="shop" />
                                <span>简单工厂模式</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key={RouterEnum.strategy}
                            title={
                                <Link to={RouterEnum.strategy}>
                                    <Icon type="ordered-list" />
                                    <span>策略模式</span>
                                </Link>
                            }
                        >
                            <Menu.Item key="2.1">
                                <Link to={RouterEnum.strategy + "/old"}>
                                    <Icon type="fall" />
                                    <span>旧版</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2.2">
                                <Link to={RouterEnum.strategy}>
                                    <Icon type="rise" />
                                    <span>新版</span>
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key={RouterEnum.decorator}
                            title={
                                <Link to={RouterEnum.decorator}>
                                    <Icon type="border-outer" />
                                    <span>装饰模式</span>
                                </Link>
                            }
                        >
                            <Menu.Item key="3.1">
                                <Link to={RouterEnum.decorator + "/old"}>
                                    <Icon type="fall" />
                                    <span>旧版</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3.2">
                                <Link to={RouterEnum.decorator}>
                                    <Icon type="rise" />
                                    <span>新版</span>
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key={RouterEnum.prototype}>
                            <Link to={RouterEnum.prototype}>
                                <Icon type="import" />
                                <span>原型模式</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={RouterEnum.singleton}>
                            <Link to={RouterEnum.singleton}>
                                <Icon type="minus" />
                                <span>单例模式</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={RouterEnum.observer}>
                            <Link to={RouterEnum.observer}>
                                <Icon type="eye" />
                                <span>观察者模式</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key={RouterEnum.chainOfResponsibility}
                            title={
                                <Link to={RouterEnum.chainOfResponsibility}>
                                    <Icon type="cluster" />
                                    <span>责任链模式</span>
                                </Link>
                            }
                        >
                            <Menu.Item key="7.1">
                                <Link to={RouterEnum.chainOfResponsibility + "/old"}>
                                    <Icon type="fall" />
                                    <span>旧版</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="7.2">
                                <Link to={RouterEnum.chainOfResponsibility}>
                                    <Icon type="rise" />
                                    <span>新版</span>
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key={RouterEnum.bridge}>
                            <Link to={RouterEnum.bridge}>
                                <Icon type="column-width" />
                                <span>桥接模式</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key={RouterEnum.command}
                            title={
                                <Link to={RouterEnum.command}>
                                    <Icon type="code" />
                                    <span>命令模式</span>
                                </Link>
                            }
                        >
                            <Menu.Item key="9.1">
                                <Link to={RouterEnum.command + "/old"}>
                                    <Icon type="fall" />
                                    <span>旧版</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="9.2">
                                <Link to={RouterEnum.command}>
                                    <Icon type="rise" />
                                    <span>新版</span>
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key={RouterEnum.memento}
                            title={
                                <Link to={RouterEnum.memento}>
                                    <Icon type="container" />
                                    <span>备忘录模式</span>
                                </Link>
                            }
                        >
                            <Menu.Item key="10.1">
                                <Link to={RouterEnum.memento + "/old"}>
                                    <Icon type="fall" />
                                    <span>旧版</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="10.2">
                                <Link to={RouterEnum.memento}>
                                    <Icon type="rise" />
                                    <span>新版</span>
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key={RouterEnum.factory}>
                            <Link to={RouterEnum.factory}>
                                <Icon type="shop" />
                                <span>工厂模式</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={RouterEnum.abstractFactory}>
                            <Link to={RouterEnum.abstractFactory}>
                                <Icon type="shop" />
                                <span>抽象工厂模式</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={RouterEnum.adapater}>
                            <Link to={RouterEnum.adapater}>
                                <Icon type="api" />
                                <span>适配器模式</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={RouterEnum.agency}>
                            <Link to={RouterEnum.agency}>
                                <Icon type="block" />
                                <span>代理模式</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={RouterEnum.template}>
                            <Link to={RouterEnum.template}>
                                <Icon type="copy" />
                                <span>模板模式</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={RouterEnum.facade}>
                            <Link to={RouterEnum.facade}>
                                <Icon type="skin" />
                                <span>外观/门面模式</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={RouterEnum.builder}>
                            <Link to={RouterEnum.builder}>
                                <Icon type="scissor" />
                                <span>建造者模式</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={RouterEnum.unknown}>
                            <Link to={RouterEnum.unknown}>
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
                            textAlign: "center",
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
                                minHeight: 360,
                            }}
                        >
                            {this.props.children ? this.props.children : <div style={{ textAlign: "center" }}>欢迎学习设计模式</div>}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>Design ©2019 Created by Drazy</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;
