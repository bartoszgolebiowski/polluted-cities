import React from "react";
import {Layout} from "antd";
import '../../styles/PollutionFooter.css'
import {FOOTER_TEXT} from "../../constants/general";

const {Footer} = Layout;

const PollutionFooter = () => {
    return (
        <Footer className="pollution-footer">
            {FOOTER_TEXT}
        </Footer>
    )
};

export default PollutionFooter;