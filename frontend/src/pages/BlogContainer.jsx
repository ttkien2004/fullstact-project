import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Panel } from "primereact/panel";
import { ScrollPanel } from "primereact/scrollpanel";
import { Toolbar } from "primereact/toolbar";
import { Paginator } from "primereact/paginator";
import { Dialog } from "primereact/dialog";
import { InputTextarea } from "primereact/inputtextarea";
import "./style.css";
import { useState } from "react";

const BlogContainer = () => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(4);
  const [openDialog, setOpenDialog] = useState(false);
  const [contents, setContents] = useState("");

  const blogs = [
    {
      createdAt: "30-02-2024",
      contents: "Hello my first blog",
    },
    {
      createdAt: "01-01-2024",
      contents: "Hello my second blog",
    },
    {
      createdAt: "01-01-2024",
      contents: "Hello my second blog",
    },
    {
      createdAt: "01-01-2024",
      contents: "Hello my second blog",
    },
    {
      createdAt: "01-01-2024",
      contents: "Hello my third blog",
    },
    {
      createdAt: "01-01-2024",
      contents: "Hello my second blog",
    },
    {
      createdAt: "01-01-2024",
      contents: "Hello my second blog",
    },
  ];

  // slice blogs for current pages
  const currentBlogs = blogs.slice(first, first + rows);

  const onPageChange = (e) => {
    setFirst(e.first);
    setRows(e.rows);
  };

  const startContent = () => {
    return (
      <>
        <Button
          label="Tạo blog mới"
          style={{ marginLeft: "30px" }}
          onClick={() => setOpenDialog(true)}
        ></Button>
      </>
    );
  };
  const footerDialog = () => {
    return (
      <>
        <Button
          label="Hủy"
          outlined
          severity="danger"
          onClick={() => setOpenDialog(false)}
        ></Button>
        <Button
          label="Tạo"
          severity="info"
          onClick={() => setOpenDialog(false)}
        ></Button>
      </>
    );
  };
  return (
    <>
      <h1 style={{ marginLeft: "50px" }}>Blog của tôi</h1>
      {/* Chứa nút tạo blog */}
      <div className="blog-container">
        <Card>
          <Toolbar start={startContent}></Toolbar>
        </Card>
        {/* Chứa các blog */}
        <div className="blogs">
          {currentBlogs.map((cont, index) => (
            <Panel
              key={index}
              header={`Nhật ký ngày ${cont.createdAt}`}
              style={{ marginBottom: "30px" }}
              toggleable
            >
              <ScrollPanel style={{ width: "100%", height: "200px" }}>
                <p>{cont.contents}</p>
              </ScrollPanel>
            </Panel>
          ))}
        </div>
        <Paginator
          first={first}
          rows={rows}
          totalRecords={blogs.length}
          rowsPerPageOptions={[5, 10, 15]}
          onPageChange={onPageChange}
        ></Paginator>
      </div>

      {/* Tạo thêm blog mới */}
      <Dialog
        header="Tạo blog mới"
        visible={openDialog}
        onHide={() => setOpenDialog(false)}
        footer={footerDialog}
        style={{ width: "600px" }}
      >
        <InputTextarea
          placeholder="Hãy viết gì đó vào đây ..."
          rows={10}
          cols={30}
          value={contents}
          onChange={(e) => {
            setContents(e.target.value);
          }}
          style={{ width: "100%" }}
        ></InputTextarea>
      </Dialog>
    </>
  );
};

export default BlogContainer;
