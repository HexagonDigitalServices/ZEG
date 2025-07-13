import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const Room = () => {
    const { roomId } = useParams()

    const myMeeting = async (element) => {
        const appID = 866781093
        const serverSecret = '6735afb089b154c3fae244359db07bcb'

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            'UserName' // You can change this to use dynamic user name
        )

        const zc = ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `http://localhost:5173/room/${roomId}`,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: true,
        })
    }

    return (
        <div style={{ height: '100vh' }}>
            <div ref={myMeeting} style={{ width: '100%', height: '100%' }} />
        </div>
    )
}

export default Room
