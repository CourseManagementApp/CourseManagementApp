import React from 'react'
import ReactDOM from 'react-dom'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../Firebase/firebase';
import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, List, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { getComments, getOrders } from "../../API";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    color: "#0D3B56",
    fontSize: "2rem",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "2px",
  
  },
});



const userSignOut = () => {
 

  signOut(auth)
    .then(() => {
      console.log("sign out successful");
      auth.onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, navigate to the protected route
        
          window.location.href = "/";
        } else {
          // User is not signed in, navigate to the public route
          window.location.href = "/Auth";
        }
      });

    })
    .catch((error) => console.log(error));
};



function AppHeader() {



  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  const classes = useStyles();

    // getComments().then((res) => {
    //   setComments(res.comments);
    // });
    // getOrders().then((res) => {
    //   setOrders(res.products);
    
    // });



  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);




  return (
    <div className="AppHeader">
       <img
        width={100}
        src="https://www.ece.ufl.edu/wp-content/uploads/pub/identity/HW_ECE.png"
      ></img> 
      <Typography.Title className={classes.title}>
        Course Management
      </Typography.Title>
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
      {/* <Space>
        <Badge count={comments.length} dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => {
              setNotificationsOpen(true);
            }}
          />
        </Badge> */}
      {/* </Space> */}
      {/* <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => {
          setCommentsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer> */}
      {/* <Drawer
        title="Notifications"
        open={notificationsOpen}
        onClose={() => {
          setNotificationsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has been
                ordered!
              </List.Item>
            );
          }}
        ></List>
      </Drawer> */}
    </div>
  );
}

export default AppHeader;
