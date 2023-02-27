import * as S from "./styles";
import { FirstProduct } from "../first_product";
import { Product } from "../product";
import { Default } from "../default";
import { useLocation } from 'react-router-dom';
import { request } from "../../../http";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { changeProduct,loadProduct } from "../../../redux/productSlice";
import { changeCategory, loadCategory } from "../../../redux/categorySlice";

export function ControllerContent() {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state:any) => state.user);
  const product = useSelector((state:any) => state.product);

  useEffect(()=>{
    dispatch(loadProduct(true))
    request({type: 'get', router: '/product',data: {user_id: user.data.id}},(res,error)=>{
      dispatch(loadProduct(false))
      if(error) alert("Não foi possivel pegar os produtos!")
      else dispatch(changeProduct(res.data))
    })
    dispatch(loadCategory(true))
    request({type: 'get', router: '/category',data: {user_id: user.data.id}},(res,error)=>{
      dispatch(loadCategory(false))
      if(error) alert("Não foi possivel pegar as categorias!")
      else dispatch(changeCategory(res.data))
    })
  },[])

  const returnContent = () => {    
    if(location.pathname === '/product'){
      if(!product.data.length && !product.data.load) return <FirstProduct/>
      else return <Product/>
    } 
    else return <Default/>
  }
  return (
    <S.Container>{returnContent()}</S.Container>
  );
}
