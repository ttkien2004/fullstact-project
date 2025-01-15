import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Panel } from "primereact/panel";
import { ScrollPanel } from "primereact/scrollpanel";
import { Toolbar } from "primereact/toolbar";
import { Paginator } from "primereact/paginator";
import { Dialog } from "primereact/dialog";
import { InputTextarea } from "primereact/inputtextarea";
import "./style.css";
import { useState, useEffect, useRef } from "react";
import blogAPI from "../services/blog";
import moment from "moment";
import { Toast } from "primereact/toast";
import { useAuthContext } from "../hooks/useAuthContext";

const BlogContainer = () => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);
  const [openDialog, setOpenDialog] = useState(false);
  const [contents, setContents] = useState("");
  const [blogContainer, setBlogContainer] = useState([]);
  const toast = useRef(null);
  const { user } = useAuthContext();

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

  // handle submit new blog
  const handleSubmitNewBlog = async () => {
    try {
      const res = await blogAPI.createBlog("Kien Tran", contents);

      if (res) {
        console.log(res.data.data);
        setBlogContainer([res.data.data, ...blogContainer]);
        setContents("");
        toast.current.show({
          severity: "success",
          detail: "Tạo blog mới thành công",
          summary: "success-create",
          life: 3000,
        });
      }
    } catch (err) {
      console.log(err.error);
      toast.current.show({
        severity: "error",
        summary: "error-create",
        detail: "Tạo blog mới thất bại",
        life: 3000,
      });
    }
  };
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
          onClick={() => {
            setOpenDialog(false);
            handleSubmitNewBlog();
          }}
        ></Button>
      </>
    );
  };

  // fetch data from database
  useEffect(() => {
    console.log(user);
    if (user) {
      blogAPI
        .getAll()
        .then((res) => {
          console.log(res.data.data);
          setBlogContainer(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("no");
    }
  }, [user]);
  // slice blogs for current pages
  const currentBlogContainer = blogContainer.slice(first, first + rows);
  return (
    <>
      <Toast ref={toast} />
      <h1 style={{ marginLeft: "50px" }}>Blog của tôi</h1>
      {/* Chứa nút tạo blog */}
      <div className="blog-container">
        <Card>
          <Toolbar start={startContent}></Toolbar>
        </Card>
        {/* Chứa các blog */}
        <div className="blogs">
          {currentBlogContainer.map((cont, index) => (
            <Panel
              key={index}
              header={`Nhật ký ngày ${moment(cont.createdAt).format(
                "YYYY-MM-DD"
              )}`}
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
          totalRecords={blogContainer.length}
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
