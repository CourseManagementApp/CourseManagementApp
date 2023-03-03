import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import classnames from 'classnames';
import { ToastContainer } from 'react-toastify';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import tinycolor from 'tinycolor2';
import 'react-toastify/dist/ReactToastify.css';

import Widget from '../../components/Widget';
import PageTitle from '../../components/PageTitle';
import NotificationCustomComponent from '../../components/Notification';
import { Typography, Button } from '../../components/Wrappers';

const CloseButton = ({ closeToast, className }) => (
  <CloseIcon
    className={className}
    onClick={closeToast}
  />
);

const NotificationsPage = ({ classes, ...props}) => (
  <React.Fragment>
    <PageTitle title="Notifications" />
    <Grid container spacing={32}>
      <ToastContainer className={classes.toastsContainer} closeButton={<CloseButton className={classes.notificationCloseButton} />} closeOnClick={false} progressClassName={classes.notificationProgress} />
    
      
      <Grid item xs={12} md={6} lg={4}>
        <Widget title="Notification Types Examples" disableWidgetMenu>
          <NotificationCustomComponent className={classes.notificationItem} shadowless type="message" message="Thanks for Checking out Messenger" variant="contained" color="secondary"/>
          <NotificationCustomComponent className={classes.notificationItem} shadowless type="feedback" message="New user feedback received" variant="contained" color="primary"/>
          <NotificationCustomComponent className={classes.notificationItem} shadowless type="customer" message="New customer is registered" variant="contained" color="success" />
          <NotificationCustomComponent className={classes.notificationItem} shadowless type="shipped" message="The order was shipped" variant="contained" color="warning" />
          <NotificationCustomComponent className={classes.notificationItem} shadowless type="delivered" message="The order was delivered" variant="contained" color="primary" />
          <NotificationCustomComponent className={classes.notificationItem} shadowless type="defence" message="5 Defence alerts" variant="contained" color="info" />
        </Widget>
      </Grid>
  
      <Grid item xs={12} md={6} lg={4}>
        <Widget title="Notification Types Examples" disableWidgetMenu>
          <NotificationCustomComponent className={classes.notificationItem} type="report" message="New report has been received" variant="rounded" color="secondary" />
          <NotificationCustomComponent className={classes.notificationItem} type="feedback" message="New user feedback received" variant="rounded" color="primary" />
          <NotificationCustomComponent className={classes.notificationItem} type="shipped" message="The item was shipped" variant="rounded" color="success" />
          <NotificationCustomComponent className={classes.notificationItem} type="message" message="The new message from user @nahawaii" variant="rounded" color="warning" />
          <NotificationCustomComponent className={classes.notificationItem} type="upload" message="Your file is ready to upload" variant="rounded" color="primary" />
          <NotificationCustomComponent className={classes.notificationItem} type="disc" message="The disc is full" variant="rounded" color="info" />
        </Widget>
      </Grid>
    </Grid>
  </React.Fragment>
);

const styles = (theme) => ({
  layoutContainer: {
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.unit * 2,
    border: '1px dashed',
    borderColor: theme.palette.primary.main,
    position: 'relative',
  },
  layoutText: {
    color: tinycolor(theme.palette.background.light).darken().toHexString(),
  },
  layoutButtonsRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  layoutButton: {
    backgroundColor: theme.palette.background.light,
    width: 125,
    height: 50,
    outline: 'none',
    border: 'none',
  },
  layoutButtonActive: {
    backgroundColor: tinycolor(theme.palette.background.light).darken().toHexString(),
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: theme.spacing.unit * 2,
  },
  notificationCallButton: {
    color: 'white',
    marginBottom: theme.spacing.unit,
    textTransform: 'none',
  },
  codeContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing.unit * 2,
  },
  codeComponent: {
    flexGrow: 1,
  },
  notificationItem: {
    marginTop: theme.spacing.unit * 2,
  },
  notificationCloseButton: {
    position: 'absolute',
    right: theme.spacing.unit * 2,
  },
  toastsContainer: {
    width: 400,
    marginTop: theme.spacing.unit * 6,
    right: 0,
  }
});

export default withStyles(styles, { withTheme: true})(NotificationsPage);
