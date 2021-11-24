import React, { Component } from "react";
import { render } from "react-dom";
import { Button, Layout, Menu, PageHeader } from 'antd';
import { Select, Input } from 'antd';
import "antd/dist/antd.css";
import "./App.css"

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

var dataGET = "";

const assetNames = ['#ALIBABA', '#AMAZON', '#APPLE', '#BA', '#CISCO', '#CSCO', '#GOOGLE', '#MICROSOFT', '#NETFLIX', '#NIKE', '#OXY', '#PFIZER', '#TESLA', '#TSLA', '#TWTR', '#VISA', '6A 06-21', '6B 03-21', '6B 06-21', '6C 06-21', '6E 03-21', '6E 06-21', '6E 09-20', '6E 12-20', 'AMEX', 'AUD/CAD', 'AUD/CHF', 'AUD/JPY', 'AUD/NZD', 'AUD/USD', 'Advanced Micro Devices Inc', 'Apple', 'Apple Inc.', 'BRENT_OIL', 'BTC 03-21', 'BTC 05-21', 'BTC 06-21', 'BTCUSD', 'Boeing', 'CAD/CHF', 'CAD/JPY', 'CHF/JPY', 'CHINA_A50', 'CITIGROUP', 'CL 01-21', 'CL 02-21', 'CL 03-21', 'CL 04-21', 'CL 05-21', 'CL 06-21', 'CL 07-21', 'CL 08-21', 'CL 09-20', 'CL 10-20', 'CL 11-20', 'CL 12-20', 'COFFEE_C', 'COPPER', 'CORN', 'COTTON#2', 'CRUDEOIL', 'Cosan', 'DAX30', 'DJ30', 'DOLLAR_INDX', 'E-micro S&P 500 03-21', 'E-micro S&P 500 06-20', 'E-micro S&P 500 09-20', 'E-micro S&P 500 09-21', 'E-micro S&P 500 12-20', 'E-mini Nasdaq-100 03-21', 'E-mini Nasdaq-100 06-20', 'E-mini Nasdaq-100 09-20', 'E-mini Nasdaq-100 09-21', 'E-mini Nasdaq-100 12-20', 'E-mini Nasdaq-100 12-21', 'E-mini Russell 2000 Index 03-21', 'E-mini Russell 2000 Index 09-20', 'E-mini Russell 2000 Index 09-21', 'E-mini Russell 2000 Index 12-20', 'E-mini S&P 500 03-21', 'E-mini S&P 500 06-20'];

const assetNames2 = ['E-mini S&P 500 09-20', 'E-mini S&P 500 09-21', 'E-mini S&P 500 12-20', 'E-mini S&P 500 12-21', 'EOSUSD', 'ES 03-17', 'ES 03-18', 'ES 03-19', 'ES 03-20', 'ES 06-18', 'ES 06-19', 'ES 06-21', 'ES 09-19', 'ES 12-18', 'ES 12-19', 'ETHUSD', 'EUR/AUD', 'EUR/CAD', 'EUR/CHF', 'EUR/GBP', 'EUR/HKD', 'EUR/JPY', 'EUR/NOK', 'EUR/NZD', 'EUR/PLN', 'EUR/SEK', 'EUR/TRY', 'EUR/USD', 'EUR/ZAR', 'FDAX 03-21', 'FDAX 06-21', 'FDXM 03-21', 'FDXM 06-21', 'FTSE100', 'GASOLINE', 'GBP/AUD', 'GBP/CAD', 'GBP/CHF', 'GBP/DKK', 'GBP/JPY', 'GBP/NOK', 'GBP/NZD', 'GBP/SEK', 'GBP/SGD', 'GBP/USD', 'GBP/ZAR', 'GBPJPY-Z', 'GC 02-21', 'GC 04-21', 'GC 06-21', 'GC 08-20', 'GC 08-21', 'GC 12-20', 'GER30', 'GOLD', 'Gerdau', 'HEATING_OIL', 'HK50ROLL', 'Intel Corp.', 'LTCUSD', 'M6A 06-21', 'M6E 06-21', 'M6E 09-20', 'MBT 05-21', 'MES 03-20', 'MES 06-21', 'MGC 04-21', 'MGC 06-21', 'MGC 08-21', 'MICROSOFT', 'MNQ 03-20', 'MNQ 06-21', 'MYM 03-21', 'MYM 06-21', 'MYM 12-20', 'Micro E-mini Nasdaq-100 03-21', 'Micro E-mini Nasdaq-100 06-20', 'Micro E-mini Nasdaq-100 09-20', 'Micro E-mini Nasdaq-100 09-21', 'Micro E-mini Nasdaq-100 12-20', 'Micro E-mini Russell 2000 03-21', 'Micro E-mini Russell 2000 09-20', 'Micro E-mini Russell 2000 09-21', 'Micro E-mini Russell 2000 12-20', 'NAS100', 'NASDAQ100', 'NATURAL_GAS', 'NG 02-21', 'NG 03-21', 'NG 07-21', 'NIKKEI225', 'NQ 03-16', 'NQ 03-19', 'NQ 03-20', 'NQ 06-21', 'NQ 12-19', 'NZD/CAD', 'NZD/CHF', 'NZD/JPY', 'NZD/USD', 'Netflix', 'PLATINUM', 'QM 06-21', 'QM 07-21', 'RTY 06-21', 'RUSS2000', 'RUSSELL2000', 'S&P 500', 'S&P500', 'SGD/JPY', 'SI 03-21', 'SI 05-21', 'SI 12-20', 'SILVER', 'SOYBEAN', 'SPA35', 'SPAIN35', 'Twitter', 'UB 03-21', 'UB 06-21', 'UB 09-21', 'UB 12-20', 'US30', 'US30Z0', 'US500', 'US500ROLL', 'US500Z0', 'USD/CAD', 'USD/CHF', 'USD/DKK', 'USD/HKD', 'USD/JPY', 'USD/MXN', 'USD/NOK', 'USD/SEK', 'USD/SGD', 'USD/TRY', 'USD/ZAR', 'USDCNY', 'USOIL', 'USOILRoll', 'USTEC', 'UT100Z0', 'Volatility 100 (1s) Index', 'Volatility 75 (1s) Index', 'Volatility 75 Index','WHEAT', 'WTI Crude Oil', 'XAGUSD', 'XAUEUR', 'XAUUSD', 'XBTUSD', 'YM 03-21', 'YM 06-21', 'YM 09-20', 'YM 12-20', 'ZB 06-21', 'ZB 09-21', 'ZS 03-21', 'ZS 07-21', '[DAX30]', '[DJI30]', '[NQ100]', '[SP500]', 'eBay Inc.'];

export default class App extends Component {
    constructor(props){
        super(props)

        this.state= {
            id: 0,
            side : "",
            mood: "",
            trade_time : "",
            stop_loss_price : "",
            entry_price : "",
            close_price : "",
            pip_value : "",
            risk_percentage : "",
            monetary_risk : "",
            asset_name : "",
            market : "",
            type : "",
            automated : "",
            user_type : "",
            netProfit: "$$$.$$$.$$$.$$$",
        };

        this.handleClickPredict = this.handleClickPredict.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSide = this.handleSide.bind(this);
        this.handleOperationTime = this.handleOperationTime.bind(this);
        this.handleStopLossPrice = this.handleStopLossPrice.bind(this);
        this.handleInputPrice = this.handleInputPrice.bind(this);
        this.handleOutputPrice = this.handleOutputPrice.bind(this);
        this.handlePipValue = this.handlePipValue.bind(this);
        this.handleRiskPercentage = this.handleRiskPercentage.bind(this);
        this.handleComissions = this.handleComissions.bind(this);
        this.handleActionName = this.handleActionName.bind(this);
        this.handleMarket = this.handleMarket.bind(this);
        this.handleTypeTrade = this.handleTypeTrade.bind(this);
        this.handleAuto = this.handleAuto.bind(this);
        this.handleMood = this.handleMood.bind(this);
        this.handleUserType = this.handleUserType.bind(this);
    }

    handleClick = e => {
        console.log("Click", e);
    }

    handleSide(event) { this.setState({ side: event }); console.log(event) }

    handleOperationTime(event) { this.setState({ trade_time: event.target.value }) }

    handleStopLossPrice(event) { this.setState({ stop_loss_price: event.target.value }) }

    handleInputPrice(event) { this.setState({ entry_price: event.target.value }) }

    handleOutputPrice(event) { this.setState({ close_price: event.target.value }) }

    handlePipValue(event) { this.setState({ pip_value: event.target.value }) }

    handleRiskPercentage(event) { this.setState({ risk_percentage: event.target.value }) }

    handleComissions(event) { this.setState({ monetary_risk: event.target.value }) }

    handleActionName(event) { this.setState({ asset_name: event }); console.console.log(event, this.state.asset_name); }

    handleMarket(event) { this.setState({ market: event }) }

    handleTypeTrade(event) { this.setState({ type: event }) }

    handleAuto(event) { this.setState({ automated: event }) }

    handleMood(event) { this.setState({ mood: event }) }

    handleUserType (event){ this.setState({ user_type: event }), console.log(this.state) }

    async handleClickPredict() { 
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                side: this.state.side,
                mood: this.state.mood,
                trade_time: this.state.trade_time,
                stop_loss_price: this.state.stop_loss_price,
                entry_price: this.state.entry_price,
                close_price: this.state.close_price,
                pip_value: this.state.pip_value,
                risk_percentage: this.state.risk_percentage,
                monetary_risk: this.state.monetary_risk,
                asset_name: this.state.asset_name,
                market: this.state.market,
                type: this.state.type,
                automated: this.state.automated,
                user_type: this.state.user_type
            })
        }

        await fetch('/api/netprofit/', requestOptions).then( (response) => response.json() ).then( (data) => console.log(data) );

        await fetch('/api/trade').then( (response) => response.json() ).then( (trades) => dataGET = trades );

        var lastTrade = dataGET[dataGET.length-1];

        this.setState(lastTrade);

        console.log(lastTrade.netProfit);

        console.log(this.state.netProfit);

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
                        defaultSelectedKeys={['2']}
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
                                                    onChange={this.handleSide}
                                                >
                                                    <Option value="SELL" >Sell</Option>
                                                    <Option value="BUY" >Buy</Option>
                                                </Select>
                                            </div>
                                            <div className="row-field">
                                                <p className="in-title">Tiempo de operacion</p>
                                                <Input
                                                id= "trade_time"
                                                name= "Trade Time"
                                                placeholder="###"
                                                type= "text"
                                                onChange={this.handleOperationTime}
                                                />
                                            </div>
                                            <div className="row-field">
                                                <p className="in-title">Precio del stop loss</p>
                                                <Input
                                                id= "stop_loss_price"
                                                name= "Stop Loss Price"
                                                placeholder="###"
                                                type= "text"
                                                onChange={this.handleStopLossPrice}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="row-field"> 
                                                <p className="in-title">Precio de entrada</p>
                                                <Input
                                                id= "entry_price"
                                                name= "Input Price"
                                                placeholder="###"
                                                type= "text"
                                                onChange={this.handleInputPrice}
                                                />
                                            </div>
                                            <div className="row-field">
                                                <p className="in-title">Precio de Salida</p>
                                                <Input
                                                id= "close_price"
                                                name= "Output Price"
                                                placeholder="###"
                                                type= "text"
                                                onChange={this.handleOutputPrice}
                                                />
                                            </div>
                                            <div className="row-field">
                                                <p className="in-title">Pip value</p>
                                                <Input
                                                id= "pip_value"
                                                name= "Pip Value"
                                                placeholder="###"
                                                type= "text"
                                                onChange={this.handlePipValue}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="row-field"> 
                                                <p className="in-title">Porcentaje de riesgo</p>
                                                <Input
                                                id= "risk_percentage"
                                                name= "Risk Percentage"
                                                placeholder="###"
                                                type= "text"
                                                onChange={this.handleRiskPercentage}
                                                />
                                            </div>
                                            <div className="row-field">
                                                <p className="in-title">Riesgo Monetario</p>
                                                <Input
                                                id= "monetary_risk"
                                                name= "Riesgo Monetario"
                                                placeholder="###"
                                                type= "text"
                                                onChange={this.handleComissions}
                                                />
                                            </div>
                                            <div className="row-field">
                                                <p className="in-title">Nombre de la accion</p>
                                                <Select
                                                    showSearch
                                                    style={{ width: '100%' }}
                                                    placeholder="ABC"
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) =>
                                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                    }
                                                    onChange={this.handleActionName}
                                                >
                                                    {
                                                        assetNames.map((name) => (
                                                            <Option value={name} >
                                                                {name}
                                                            </Option>
                                                            )
                                                        )
                                                    }
                                                    {
                                                        assetNames2.map((name) => (
                                                            <Option value={name} >
                                                                {name}
                                                            </Option>
                                                            )
                                                        )
                                                    }
                                                </Select>
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
                                                    onChange={this.handleMarket}
                                                >
                                                    <Option value="Commodities" >Commodities</Option>
                                                    <Option value="Cryptos" >Cryptos</Option>
                                                    <Option value="Forex" >Forex</Option>
                                                    <Option value="Futures" >Futures</Option>
                                                    <Option value="Indices" >Indices</Option>
                                                    <Option value="Stocks" >Stocks</Option>
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
                                                    onChange={this.handleTypeTrade}
                                                >
                                                    <Option value="LIVE" >Live</Option>
                                                    <Option value="DEMO" >Demo</Option>
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
                                                    onChange={this.handleAuto}
                                                >
                                                    <Option value="VERDADERO" >Si</Option>
                                                    <Option value="FALSO" >No</Option>
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="form-row">
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
                                                    onChange={this.handleUserType}
                                                >
                                                    <Option value="CORE_TRADER" >CORE TRADER</Option>
                                                    <Option value="DAY_TRADER" >DAY TRADER</Option>
                                                    <Option value="HIGH_FRECUENCY_TRADER" >HIGH FRECUENCY TRADER</Option>
                                                    <Option value="I_DONT_KNOW" >I DONT KNOW</Option>
                                                    <Option value="SWING_TRADER" >SWING TRADER</Option>
                                                </Select>
                                            </div>
                                            <div className="row-field"> 
                                                <p className="in-title">Mood</p>
                                                <Select
                                                    showSearch
                                                    style={{ width: '100%' }}
                                                    placeholder="ABC"
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) =>
                                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                    }
                                                    onChange={this.handleMood}
                                                >
                                                    <Option value="AGGRESSIVE" >AGRESSIVE</Option>
                                                    <Option value="ANGRY" >ANGRY</Option>
                                                    <Option value="ANXIOUS" >ANXIOUS</Option>
                                                    <Option value="BORED" >BORED</Option>
                                                    <Option value="CAUTIOUS" >CAUTIOUS</Option>
                                                    <Option value="CONCENTRATED" >CONCENTRATED</Option>
                                                    <Option value="CONFIDENT" >CONFIDENT</Option>
                                                    <Option value="EXCITED" >EXCITED</Option>
                                                    <Option value="НАPPY" >НАPPY</Option>
                                                    <Option value="HURT" >HURT</Option>
                                                    <Option value="MAD" >MAD</Option>
                                                    <Option value="NERVOUS" >NERVOUS</Option>
                                                    <Option value="NONE" >NONE</Option>
                                                    <Option value="OPTIMISTIC" >OPTIMISTIC</Option>
                                                    <Option value="RELAXED" >RELAXED</Option>
                                                    <Option value="SAD" >SAD</Option>
                                                    <Option value="SICK" >SICK</Option>
                                                    <Option value="UPSET" >UPSET</Option>
                                                </Select>
                                            </div>
                                            <div className="row-field">
                                                <p style={{color: "white"}}> Predecir </p>
                                                <Button className="full-btn" type="primary" onClick={this.handleClickPredict} >
                                                    Predecir Precio
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="net-profit">
                                    <div className="register-title">
                                        <label> Net Profit </label>
                                    </div>
                                    <hr/>
                                    <label className="net-profit-lbl">{this.state.netProfit}</label>
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