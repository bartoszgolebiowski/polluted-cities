import React from 'react'
import {AutoComplete, Form, Select} from 'antd'
import {shallow} from "enzyme/build";
import sinon from 'sinon'
import PollutionForm from "../PollutionForm";
import {processInput, handleSubmit} from '../PollutionForm'
import {COUNTRIES_CODE_MAP} from "../../../constants/general";

const props = {
    setFormData: (country, parameter) => {
    },
    form: {
        setFields: (parameter) => {
        },
        getFieldDecorator: jest.fn(opts => c => c)
    }
};

const values = {country: 'Germany', parameter: 'pm25'};
const values4 = {country: 'Germanyy', parameter: 'pm25'};
const values5 = {country: 'Germany', parameter: 'pm225'};

describe('PollutionForm unit tests', () => {
    describe('processInput', () => {
        let setFieldsSpy;
        let setFormDataSpy;

        beforeEach(() => {
            setFieldsSpy = sinon.spy(props.form, "setFields");
            setFormDataSpy = sinon.spy(props, "setFormData");
        });
        afterEach(() => {
            props.form.setFields.restore();
            props.setFormData.restore();
        });

        it('correct input', () => {
            processInput(props, values);

            expect(setFieldsSpy.callCount).toBe(0);
            expect(setFormDataSpy.withArgs({
                country: COUNTRIES_CODE_MAP.get(values.country),
                parameter: values.parameter
            }).calledOnce).toBe(true);
        });

        it('wrong country', () => {
            processInput(props, values4);

            const {country} = setFieldsSpy.args[0][0];
            expect(country.value).toStrictEqual(values4.country);
            expect(setFormDataSpy.callCount).toBe(0);
        });

        it('wrong parameter', () => {
            processInput(props, values5);

            const {parameter} = setFieldsSpy.args[0][0];
            expect(parameter.value).toStrictEqual(values5.parameter);
            expect(setFormDataSpy.callCount).toBe(0);
        })
    });

    describe('PollutionForm component tests', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<PollutionForm setFormData={props.setFormData} form={props.form}/>).shallow();
        });
        it('render 1 <Form>', () => {
            expect(wrapper.find(Form).length).toBe(1)
        });
        it('render 3 <Form.Item>', () => {
            expect(wrapper.find(Form.Item).length).toBe(3)
        });
        it('render 1 <AutoComplete>', () => {
            expect(wrapper.find(AutoComplete).length).toBe(1)
        });
        it('render 1 <Select>', () => {
            expect(wrapper.find(Select).length).toBe(1)
        });
    });
});