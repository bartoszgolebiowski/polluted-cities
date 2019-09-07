import React from "react";
import {Layout} from "antd";
import {string} from 'prop-types';
import '../styles/FooterPollution.css'

const FooterPollution = (props) => {
    return (
        <Layout.Footer className="pollution-footer">
            {props.inscription}
        </Layout.Footer>
    )
};

FooterPollution.propTypes = {
    inscription: string.isRequired
};

export default FooterPollution;