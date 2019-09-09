import React from "react";
import {
    DESCRIPTION,
} from "../../constants/general";
import './PollutionCard.css'
import {Card} from "antd";
import PollutionForm from "../PollutionForm/PollutionForm";
import PropTypes from "prop-types";

const PollutionCard = (props) => {
    return (
        <div className="pollution-card-container">
            <Card title={DESCRIPTION} bordered={true} style={{ height: 150, width: 400 }}>
                <PollutionForm
                    setFormData={props.setFormData}
                />
            </Card>
        </div>
    )
};

PollutionCard.propTypes = {
    setFormData: PropTypes.func.isRequired
};

export default PollutionCard;