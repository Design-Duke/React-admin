import type { DataNode, TreeProps } from "antd/es/tree";
import { Button, Tree } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./index.less";
import { useEffect, useState } from "react";
function About() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const treeData: DataNode[] = [
    {
      title: "parent 1",
      key: "0-0",
      children: [
        {
          title: "parent 1-0",
          key: "0-0-0",
          disabled: true,
          children: [
            {
              title: "leaf",
              key: "0-0-0-0",
              disableCheckbox: true,
            },
            {
              title: "leaf",
              key: "0-0-0-1",
            },
          ],
        },
        {
          title: "parent 1-1",
          key: "0-0-1",
          children: [
            {
              title: <span style={{ color: "#1890ff" }}>sss</span>,
              key: "0-0-1-0",
            },
          ],
        },
      ],
    },
  ];
  const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  const onCheck: TreeProps["onCheck"] = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
  };
  const editHandel = (row: any) => {
    console.log(row);
    return false;
  };
  const delHandel = (row: any) => {
    console.log(row);
  };
  const titleRender = (nodeData: any) => {
    return (
      <div className="box">
        <div className="title">{nodeData.title}</div>
        <div className="rightButton">
          <Button
            type="primary"
            className="rightButtonLeft"
            icon={<EditOutlined />}
            size="small"
            onClick={() => editHandel(nodeData)}
          ></Button>
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            size="small"
            onClick={() => delHandel(nodeData)}
          ></Button>
        </div>
      </div>
    );
  };
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });
  return (
    <div>
      <Tree
        onSelect={onSelect}
        onCheck={onCheck}
        treeData={treeData}
        showLine
        titleRender={titleRender}
      />
      {/* <h1 text="前端简单说" className="jianb">
        前端简单说
      </h1> */}
      <h1>{time}</h1>
    </div>
  );
}

export default About;
