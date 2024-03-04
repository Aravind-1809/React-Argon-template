import styled from 'styled-components'


export const SpanEl = styled.span`
font-size:14px;
font-weight:500;
color: ${(props) => props.loss? "#e53e3e": "#48bb78"};
margin-right:5px;
`;

export const StatusBtn = styled.button`
height:25px;
color: ${(props) => props.status === "Online"? "#48bb78":props.status === "Offline"? "#a0aec0": "#f56565" };
background-color: ${(props) => props.status === "Online"? "#c6f6d5":props.status === "Offline"? "#edf2f7": "#fed7d7" };
border-radius:10px;
border:none;
font-size:15px;
font-weight:600;
margin-top:5px;
`;

export const AddBtn = styled.button`
height:35px;
width:70px;
border-radius: 8px;
font-size:12px;
color:#4299e1;
border: 1px solid #4299e1;
background-color:#ffffff;
cursor:pointer;
`;


export const Checkbox = styled.input`
height:18px;
width:18px;
border-radius:2px;
padding:5px;
box-shadow: ${(props) => props.active ? "0px 0px 10px 1px #4299e1":"none"};
`;


export const ColorDiv = styled.div`
height:4px;
width:${(props => props.percentage?props.percentage:"")};
background-color:${(props => props.color?props.color:"")};
`;


export const SideMainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
height: 90vh;
position: fixed;
background-color: #ffffff;
border-radius: 20px;
padding: 20px;
width:${(props) => props.isExpand? "16%": "5%"};
overflow: hidden;
transition: all 0.2s ease-in-out;
`;

export const SideContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
overflow-y: hidden;
width:100%;  
align-self: center;
overflow-x: hidden;
margin-left: ${(props) => props.isExpand?"0":"25px"};
`;

export const CardCarryContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
width:${(props) => props.isExpand?"80%":"91%"};
align-self: flex-end;
margin-top: 30px;
box-sizing: border-box;
transition: all 0.3s ease-in-out;
`;


export const GetStartedContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width:${(props) => props.isExpand?"80%":"91%"};
align-self: flex-end;
box-sizing: border-box;
transition: all 0.3s ease-in-out;
`;


export const TaskContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
width:${(props) => props.isExpand?"80%":"91%"};
align-self: flex-end;
box-sizing: border-box;
transition: all 0.3s ease-in-out;
`;


export const Pages = styled.span`
align-self: flex-start;
font-weight: bold;
margin-left: ${(props) => props.isExpand?"15px":"0px"};
font-size: ${(props) => props.isExpand?"18px":"12px"};
margin-top: 10px;
`;

