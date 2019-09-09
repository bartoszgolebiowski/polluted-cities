import React from "react";
import {Layout} from 'antd';
import './PollutionHeader.css'
import {HEADER_TEXT} from "../../constants/general";
const {Header} = Layout;

const PollutionHeader = () => {
    return (
        <Header className="pollution-header">
            {HEADER_TEXT}
        </Header>
    )
};

export default PollutionHeader;