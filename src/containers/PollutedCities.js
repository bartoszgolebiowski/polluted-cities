import React from "react";

import {Layout} from 'antd';
const {Content} = Layout;

const pollutedCities = (props) => {
    return (
        <Layout className="layout">
            <Content style={{padding: '0 50px', minHeight: 830}}>
                <div style={{background: '#abcdef', padding: 24, minHeight: 250, border: "solid", borderWidth: '1px'}}>
                    Content
                </div>
            </Content>
        </Layout>
    )
};

export default pollutedCities;