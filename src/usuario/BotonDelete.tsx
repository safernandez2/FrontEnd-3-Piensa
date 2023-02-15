import React from 'react';
import useSWRMutation from 'swr/mutation';
import {deletePIENSA} from "../service/apiPiensa";
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
const { confirm } = Modal;


const showDeleteConfirm = (data:any, trigger:any) => {
  confirm({
    title: 'Estas seguro de eliminar?',
    icon: <ExclamationCircleFilled />,
    content: 'Recuerda que no se podra recuperar esta informacion',
    okText: 'Si',
    okType: 'danger',
    cancelText: 'No',
    async onOk() {
     await trigger()
      console.log(data);
      alert('Borrando con PATCH BotonDelete.tsx')
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};



const Delet: React.FC<any> = (data:any) => {


  const { trigger, isMutating } = useSWRMutation(`${'http://127.0.0.1:8081/usuario/delete'}/${data.data.id}`,deletePIENSA);

    return(
        <Space wrap>

          <Button onClick={()=>showDeleteConfirm(data, trigger)} type="dashed">
            Eliminar
          </Button>

        </Space>
        )

};

export default Delet;
