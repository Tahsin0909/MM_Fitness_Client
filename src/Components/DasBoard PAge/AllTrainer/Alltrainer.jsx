import useTrainer from "../../../Hooks/useTrainer";

const AllTrainer = () => {
    const [data, isPending] = useTrainer()
    console.log(data);

    const currentDate = new Date()
    const month = currentDate.getUTCMonth()

    return (
        <div className="ml-10 m-2">
            <p className="text-xl font-semibold  uppercase mb-4">Total Trainer : {data?.length} </p>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="Shared_Color">
                                <th className="">Name</th>
                                <th className="">Join Date</th>
                                <th className="">Skill</th>
                                <th className="">Salary</th>
                                <th className="">Payment Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                isPending ? (<>
                                    <td>
                                        <div className="flex gap-4 items-center">
                                            <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                                            <div className="flex flex-col gap-4">
                                                <div className="skeleton h-4 w-10"></div>
                                                <div className="skeleton h-4 w-6"></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="skeleton h-14 w-full"></div>
                                    </td>
                                    <td className="grid grid-cols-2 gap-2">
                                        <div className="skeleton h-4 w-full"></div>
                                        <div className="skeleton h-4 w-full"></div>
                                        <div className="skeleton h-4 w-full"></div>
                                        <div className="skeleton h-4 w-full"></div>
                                    </td>
                                    <td>
                                        <div className="skeleton h-8"></div>
                                    </td>
                                    <td>
                                        <div className="skeleton h-8 "></div>
                                    </td>
                                    <td>
                                        <div className="skeleton h-8 "></div>
                                    </td>
                                </>
                                )
                                    :

                                    data?.map(trainer => <tr key={trainer._id}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={trainer.photo_url} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{trainer.name}</div>
                                                    <div className="text-sm opacity-50">Age: {trainer.age}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{trainer.joinDate}</p>
                                        </td>
                                        <td>
                                            <div className="grid grid-cols-2 gap-2">
                                                {
                                                    trainer.skill.slice(0, 4).map((data, idx) => <p className="text-xs bg-sky-100 rounded-md w-24 p-[2px] pl-[2px]" key={idx}>{data}</p>)
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <p>${trainer.salary}</p>
                                        </td>
                                        <td>
                                            <p>{trainer.lastPayment == month ? 'paid' : 'pending'}</p>
                                        </td>
                                        <td>
                                            {trainer.lastPayment != month &&
                                                <button className="btn Shared_Color hover:text-red-800">
                                                    Pay
                                                </button>
                                            }
                                        </td>
                                    </tr>)

                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllTrainer;