import React from 'react'
import {AutoComplete, Button, Form, Select} from "antd";
import {COUNTRIES, COUNTRIES_CODE_MAP, PARAMETERS} from "../../constants/general";
import PropTypes from "prop-types";
import '../../styles/PollutionForm.css'

const {Option} = Select;

export const processInput = (props, values) => {
    const {country, parameter} = values;
    if (COUNTRIES.includes(country) && PARAMETERS.includes(parameter)) {
        localStorage.setItem('country', country);
        localStorage.setItem('parameter', parameter);
        props.setFormData({
            country: COUNTRIES_CODE_MAP.get(country),
            parameter
        })
    } else if (!COUNTRIES.includes(country)) {
        props.form.setFields({
            country: {value: country, errors: [new Error('Unhandled Country')]},
        })
    } else {
        props.form.setFields({
            parameter: {value: parameter, errors: [new Error('Unhandled Parameter')]},
        })
    }
};

export const handleSubmit = (props, event) => {
    event.preventDefault();
    props.form.validateFields((err, values) => {
        processInput(props, values);
    });
};

const pollutionForm = (props) => {
    const {getFieldDecorator} = props.form;

    return (
        <Form className="pollution-form" layout="inline" onSubmit={(event) => handleSubmit(props, event)}>
            <Form.Item>
                {getFieldDecorator('country', {
                    initialValue: localStorage.getItem('country'),
                    rules: [{require: true, message: 'Please input country'}]
                })(
                    <AutoComplete
                        dataSource={COUNTRIES}
                        placeholder="Input country"
                        filterOption={(inputValue, option) =>
                            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('parameter', {
                    initialValue: localStorage.getItem('parameter'),
                    rules: [{require: true, message: 'Please input parameter'}]
                })(
                    <Select className="pollution-select-input">
                        {PARAMETERS.map(singleParam =>
                            <Option key={singleParam} value={singleParam}>{singleParam}</Option>
                        )}
                    </Select>
                )}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Find
                </Button>
            </Form.Item>
        </Form>
    )
};


pollutionForm.propTypes = {
    setFormData: PropTypes.func.isRequired
};

const PollutionForm = Form.create({name: 'pollution_form'})(pollutionForm);
export default PollutionForm;

