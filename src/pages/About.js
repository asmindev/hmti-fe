import React from 'react'
import Kahim from '../../public/kahim.jpg'

export default function About() {
    React.useEffect(() => {
        console.log(Kahim)
    }, [])
    const misi = [
        {
            id: 1,
            text: 'Menjadi wadah dalam mengembangkan potensi minat dan bakat mahasiswa Teknik Informatika dalam bidang akademik dan non akademik.',
        },
        {
            id: 2,
            text: 'Mengadakan kelas pembelajaran dan latihan dasar kepemimpinan (pra LDK)',
        },
        {
            id: 3,
            text: 'Merekapitulasi dan melaksanakan program kerja yang belum sempat terlaksana di periode sebelumnya.',
        },
        {
            id: 4,
            text: 'Mempererat dan Memperluas relasi/hubungan HMTI dalam lingkungan internal maupun eksternal.',
        },
    ]
    return (
        <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-24 my-12 ">
            <div className="text-center w-full flex flex-col items-center">
                <span className="block my-4 text-dark bg-primary py-2 px-3 w-fit">
                    <h1 className="font-bold text-sm uppercase">
                        Kabinet Centroid
                    </h1>
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100">
                    HMTI FT-UHO
                </h1>
                <p className="uppercase text-gray-400 mt-4 text-xs text-center leading-relaxed">
                    Himpunan Mahasiswa Teknik Informatika Fakultas Teknik,
                    Universitas Haluoleo
                </p>
            </div>
            <div className="py-24">
                <div className="w-full flex flex-col md:flex-row flex-wrap">
                    <div className="w-full md:w-1/2 p-4">
                        <div className="w-full h-full">
                            <h1 className="text-xl font-bold text-gray-100">
                                Tentang HMTI FT-UHO
                            </h1>
                            <p className="text-gray-400 mt-4 text-sm text-justify leading-relaxed">
                                Himpunan Mahasiswa Teknik Informatika merupakan
                                salah satu Organisasi Kemahasiswaan di bawah
                                naungan Jurusan Teknik Informatika Fakultas
                                Teknik, Universitas Haluoleo. Himpunan Mahasiswa
                                Jurusan Teknik Informatika memiliki tujuan untuk
                                membantu melancarkan segala kegiatan pendidikan
                                di jurusan dengan ikut memelihara, menumbuhkan,
                                meningkatkan, dan mendayagunakan kemampuan yang
                                ada pada Mahasiswa Jurusan Teknik Informatika.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <div className="w-full h-full">
                            <h1 className="text-xl font-bold text-gray-100">
                                Kepengurusan HMTI FT-UHO
                            </h1>
                            <p className="text-gray-400 mt-4 text-sm text-justify leading-relaxed">
                                Secara umum Himpunan Mahasiswa Teknik
                                Informatika dipimpin oleh Ketua dan Wakil Ketua
                                yang bertugas mengkoordinir anggotanya. Pada
                                kepengurusan saat ini, Himpunan Mahasiswa Teknik
                                Informatika dipimpin oleh Muh. Yamin sebagai
                                Ketua HMTI FT-UHO 2022-2023 didampingi oleh
                                Sarman Chisara sebagai Wakil Ketua HMTI FT-UHO
                                2022-2023
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-24 flex flex-col gap-28">
                <div className="w-full my-24 flex flex-col-reverse md:flex-row flex-wrap items-center justify-center">
                    <div className="w-full md:w-1/2 p-4">
                        <div className="w-full h-full">
                            <h1 className="text-xl font-bold text-gray-100">
                                Visi HMTI FT-UHO 2022-2023
                            </h1>
                            <p className="text-gray-400 mt-4 text-sm text-justify leading-relaxed">
                                Mewujudkan kekeluargaan HMTI FT-UHO yang
                                mempunyai solidaritas yang tinggi.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <div className="w-full h-full">
                            <img src={Kahim.src} alt="Kahim" />
                        </div>
                    </div>
                </div>
                <div className="w-full my-24 flex flex-col-reverse md:flex-row-reverse flex-wrap items-center justify-center">
                    <div className="w-full md:w-1/2 p-4">
                        <div className="w-full h-full">
                            <h1 className="text-xl font-bold text-gray-100">
                                Misi HMTI FT-UHO 2022-2023
                            </h1>
                            <div className="text-gray-400 mt-4 text-sm text-justify leading-relaxed">
                                {misi.map((item) => (
                                    <div key={item.id} className="flex gap-2">
                                        <span className="w-4 h-4 block rounded-full">
                                            {`${item.id}.`}
                                        </span>
                                        <p>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <div className="w-full h-full">
                            <img src={Kahim.src} alt="Kahim" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
