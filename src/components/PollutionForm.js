import React from 'react'
import {AutoComplete, Button, Form, Select} from "antd";
import {COUNTRIES, COUNTRIES_CODE_MAP, PARAMETERS} from "../constants/general";
import '../styles/PollutionForm.css'
import {func} from "prop-types";

const {Option} = Select;

const pollutionForm = (props) => {
    const {getFieldDecorator} = props.form;

    const handleSubmit = (event) => {
        event.preventDefault();
        props.form.validateFields((err, values) => {
            const {country, parameter} = values;
            if (COUNTRIES.includes(country) && PARAMETERS.includes(parameter)) {
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
        });
    };

    return (
        <Form layout="inline" onSubmit={handleSubmit}>
            <Form.Item>
                {getFieldDecorator('country', {
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
                    initialValue: PARAMETERS[0]
                })(
                    <Select>
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
    setFormData: func.isRequired
};

export const PollutionForm = Form.create({name: 'pollution_form'})(pollutionForm);

