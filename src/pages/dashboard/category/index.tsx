import * as S from "./styles";
import { useSelector } from "react-redux";
import moment from "moment";
import { useState } from "react";
import {ModalProduct} from './ModalCategory'
import {ModalNewProduct} from './ModalNewCategory'
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

export function Category() {
  const category = useSelector((state:any) => state.category);
  const [item,setItem] = useState({})
  const [open,setOpen] = useState(false)
  const [openNewCategory,setOpenNewCategory] = useState(false)

  const onClose = () => {
    setOpen(false);
    setItem({});
  }
  const onCloseNewProduct = () => setOpenNewCategory(false);
  const handleNewCategory = () => setOpenNewCategory(true)

  return (
    <>
      <ModalProduct open={open} onClose={onClose} item={item}/>
      <ModalNewProduct open={openNewCategory} onClose={onCloseNewProduct}/>
      <S.Container>
        <div className="header">
          <h2>Categoria</h2>
          <button onClick={handleNewCategory}><img src={addImg} alt="" /></button>
        </div>
        <S.List>
          {category.data.map((c:productProps) => 
            <li onClick={() => {
              setItem(c)
              setOpen(true)
            }}>
              <div>
                <h4>Nome:</h4>
                <p>{c.name}</p>
              </div>
              <div>
                <h4>Descrição:</h4>
                <p>{c.description}</p>
              </div>
              <div>
                <h4>Criado:</h4>
                <p>{moment(c.created_at).format('DD/MM/YYYY, h:mm:ss a')}</p>
              </div>
            </li>
          )}
        </S.List>
        
      </S.Container>
    </>
  );
}
