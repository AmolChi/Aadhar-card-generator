import TextArea from "antd/es/input/TextArea";
import "./App.css";
import { Button, DatePicker, Form, Input } from "antd";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import axios from "axios";

import { useState } from "react";
import Aadhar from "./components/Aadhar";

function App() {
  const [res, setRes] = useState(null);

  const createUser = async (value) => {
    try {
      const res = await axios.post('http://localhost:5000/api/v1/user',value)
      console.log(res.data);
      setRes(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const onFinish = (values) => {
    console.log(
      values.Name,
      values.address,
      values.DOB.$D + "-" + values.DOB.$M + "-" + values.DOB.$y,
      values.phone
    );

    const data = {
      Name: values.Name,
      DOB: values.DOB.$D + "-" + values.DOB.$M + "-" + values.DOB.$y,
      Address: values.address,
      ContactInfo: values.phone,
    };

    createUser(data);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed", errorInfo);
  };

  const [phone, setPhone] = useState("+91");

  return res == null ? (
    <div className="App">
      <p style={{textAlign:'center'}}>Fill This Form To Create An AADHAAR CARD</p>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          justifyItems:'center',
          alignItems:'center',
          justifyContent:'center',
          textAlign:'center',
          maxWidth:600,
          padding:"100px",
          marginLeft:"29vw"
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Full Name"
          name="Name"
          rules={[
            {
              required: true,
              message: "Please Input your Name",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Date of Birth"
          name="DOB"
          rules={[
            {
              required: true,
              message: "Please enter your Birth Date",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please enter your address",
            },
          ]}
        >
          <TextArea autoSize={{ minRows: 2 }} />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please enter your phone number",
            },
          ]}
        >
          <PhoneInput
            defaultCountry="in"
            value={phone}
            onChange={(phone) => setPhone(phone)}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit and Create Aadhar
          </Button>
        </Form.Item>
      </Form>
    </div>
  ) : (
    <>
      <Aadhar data={res.user} />
      <Button
        style={{ top: "70vh", left: "45vw" }}
        onClick={() => setRes(null)}
      >
        Go Back
      </Button>
    </>
  );
}

export default App;
