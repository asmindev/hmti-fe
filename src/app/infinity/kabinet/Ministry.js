import React from "react";

export function MinistryDesc({ name, desc }) {
    return (
        <div className="rounded-lg w-full">
            <div className="w-full bg-gray-100 py-2">
                <h1 className="text-lg font-semibold text-center">{name}</h1>
            </div>
            <div className="p-2 max-h-96 overflow-auto">
                <p className="text-sm text-justify leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}

export default function Ministry({ name, chairman, secretary, member }) {
    return (
        <>
            <h1 className="text-lg font-bold text-center">{name}</h1>
            <table className="w-full table-auto">
                <tbody className="text-sm">
                    <tr>
                        <td className="px-2 text-start font-medium">Ketua</td>
                        <td className="px-2 text-start">{chairman}</td>
                    </tr>
                    <tr>
                        <td className="px-2 text-start font-medium">
                            Sekretaris
                        </td>
                        <td className="px-2 text-start">{secretary}</td>
                    </tr>
                    <tr>
                        <td className="px-2 text-start font-medium flex">
                            Anggota
                        </td>
                        <td className="px-2 text-start">
                            <ul>
                                {member.map((m) => (
                                    <li key={m}>{m}</li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
