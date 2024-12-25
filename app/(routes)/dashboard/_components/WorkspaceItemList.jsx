"use client"
import { db } from '@/config/firebaseConfig';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function WorkspaceItemList({workspaceList}) {

    const[documentList,setDocumentList]=useState([]);
  
  const router=useRouter();
  const OnClickWorkspaceItem=(workspaceId)=>{
     
            const q=query(collection(db,'workspaceDocuments'),
        where('workspaceId','==',Number(workspaceId)));
        const unsubscribe=onSnapshot(q,(querySnapshot)=>{
            setDocumentList([]);
    
            querySnapshot.forEach((doc)=>{
                setDocumentList(documentList=>[...documentList,doc.data()])
            })
        });
      
     
    
        
      router.push('/workspace/'+workspaceId+'/'+documentList[0].id);
  }

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6'>
        {workspaceList&&workspaceList.map((workspace,index)=>(
            <div key={index} className='border shadow-xl rounded-xl
            hover:scale-105 transition-all cursor-pointer'
            onClick={()=>OnClickWorkspaceItem(workspace.id)}
            >
                <Image src={workspace?.coverImage} 
                width={400} height={200} alt='cover'
                className='h-[150px] object-cover rounded-t-xl'
                />
                <div className='p-4 rounded-b-xl'>
                    <h2 className='flex gap-2'>{workspace?.emoji} {workspace.workspaceName}</h2>
                </div>
            </div>
        ))}
    </div>
  )
}

export default WorkspaceItemList
