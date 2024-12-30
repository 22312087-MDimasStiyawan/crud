"use client"
import { faPencil, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getData, setUpdateStatus } from "./models/mahasiswa";

//buat fungsi untuk 

//buat fungsi untuk dialog hapus
async function setDelete(npm: string, nama: string) {
  // alert("Hapus Data");
  if (confirm(`Data Mahasiswa : ${npm} - ${nama} Ingin Dihapus ?`) == true) 
    {
    // alert("Ok");
    await setUpdateStatus(npm);
    alert(`Data Mahasiswa : ${npm} - ${nama} Berhasil Dihapus ?`);
    location.reload();
  }
  // else {
  //   alert("Cancel");
  // }
}

export default function RootPage() {
  // hook dengan "use state" di page bawah RootPage
  const [getValue, setValue] = useState({});

  //buat fungsi untuk panggil "getData"
  async function fetchData() {
    setValue(await getData());
  }

  // hook dengan "use effect" dibawah useState
  useEffect(() => {
    fetchData();
  }, [])
   

  
  // const mahasiswa = await prisma.tb_mahasiswa.findUnique({
  //   where: {
  //     id: 1,
  //   },
  // })

  return (
    <>
    <title>M Dimas Stiyawan</title>
    
    <nav className="text-center mb-5 flex justify-end">
        <Link href={"/add"} className="btn btn-success">
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            Tambah Data Mahasiswa
          </Link>
      </nav>

      {/* tampilkan data mahasisa */}
      <table className="w-full">
        <thead>
          <tr className="bg-slate-300 h-12">
            <th className="w-10% border border-black">Aksi</th>
            <th className="w-10% border border-black">NPM</th>
            <th className="w-1/2 border border-black">Nama</th>
            <th className="w-30% border border-black">Prodi</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(getValue).map((data: any, index: number) => (
            // <div key={index}>
            //   <div>
            //     {data.npm} - {data.nama} - {data.prodi}
            //   </div>
            // </div>
            <tr>
              <td className="border border-black p-2.5 text-center">
                {/* icon edit */}
                <Link href={`/edit/${btoa(data.npm)}`} className="bg-green-500 text-white py-5X px-2.5 hover:bg-green-700 rounded mr-1 " title="Ubah Data">
                  <FontAwesomeIcon icon={faPencil} ></FontAwesomeIcon>
                </Link>


                {/* icon delete */}
                <Link href={"/"} className='bg-red-600 text-white py-5X px-2.5 rounded-md ml-1 hover:bg-red-700' title='Hapus Data' 
                onClick={() => {setDelete(data.npm,  data.nama)}}>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </Link>


              </td>
              <td className="border border-black px-2.5 text-center">
                {data.npm}
              </td>
              <td className="border border-black px-2.5 text-justify">
                {data.nama}
              </td>
              <td className="border border-black px-2.5 text-center">
                {data.prodi}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* {mahasiswa?.nama} */}
    </>
  );
}
