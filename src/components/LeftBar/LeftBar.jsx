import './leftBar.css';
import LeftBarRow from './LeftBarRow';
import LuminusLogo from '../../imgs/LuminusLogo.png'
import NUSLogo from '../../imgs/NUSLogo.png'
import OutlookLogo from '../../imgs/OutlookLogo.png'
import GroupIcon from '@mui/icons-material/Group'
import Chat from '@mui/icons-material/Chat'
import { ExpandMoreOutlined } from '@mui/icons-material'

//change props in LeftBarRow as required to render different links in LeftBar
const LeftBar = () => {
  const outlookAddress = "https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000&redirect_uri=https%3a%2f%2foutlook.office.com%2fowa%2f&resource=00000002-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid&msafed=1&msaredir=1&client-request-id=46862d71-fadd-fefb-1164-653c5512ea96&protectedtoken=true&claims=%7b%22id_token%22%3a%7b%22xms_cc%22%3a%7b%22values%22%3a%5b%22CP1%22%5d%7d%7d%7d&nonce=637883061393451828.35692074-6a3f-4e5f-8dd1-535e416e7dc5&state=Dcu9DoIwFEDhou_iVml7e_szEAeNYcAFTTRsLS0JRIIBgvHt7fCd7WSEkH2ySzKWQrQCbQwwxcGCRG6EOQIqK5iWVDnoqIzYURMCpwgYJVdRhxaz9F7y6evy07K6NRb8MMfQz7FdH1Phypq15U1VP7uFV714YedqtGMzvofmjoMXbPPP68efzR8";
  return ( 
    <div className = "LeftBar">
    <LeftBarRow Icon = {GroupIcon} title = "Group 1"/>
    <LeftBarRow Icon = {GroupIcon} title = "Group 2" />
    <LeftBarRow Icon = {Chat} title = "Chat"/>
    <LeftBarRow src = "https://luminus.nus.edu.sg/?r=%2Fdashboard" imgSrc = {LuminusLogo} title = "LumiNUS" /> 
    <LeftBarRow src = "https://myedurec.nus.edu.sg/psp/cs90prd/?cmd=login" imgSrc = {NUSLogo} title = "MyEduRec" />
    <LeftBarRow src = {outlookAddress} imgSrc = {OutlookLogo} title = "Outlook"/>
    <LeftBarRow Icon = {ExpandMoreOutlined} title = "More"/>
    </div>
  )
}

export default LeftBar;

