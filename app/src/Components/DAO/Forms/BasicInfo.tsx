import React, { useState, useEffect } from "react";
import { AlchemyLinks } from "../../DaoManager/InputFormAlchemy";
import { InputFormHeader } from "../../DaoManager/InputFormAlchemy";
import { InputGroup } from "../../DaoManager/InputFormAlchemy";
//import { InputSubheading } from "../../DaoManager/InputFormAlchemy";
import { InputNumber, Input } from "antd";
import { Space, Row, Col, Card, Collapse } from 'antd';
import FormItem from './FormItem'

export default function BasicInfo() {
    
    return(
        <>
            <Card title="Basic Info" size="small" 
                bordered style={{backgroundColor: '#303942'}}
                headStyle={{backgroundColor: ''}}
                >

                <div>
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        <Row>
                            <Col span={12}>
                                <FormItem
                                    inputTitle={"Deed ID"}
                                    placeHolder={"0xXXXXXXXXXXXXXXXXXX"}
                                    disabled={true}
                                ></FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem
                                    inputTitle={"Form Value"}
                                    placeHolder={"Placeholder"}
                                ></FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <FormItem
                                    inputTitle={"Owner"}
                                    placeHolder={"QuintaDAO"}
                                ></FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <FormItem
                                    inputTitle={"Size (square footage)"}
                                    placeHolder={"Placeholder"}
                                ></FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem
                                    inputTitle={"Lot Size (AC)"}
                                    placeHolder={"Placeholder"}
                                ></FormItem>
                            </Col>
                        </Row>
                    </Space>
                </div>
            </Card>
      </>
    )
}