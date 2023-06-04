import { InboxOutlined } from "@ant-design/icons";
import { Button, Input, Upload, message, Form } from "antd";
import Dragger from "antd/es/upload/Dragger";
import React, { useState } from "react";

const UploadPage = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const onFinish = () => {
    const handleUpload = async () => {
      try {
        const formData = new FormData();
        fileList.forEach((file) => {
          formData.append("images", file.originFileObj);
        });

        // Gửi formData lên backend bằng API
        console.log(fileList);

        message.success("Upload thành công");
        form.resetFields();
        setFileList([]);
      } catch (error) {
        message.error("Upload thất bại");
      }
    };
    handleUpload();
  };

  const handleFileChange = ({ fileList: newFileList }) => {
    const updatedFileList = newFileList.map((file) => {
      if (file.originFileObj) {
        return file.originFileObj;
      }
      return file;
    });

    setFileList(updatedFileList);
  };

  return (
    <div className="mt-[100px]">
      <div className="max-w-[880px] mx-auto">
        <div className="w-full">
          <div className="rounded-[32px]">
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Form.Item label="Tiêu đề hình ảnh" name="title">
                <Input />
              </Form.Item>
              <Form.Item label="Mô tả hình ảnh" name="description">
                <Input.TextArea />
              </Form.Item>
              <Form.Item label="Người đăng hình" name="uploader">
                <Input />
              </Form.Item>
              <Form.Item label="Hình ảnh">
                <Dragger
                  multiple
                  fileList={fileList}
                  onChange={handleFileChange}
                  beforeUpload={() => false}
                >
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Kéo và thả hình ảnh vào đây hoặc click để chọn
                  </p>
                </Dragger>
              </Form.Item>
              <Form.Item>
                <Button type="primary">Submit</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
