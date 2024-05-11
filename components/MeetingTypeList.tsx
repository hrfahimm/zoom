'use client'

import Image from "next/image"
import { HomeCard } from "./HomeCard"
import { useState } from "react"
import { useRouter } from "next/navigation"

const MeetingTypeList = () => {
    const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()
    const router = useRouter()

    return (
        <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 '>
            <HomeCard img='/icons/add-meeting.svg' title="New Meeting" des="Start an instant meeting" handleClick={() => setMeetingState('isJoiningMeeting')} className='bg-orange-700' />

            <HomeCard img='/icons/schedule.svg' title="Schedule Meeting" des="Plane Your Meeting" handleClick={() => setMeetingState('isScheduleMeeting')} className='bg-blue-700' />

            <HomeCard img='/icons/recordings.svg' title="View Recording" des="Chake Out Your Reacording" handleClick={() => setMeetingState('isJoiningMeeting')} className='bg-purple-700' />

            <HomeCard img='/icons/add-meeting.svg' title="New Meeting" des="Start an instant meeting" handleClick={() => router.push('/recordings')} className='bg-yellow-700' />




        </section>
    )
}

export default MeetingTypeList