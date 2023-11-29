/* eslint-disable react/prop-types */

const ScheduleTab = ({ schedule }) => {
    if (schedule?.length > 0) {
        return <div className="overflow-y-scroll h-[50vh]">
            <table className="table  w-full">
                <thead>
                    <tr className="">
                        <th className="text-[#c91b1b]">Class</th>
                        <th className="text-[#c91b1b]">Time</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            schedule.map(time => <tr key={time._id} className="hover">
                                <td>
                                    <p>{time.classTitle}</p>
                                </td>
                                <td>
                                    <p>{time.schedule.time}</p>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
            </table>
        </div>
    }
    return <p className="h-[50vh]">NO DATA FOUND</p>


};

export default ScheduleTab;