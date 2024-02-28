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
`