import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useState } from "react";
import { useEffect } from "react";
import useSubscribers from "../../../Hooks/useSubscribers";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import Button from "../../Shared/Button/Button";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const Balance = () => {
    const axiosPublic = useAxiosPublic()
    const [Subscriber] = useSubscribers()
    const [cashIn, setCashIn] = useState(null)
    const [CashOut, setCashOut] = useState(null)
    const { data: User } = useQuery({
        queryKey: ['userCollection'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users`);
            return res.data;
        }
    })
    useEffect(() => {
        axiosPublic.get(`/cashIn`)
            .then(res => setCashIn(res.data))
        axiosPublic.get(`/cashOut`)
            .then(res => setCashOut(res.data))

    }, [])
    const barDataRatio = [
        { name: "Subscriber", number: Subscriber?.length },
        { name: "Member", number: User?.length }
    ]

    const Revenue = cashIn?.reduce((acc, amount) => acc + amount.amount, 0)
    const Pay = CashOut?.reduce((acc, amount) => acc + parseInt(amount.amount), 0)
    const Balance = Revenue - Pay;


    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    return (
        <div className="mt-10 flex gap-6">
            <div>
                <div className="flex items-center gap-6">
                    <div className="border w-[200px] p-4 text-center rounded-lg bg-slate-300 shadow-lg">
                        <h1 className={Pay > Revenue ? 'text-red-600 text-lg font-semibold' : 'text-green-600 text-lg font-semibold'}>
                            ${Balance}
                        </h1>
                        <p className=" text-lg font-bold">Current Balance</p>
                    </div>
                    <div className="border w-[200px] p-4 text-center rounded-lg bg-slate-300 shadow-lg">
                        <h1 className="mb-2 text-green-600 text-lg font-semibold">
                            ${Revenue}
                        </h1>
                        <p className=" text-lg font-bold">Total Revenue</p>
                    </div>
                    <div className="border w-[200px] p-4 text-center rounded-lg bg-slate-300 shadow-lg">
                        <h1 className="mb-2 text-red-600 text-lg font-semibold">
                            ${Pay}
                        </h1>
                        <p className="text-lg font-bold">Total Pay</p>
                    </div>
                </div>
                <div className=" w-[640px] mt-20 rounded-lg shadow-lg">
                    <BarChart
                        width={500}
                        height={300}
                        data={barDataRatio}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="number" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {barDataRatio.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
            </div>
            <div className="overflow-x-auto border p-2 rounded-lg shadow-lg">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="Shared_Color">
                            <th>Member</th>
                            <th>Transaction</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cashIn?.map(data => <tr key={data._id}>
                                <td>
                                    <p>{data.userEmail}</p>
                                </td>
                                <td>
                                    {data?._id}
                                </td>
                                <td>
                                    {data?.amount}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Balance;