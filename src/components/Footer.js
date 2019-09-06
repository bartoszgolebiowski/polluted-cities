import React from "react";
import {Layout} from "antd";
import '../styles/Footer.css'
import PropTypes from 'prop-types'

const Footer = (props) => {
    return (
        <Layout.Footer className="pollution-footer">
            {props.inscription}
        </Layout.Footer>
    )
};

Footer.propTypes = {
    inscription: PropTypes.string.isRequired
};

export default Footer;