import { Helmet } from "react-helmet";
import useSubscribers from "../../../Hooks/useSubscribers";

const AllSubscriber = () => {
    const [Subscriber, isPending] = useSubscribers()
    console.log(Subscriber);
    return (
        <div className="ml-10 m-2">
            <Helmet>
                <title>Mm Dashboard | All Subscriber</title>
            </Helmet>
            <p className="text-xl font-semibold  uppercase mb-4">Total NewsLetter Subscriber : {Subscriber?.length} </p>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="Shared_Color">
                                <th className="">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                isPending ? (<>
                                    <tr>
                                        <td>
                                            <div className="skeleton h-6 w-full"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="skeleton h-6 w-full"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="skeleton h-6 w-full"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="skeleton h-6 w-full"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="skeleton h-6 w-full"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="skeleton h-6 w-full"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="skeleton h-6 w-full"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="skeleton h-6 w-full"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="skeleton h-6 w-full"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="skeleton h-6 w-full"></div>
                                        </td>
                                    </tr>
                                </>
                                )
                                    :

                                    Subscriber?.map(data => <tr key={data._id} className="hover">
                                        <td>
                                            <p>{data.email}</p>
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

export default AllSubscriber;