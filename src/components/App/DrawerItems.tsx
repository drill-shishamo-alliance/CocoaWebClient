import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home'
import SubordinateMoodIcon from 'src/assets/DrawerItems/SubordinateMoodIcon.svg';
import MyMoodIcon from 'src/assets/DrawerItems/MyMoodIcon.svg';
import DepartmentalAnalysisIcon from 'src/assets/DrawerItems/DepartmentalAnalysisIcon.svg';
import MapIcon from '@material-ui/icons/Map';

export const mainDrawerItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='ホーム' />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <img src={SubordinateMoodIcon} style={{height: '24px', width: '24px'}}/>
            </ListItemIcon>
            <ListItemText primary='部下の気分' />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <img src={MyMoodIcon} style={{height: '24px', width: '24px'}}/>
            </ListItemIcon>
            <ListItemText primary='自分の気分' />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <img src={DepartmentalAnalysisIcon} style={{height: '24px', width: '24px'}}/>
            </ListItemIcon>
            <ListItemText primary='部署の分析' />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <MapIcon />
            </ListItemIcon>
            <ListItemText primary='気分マップ' />
        </ListItem>
    </div>
);