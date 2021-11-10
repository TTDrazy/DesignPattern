import React from "react";
import "./App.css";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Link } from "react-router-dom";
import { RouterEnum } from "./router/RouterEnum";
export interface IAppProps { }

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


interface IMenuItem {
    linkTo: RouterEnum,
    Icon: string,
    text: string
}

interface ISubMenu {
    title: IMenuItem
    menuItemList: IMenuItem[]
}

interface ISider {
    isSubMenu: boolean,
    linkTo?: RouterEnum,
    Icon?: string,
    text?: string
    subMenu?: ISubMenu
}

const siderMenuList: ISider[] = [{
    isSubMenu: false,
    linkTo: RouterEnum.home,
    Icon: 'home',
    text: '介绍'
}, {
    isSubMenu: false,
    linkTo: RouterEnum.simpleFactory,
    Icon: 'shop',
    text: '简单工厂模式'
}, {
    isSubMenu: true,
    subMenu: {
        title: {
            linkTo: RouterEnum.strategy,
            Icon: 'ordered-list',
            text: '策略模式',
        },
        menuItemList: [{
            linkTo: RouterEnum.oldstrategy,
            Icon: 'fall',
            text: '旧版',
        }, {
            linkTo: RouterEnum.strategy,
            Icon: 'rise',
            text: '新版',
        }]
    }
}, {
    isSubMenu: true,
    subMenu: {
        title: {
            linkTo: RouterEnum.decorator,
            Icon: 'border-outer',
            text: '装饰模式',
        },
        menuItemList: [{
            linkTo: RouterEnum.olddecorator,
            Icon: 'fall',
            text: '旧版',
        }, {
            linkTo: RouterEnum.decorator,
            Icon: 'rise',
            text: '新版',
        }]
    }
}, {
    isSubMenu: false,
    linkTo: RouterEnum.prototype,
    Icon: 'import',
    text: '原型模式'
}, {
    isSubMenu: false,
    linkTo: RouterEnum.singleton,
    Icon: 'minus',
    text: '单例模式'
}, {
    isSubMenu: false,
    linkTo: RouterEnum.observer,
    Icon: 'eye',
    text: '观察者模式'
}, {
    isSubMenu: true,
    subMenu: {
        title: {
            linkTo: RouterEnum.chainOfResponsibility,
            Icon: 'cluster',
            text: '责任链模式',
        },
        menuItemList: [{
            linkTo: RouterEnum.oldchainOfResponsibility,
            Icon: 'fall',
            text: '旧版',
        }, {
            linkTo: RouterEnum.chainOfResponsibility,
            Icon: 'rise',
            text: '新版',
        }]
    }
}, {
    isSubMenu: false,
    linkTo: RouterEnum.bridge,
    Icon: 'column-width',
    text: '桥接模式'
}, {
    isSubMenu: true,
    subMenu: {
        title: {
            linkTo: RouterEnum.command,
            Icon: 'code',
            text: '命令模式',
        },
        menuItemList: [{
            linkTo: RouterEnum.oldcommand,
            Icon: 'fall',
            text: '旧版',
        }, {
            linkTo: RouterEnum.command,
            Icon: 'rise',
            text: '新版',
        }]
    }
}, {
    isSubMenu: true,
    subMenu: {
        title: {
            linkTo: RouterEnum.memento,
            Icon: 'container',
            text: '备忘录模式',
        },
        menuItemList: [{
            linkTo: RouterEnum.oldmemento,
            Icon: 'fall',
            text: '旧版',
        }, {
            linkTo: RouterEnum.memento,
            Icon: 'rise',
            text: '新版',
        }]
    }
}, {
    isSubMenu: false,
    linkTo: RouterEnum.factory,
    Icon: 'shop',
    text: '工厂模式'
}, {
    isSubMenu: false,
    linkTo: RouterEnum.abstractFactory,
    Icon: 'shop',
    text: '抽象工厂模式'
}, {
    isSubMenu: false,
    linkTo: RouterEnum.adapater,
    Icon: 'api',
    text: '适配器模式'
}, {
    isSubMenu: false,
    linkTo: RouterEnum.agency,
    Icon: 'block',
    text: '代理模式'
}, {
    isSubMenu: false,
    linkTo: RouterEnum.template,
    Icon: 'copy',
    text: '模板模式'
}, {
    isSubMenu: false,
    linkTo: RouterEnum.facade,
    Icon: 'skin',
    text: '外观/门面模式'
}, {
    isSubMenu: false,
    linkTo: RouterEnum.builder,
    Icon: 'scissor',
    text: '建造者模式'
}, {
    isSubMenu: false,
    linkTo: RouterEnum.combination,
    Icon: 'apartment',
    text: '组合模式'
}, {
    isSubMenu: false,
    linkTo: RouterEnum.status,
    Icon: 'alert',
    text: '状态模式'
}, {
    isSubMenu: false,
    linkTo: RouterEnum.iterator,
    Icon: 'retweet',
    text: '迭代器模式'
}, {
    isSubMenu: false,
    linkTo: RouterEnum.mediator,
    Icon: 'smile-o',
    text: '中介者模式'
}, {
    isSubMenu: false,
    linkTo: RouterEnum.unknown,
    Icon: 'question',
    text: '未知'
}]

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
