import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    headerDate: {
      display: 'flex',
      flexDirection: 'column',
    },
    dateMaginTop: {
      marginTop: -15,
    },
  })
);

type RowData = {
  junior: string;
  weekFeelings?: {
    morning?: JSX.Element;
    evening?: JSX.Element;
  }[];
};

const rows: RowData[] = [
  {
    junior: '髙橋 佑太',
    weekFeelings: [
      {
        morning: <i className='material-icons'>sentiment_satisfied_alt</i>,
        evening: (
          <Avatar src='https://mentalcaredevstorage.blob.core.windows.net/cocoa-web-resource/round_sentiment_dissatisfied_black_18dp.png' />
        ),
      },
      {
        morning: <Avatar src='' />,
        evening: <Avatar src='' />,
      },
      {
        morning: <Avatar src='' />,
        evening: <Avatar src='' />,
      },
      {
        morning: <Avatar src='' />,
        evening: <Avatar src='' />,
      },
      {
        morning: <Avatar src='' />,
        evening: <Avatar src='' />,
      },
    ],
  },
];

function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align='center'>
              <h2>社員</h2>
            </TableCell>
            <TableCell align='center'>
              <div className={classes.headerDate}>
                <h2>6/3</h2>
                <h2 className={classes.dateMaginTop}>朝 夕</h2>
              </div>
            </TableCell>
            <TableCell align='center'>
              <div className={classes.headerDate}>
                <h2>6/4</h2>
                <h2 className={classes.dateMaginTop}>朝 夕</h2>
              </div>
            </TableCell>
            <TableCell align='center'>
              <div className={classes.headerDate}>
                <h2>6/5</h2>
                <h2 className={classes.dateMaginTop}>朝 夕</h2>
              </div>
            </TableCell>
            <TableCell align='center'>
              <div className={classes.headerDate}>
                <h2>6/6</h2>
                <h2 className={classes.dateMaginTop}>朝 夕</h2>
              </div>
            </TableCell>
            <TableCell align='center'>
              <div className={classes.headerDate}>
                <h2>6/7</h2>
                <h2 className={classes.dateMaginTop}>朝 夕</h2>
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.junior}>
              <TableCell component='th' scope='row' align='center'>
                {row.junior}
              </TableCell>
              {row.weekFeelings &&
                row.weekFeelings.map(icons => (
                  <TableCell align='center'>
                    <div className={classes.row}>
                      {icons.morning && icons.morning}
                      {icons.evening && icons.evening}
                    </div>
                  </TableCell>
                ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default SimpleTable;
