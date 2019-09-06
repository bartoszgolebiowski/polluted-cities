import React from "react";
import {Layout} from 'antd';
import '../styles/Header.css'

const pollutionHeader = (props) => {
    return (
        <Layout.Header className="pollution-header">
            {props.inscription}
        </Layout.Header>
    )
};

export default pollutionHeader;