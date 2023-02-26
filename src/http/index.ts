import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

interface requestProps {
  type: string,
  router: string,
  data: any
}

export function request({type,router,data}:requestProps,
  callback: (result: any, error: any) => void){
  switch(type){
    case 'post': api.post(router,data).then(response => callback(response,undefined))
      .catch((error) => callback(undefined,error));
      break;
    case 'put': api.put(router,data).then(response => callback(response,undefined))
      .catch((error) => callback(undefined,error));
      break;
    case 'delete': api.delete(router,data).then(response => callback(response,undefined))
      .catch((error) => callback(undefined,error));
      break;
    default: 
    api.get(router,{params: data}).then(response => callback(response,undefined))
      .catch((error) => callback(undefined,error));
  }
  
}