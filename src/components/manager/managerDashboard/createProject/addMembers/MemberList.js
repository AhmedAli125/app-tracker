import React, {useContext,useEffect} from 'react'
import ManagerContext from '../../../../../context/manager/ManagerContext'
import Member from './Member';

function MemberList() {
    const managerContext = useContext(ManagerContext);
    const {
        organizationMembers
    } = managerContext;

    useEffect(() => {
        
    },[organizationMembers.isAssigned])

    return (
        <div className='member-container'>
            {
                organizationMembers.map(member => {
                    return (
                        <Member
                            key={member.key}
                            data={member}
                        />
                    );
                })
            }
        </div>
    )
}

export default MemberList
