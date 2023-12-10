import { Helmet } from "react-helmet";
import useClass from "../../../Hooks/useClass";

const ResomendedClass = () => {
    const [data] = useClass()
    return (
        <div className="border mt-10 w-[1000px] p-5 rounded-md shadow-lg" >
            <Helmet>
                <title>Mm Dashboard | Recommended</title>
            </Helmet>
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Trainer</th>
                            <th>Class</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data?.slice(0, 5).map(classData => <tr key={classData._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={classData?.trainerImage} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{classData?.trainerName}</div>
                                            <div className="text-sm opacity-50">{classData?.trainerEmail}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {classData?.classTitle}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{classData?.category}</span>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ResomendedClass;