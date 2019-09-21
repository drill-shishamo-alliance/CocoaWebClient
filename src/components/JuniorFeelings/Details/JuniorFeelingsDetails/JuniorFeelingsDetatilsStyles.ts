import { Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    customTooltip: {
      backgroundColor: '#ffffff',
    },
    label: {
      color: '#696969',
      margin: 20,
    },
    feelingContainer: {
      marginTop: 50,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    backIcon: {
      width: 16,
      height: 16,
    },
    backButton: {
      position: 'absolute',
      top: '10%',
      left: '6%',
      border: 'solid', // 左:丸み 真ん中:線の太さ 右:線の色
      borderRadius: '50%',
    },
    title: {
      marginLeft: 60,
    },
    nextButton: {
      position: 'absolute',
      top: '13%',
      right: '5%',
    },
    previousButton: {
      position: 'absolute',
      top: '13%',
      right: '11%',
    },
    weekButton: {
      position: 'absolute',
      top: '13%',
      right: '24%',
    },
    monthButton: {
      position: 'absolute',
      top: '13%',
      right: '17%',
    },
  });

export default styles;
