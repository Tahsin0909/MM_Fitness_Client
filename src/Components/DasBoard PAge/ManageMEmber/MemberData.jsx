/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEffect } from "react";

const MemberData = ({ title, Data }) => {
    const [classData, setClassData] = useState(null)
    useEffect(() => {
        const MemberData = data?.filter(items => items.classTitle === title)
        setClassData(MemberData)
    }, [data, title])
    return (
        <div>
            {
                classData.map(member => <p key={member.stdEmail}>HI</p>)
            }
        </div>
    );
};

export default MemberData;