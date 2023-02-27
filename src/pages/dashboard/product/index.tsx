import * as S from "./styles";
import { useSelector } from "react-redux";
import moment from "moment";
import { useState } from "react";
import {ModalProduct} from './ModalProduct'
import addImg from '../../../assets/add.png'
moment.locale("pt-br");

interface productProps {
  id: number,
  category_id: number,
  category_name: string,
  created_at: string,
  description: string,
  name: string,
  updated_at: string,
  stock: number,
  value: number,
}

export function Product() {
  const product = useSelector((state:any) => state.product);
  const [item,setItem] = useState({})
  const [open,setOpen] = useState(false)

  const onClose = () => {
    setOpen(false);
    setItem({});
  }

  return (
    <>
      <ModalProduct open={open} onClose={onClose} item={item}/>
      <S.Container>
        <div className="header">
          <h2>Produtos</h2>
          <button><img src={addImg} alt="" /></button>
        </div>
        <S.List>
          {product.data.map((p:productProps) => 
            <li onClick={() => {
              setItem(p)
              setOpen(true)
            }}>
              <div>
                <h4>Nome:</h4>
                <p>{p.name}</p>
              </div>
              <div>
                <h4>Descrição:</h4>
                <p>{p.description}</p>
              </div>
              <div>
                <h4>Categoria:</h4>
                <p>{p.category_name}</p>
              </div>
              <div>
                <h4>Criado:</h4>
                <p>{moment(p.created_at).format('DD/MM/YYYY, h:mm:ss a')}</p>
              </div>
            </li>
          )}
        </S.List>
        
      </S.Container>
    </>
  );
}
