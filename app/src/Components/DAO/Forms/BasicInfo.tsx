import React, { useState, useEffect } from "react";
import { Space, Row, Col } from 'antd';
import FormItem from './FormItem'

export default function BasicInfo() {
    
    return(
        <>
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
      </>
    )
}