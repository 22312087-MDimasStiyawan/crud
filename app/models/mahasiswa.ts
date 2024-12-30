"use server";

import { PrismaClient } from "@prisma/client";

//buat variabel "prisma"
const prisma = new PrismaClient ();

// buat fungsi untuk ambil data mahasiswa dibawah setDelete
export async function getData() {
    const mahasiswa = await prisma.tb_mahasiswa.findMany({
      where: {
        status : 'y'
        // prodi : {
        //   contains : "matika"
        // }
      },
    })
    return mahasiswa;
  }

  // buat fungsi hapus data (update status Y >> T)
  // arrow function

  // function setDelete
  export const setUpdateStatus = async(npm: string) => {
    await prisma.tb_mahasiswa.updateMany({
      where: {
        npm: npm,
      },
      data: {
        status: 'N',
      },
    })
  }
//buat fungsi check data mahasisawa
  export const checkData = async(npm: string) =>{
    //buat variabel check
    const check = await prisma.tb_mahasiswa.findMany({
      where: {
        npm: npm,
      },
    });

    return check;
  }

  //buat fungsi untuk simpan data
 export const saveData = async(npm: string, nama:string, prodi:string) => {
    const user = await prisma.tb_mahasiswa.create({
      data: {
        npm : npm,
        nama : nama,
        prodi : prodi,
        status: 'y'
      },
    })
  }