import React from "react";
import "./App.css";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { RouterEnum } from "./router/RouterEnum";
import { IMenuItem, ISider, siderMenuList } from "./SiderMenu";

export interface IAppProps { }

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


// 为了解决 withRoute 的报错
class App extends React.Component<RouteComponentProps<IAppProps>> {
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed: boolean) => {
        this.setState({ collapsed });
    };

    getCurrentPatternName(): string {
        let patternName = ''
        if (this.props.location.pathname !== '/') {
            const pathName = this.props.location.pathname
            siderMenuList.map((item) => {
                if (item.isSubMenu) {
                    item.subMenu!.menuItemList.map((menuItem) => {
                        if (pathName === menuItem.linkTo) {
                            patternName = menuItem.text
                        }
                    })
                }
            })
        }
        return patternName
    }
    public render() {
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={[RouterEnum.home]} defaultOpenKeys={[RouterEnum.factory, RouterEnum.adapater]} mode="inline">
                        {
                            siderMenuList.map((siderItem: ISider) => {
                                let template = (<></>)
                                if (siderItem.isSubMenu) {
                                    template = (
                                        <SubMenu
                                            key={siderItem.subMenu!.title.linkTo}
                                            title={
                                                <Link to={siderItem.subMenu!.title.linkTo}>
                                                    <Icon type={siderItem.subMenu!.title.Icon} />
                                                    <span>{siderItem.subMenu!.title.text}</span>
                                                </Link>
                                            }
                                        >
                                            {siderItem.subMenu!.menuItemList.map((subSiderItem: IMenuItem) => {
                                                return (
                                                    <Menu.Item key={subSiderItem.linkTo}>
                                                        <Link to={subSiderItem.linkTo}>
                                                            <Icon type={subSiderItem.Icon} />
                                                            <span>{subSiderItem.text}</span>
                                                        </Link>
                                                    </Menu.Item>
                                                )
                                            })}
                                        </SubMenu>
                                    )
                                } else {
                                    template = (
                                        <Menu.Item key={siderItem.linkTo}>
                                            <Link to={siderItem.linkTo || ''}>
                                                <Icon type={siderItem.Icon} />
                                                <span>{siderItem.text}</span>
                                            </Link>
                                        </Menu.Item>
                                    )
                                }

                                return template
                            })
                        }
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
                            <Breadcrumb.Item>{this.getCurrentPatternName()}</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            style={{
                                padding: 24,
                                background: "#fff",
                                minHeight: 820,
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

export default withRouter(App);
