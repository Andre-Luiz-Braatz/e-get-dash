import { useEffect } from "react";
import { Sidebar } from "../../components/Sidebar";
import { ControllerContent } from "./controller_content";
import * as S from "./styles";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const user = useSelector((state:any) => state.user);
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(!user || !user.data || !user.data.id) navigate("/signin");
  },[user])

  if(user && user.data && user.data.id) 
    return (
      <S.Container>
        <Sidebar/>
        <ControllerContent/>
      </S.Container>
    );
  else return <Navigate to="/signin" />
}
