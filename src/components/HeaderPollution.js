import React from "react";
import {Layout} from 'antd';
import '../styles/HeaderPollution.css'
import {string} from "prop-types";

const HeaderPollution = (props) => {
    return (
        <Layout.Header className="pollution-header">
            {props.inscription}
        </Layout.Header>
    )
};

HeaderPollution.propTypes = {
    inscription: string.isRequired
};


export default HeaderPollution;