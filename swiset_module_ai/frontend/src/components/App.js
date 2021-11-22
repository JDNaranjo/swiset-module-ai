import React, { Component } from "react";
import { render } from "react-dom";
import { Button, Layout, Menu, PageHeader } from 'antd';
import { Select, Input } from 'antd';
import "antd/dist/antd.css";
import "./App.css"

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default class App extends Component {
    constructor(props){
        super(props)
    }

    handleClick = e => {
        console.log("Click", e);
    }

    render(){
        return (
            <div>
                <Layout style={{ height: "100vh", padding: 0 }}>
                    <Sider
                    width={200}
                    className="site-layout-background"
                    style={{ boxShadow: "rgba(53, 65, 143, 0.16) 0px 2px 27px 0px" }}>
                        <Menu
                        onClick={this.handleClick}
                        style={{ height: "100%", borderRight: 0 }}
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        theme="dark">
                            <Menu.Item key="1">Visualizacion</Menu.Item>
                            <Menu.Item key="2">Prediccion</Menu.Item>
                            <Menu.Item key="3">Reportes</Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: "0" }}>
                        <Content
                        className="site-layout-background"
                        style={{
                        padding: 0,
                        margin: 0,
                        minHeight: 280,
                        }}
                    >
                            <PageHeader
                                className="site-page-header"
                                title="Prediccion del valor de un trade"
                                style={{backgroundColor: "white"}}
                            />
                            <div className="form">
                                <div className="form-title">
                                    <label> Informacion del trade </label>
                                </div>
                                <hr className="separate"/>
                                <div className="register">
                                    <div className="register-title">
                                        <label> Registrar </label>
                                    </div>
                                    <hr/>
                                    <div className="register-fields">
                                        <div className="form-row">
                                            <div className="row-field"> 
                                                <p className="in-title">Side</p>
                                                <Select
                                                    showSearch
                                                    style={{ width: '100%' }}
                                                    placeholder="Sell/Buy"
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) =>
                                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                    }
                                                >
                                                    <Option value="sell" >Sell</Option>
                                                    <Option value="buy" >Buy</Option>
                                                </Select>
                                            </div>
                                            <div className="row-field">
                                                <p className="in-title">Tiempo de operacion (Dias)</p>
                                                <Input
                                                id= "operationTime"
                                                name= "Operation Time"
                                                placeholder="###"
                                                type= "text"
                                                />
                                            </div>
                                            <div className="row-field">
                                                <p className="in-title">Precio del stop loss</p>
                                                <Input
                                                id= "stopLossPrice"
                                                name= "Stop Loss Price"
                                                placeholder="###"
                                                type= "text"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="row-field"> 
                                                <p className="in-title">Precio de entrada</p>
                                                <Input
                                                id= "inputPrice"
                                                name= "Input Price"
                                                placeholder="###"
                                                type= "text"
                                                />
                                            </div>
                                            <div className="row-field">
                                                <p className="in-title">Precio de Salida</p>
                                                <Input
                                                id= "outputPrice"
                                                name= "Output Price"
                                                placeholder="###"
                                                type= "text"
                                                />
                                            </div>
                                            <div className="row-field">
                                                <p className="in-title">Pip value</p>
                                                <Input
                                                id= "pipValue"
                                                name= "Pip Value"
                                                placeholder="###"
                                                type= "text"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="row-field"> 
                                                <p className="in-title">Porcentaje de riesgo</p>
                                                <Input
                                                id= "riskPercentage"
                                                name= "Risk Percentage"
                                                placeholder="###"
                                                type= "text"
                                                />
                                            </div>
                                            <div className="row-field">
                                                <p className="in-title">Comisiones</p>
                                                <Input
                                                id= "comissions"
                                                name= "Comissions"
                                                placeholder="###"
                                                type= "text"
                                                />
                                            </div>
                                            <div className="row-field">
                                                <p className="in-title">Nombre de la accion</p>
                                                <Input
                                                id= "actionName"
                                                name= "Action Name"
                                                placeholder="ABC"
                                                type= "text"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="row-field"> 
                                                <p className="in-title">Mercado</p>
                                                <Select
                                                    showSearch
                                                    style={{ width: '100%' }}
                                                    placeholder="ABC"
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) =>
                                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                    }
                                                >
                                                    <Option value="mercado1" >Mercado 1</Option>
                                                    <Option value="mercado2" >Mercado 2</Option>
                                                    <Option value="mercado3" >Mercado 3</Option>
                                                    <Option value="mercado4" >Mercado 4</Option>
                                                    <Option value="mercado5" >Mercado 5</Option>
                                                    <Option value="mercado6" >Mercado 6</Option>
                                                </Select>
                                            </div>
                                            <div className="row-field">
                                                <p className="in-title">Tipo</p>
                                                <Select
                                                    showSearch
                                                    style={{ width: '100%' }}
                                                    placeholder="Live/Demo"
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) =>
                                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                    }
                                                >
                                                    <Option value="live" >Live</Option>
                                                    <Option value="demo" >Demo</Option>
                                                </Select>
                                            </div>
                                            <div className="row-field">
                                                <p className="in-title">Automatizado</p>
                                                <Select
                                                    showSearch
                                                    style={{ width: '100%' }}
                                                    placeholder="Si/No"
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) =>
                                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                    }
                                                >
                                                    <Option value="yes" >Si</Option>
                                                    <Option value="no" >No</Option>
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="form-row-two">
                                            <div className="row-field"> 
                                                <p className="in-title">Tipo de usuario</p>
                                                <Select
                                                    showSearch
                                                    style={{ width: '100%' }}
                                                    placeholder="ABC"
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) =>
                                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                    }
                                                >
                                                    <Option value="mercado1" >Tipo 1</Option>
                                                    <Option value="mercado2" >Tipo 2</Option>
                                                    <Option value="mercado3" >Tipo 3</Option>
                                                    <Option value="mercado4" >Tipo 4</Option>
                                                    <Option value="mercado5" >Tipo 5</Option>
                                                    <Option value="mercado6" >Tipo 6</Option>
                                                </Select>
                                            </div>
                                            <div className="row-field">
                                                <p style={{color: "white"}}> Predecir </p>
                                                <Button className="full-btn" type="primary">Predecir Precio</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="net-profit">
                                    <div className="register-title">
                                        <label> Net Profit </label>
                                    </div>
                                    <hr/>
                                    <label className="net-profit-lbl">$$$.$$$.$$$.$$$</label>
                                </div>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }

}

const appDiv = document.getElementById("app");
render(<App/>, appDiv);