const mock = {
  tasks: [
    {
      id: 0,
      type: "Meeting",
      title: "Meeting with Andrew Piker",
      time: "9:00"
    },
    {
      id: 1,
      type: "Call",
      title: "Call with HT Company",
      time: "12:00"
    },
    {
      id: 2,
      type: "Meeting",
      title: "Meeting with Zoe Alison",
      time: "14:00"
    },
    {
      id: 3,
      type: "Interview",
      title: "Interview with HR",
      time: "15:00"
    }
  ],
  bigStat: [
    {
      product: "Light Blue",
      total: {
        monthly: 4232,
        weekly: 1465,
        daily: 199,
        percent: { value: 3.7, profit: false }
      },
      color: "primary",
      registrations: {
        monthly: { value: 830, profit: false },
        weekly: { value: 215, profit: true },
        daily: { value: 33, profit: true }
      },
      bounce: {
        monthly: { value: 4.5, profit: false },
        weekly: { value: 3, profit: true },
        daily: { value: 3.25, profit: true }
      }
    },
    {
      product: "Sing App",
      total: {
        monthly: 754,
        weekly: 180,
        daily: 27,
        percent: { value: 2.5, profit: true }
      },
      color: "warning",
      registrations: {
        monthly: { value: 32, profit: true },
        weekly: { value: 8, profit: true },
        daily: { value: 2, profit: false }
      },
      bounce: {
        monthly: { value: 2.5, profit: true },
        weekly: { value: 4, profit: false },
        daily: { value: 4.5, profit: false }
      }
    },
    {
      product: "RNS",
      total: {
        monthly: 1025,
        weekly: 301,
        daily: 44,
        percent: { value: 3.1, profit: true }
      },
      color: "secondary",
      registrations: {
        monthly: { value: 230, profit: true },
        weekly: { value: 58, profit: false },
        daily: { value: 15, profit: false }
      },
      bounce: {
        monthly: { value: 21.5, profit: false },
        weekly: { value: 19.35, profit: false },
        daily: { value: 10.1, profit: true }
      }
    }
  ],
  notifications: [
    {
      id: 0,
      icon: "thumbs-up",
      color: "primary",
      content:
        'Ken <span className="fw-semi-bold">accepts</span> your invitation'
    },
    {
      id: 1,
      icon: "file",
      color: "success",
      content: "Report from LT Company"
    },
   
  ],
  table: [

    
      {
        id: 6155,
        TA_Name: 'Grace',
        CourseTitle: 'Circuit Analysis',
        Course: 'EEE3030',
        Instructor: 'Alice',
        Time: '2022-10-17T01:44:37.927Z',
        RoomCap: 44,
        status: 'declined'
      },
      {
        id: 4738,
        TA_Name: 'Emma',
        CourseTitle: 'Power Electronics',
        Course: 'EEE4040',
        Instructor: 'Alice',
        Time: '2022-06-13T16:33:41.409Z',
        RoomCap: 17,
        status: 'sent'
      },
      {
        id: 4934,
        TA_Name: 'John',
        CourseTitle: 'Circuit Analysis',
        Course: 'EEE1010',
        Instructor: 'Alice',
        Time: '2023-02-25T23:02:09.845Z',
        RoomCap: 46,
        status: 'declined'
      },
      {
        id: 4997,
        TA_Name: 'Frank',
        CourseTitle: 'Circuit Analysis',
        Course: 'EEE5050',
        Instructor: 'Frank',
        Time: '2022-06-25T11:14:29.747Z',
        RoomCap: 41,
        status: 'declined'
      },
      {
        id: 7107,
        TA_Name: 'John',
        CourseTitle: 'Control Systems',
        Course: 'EEE4040',
        Instructor: 'Frank',
        Time: '2022-04-28T12:37:22.246Z',
        RoomCap: 41,
        status: 'sent'
      },
      {
        id: 2069,
        TA_Name: 'Henry',
        CourseTitle: 'Digital Signal Processing',
        Course: 'EEE4040',
        Instructor: 'Frank',
        Time: '2022-09-03T05:59:32.854Z',
        RoomCap: 18,
        status: 'sent'
      },
      {
        id: 3429,
        TA_Name: 'Bob',
        CourseTitle: 'Digital Signal Processing',
        Course: 'EEE2020',
        Instructor: 'Bob',
        Time: '2022-09-24T10:04:42.390Z',
        RoomCap: 32,
        status: 'pending'
      },
      {
        id: 2355,
        TA_Name: 'Emma',
        CourseTitle: 'Digital Signal Processing',
        Course: 'EEE2020',
        Instructor: 'Alice',
        Time: '2023-01-08T15:35:19.682Z',
        RoomCap: 46,
        status: 'pending'
      },
      {
        id: 9392,
        TA_Name: 'Alice',
        CourseTitle: 'Electromagnetic Fields',
        Course: 'EEE3030',
        Instructor: 'Bob',
        Time: '2022-02-27T02:58:19.122Z',
        RoomCap: 27,
        status: 'sent'
      },
      {
        id: 7974,
        TA_Name: 'Charlie',
        CourseTitle: 'Control Systems',
        Course: 'EEE5050',
        Instructor: 'David',
        Time: '2022-12-09T13:20:59.576Z',
        RoomCap: 42,
        status: 'sent'
      },
      {
        id: 4728,
        TA_Name: 'Frank',
        CourseTitle: 'Power Electronics',
        Course: 'EEE4040',
        Instructor: 'David',
        Time: '2022-05-27T16:29:35.893Z',
        RoomCap: 13,
        status: 'sent'
      },
      {
        id: 3448,
        TA_Name: 'Alice',
        CourseTitle: 'Circuit Analysis',
        Course: 'EEE4040',
        Instructor: 'Emma',
        Time: '2022-07-08T23:52:34.270Z',
        RoomCap: 35,
        status: 'pending'
      },
      {
        id: 9132,
        TA_Name: 'Henry',
        CourseTitle: 'Circuit Analysis',
        Course: 'EEE1010',
        Instructor: 'John',
        Time: '2022-02-09T23:54:35.529Z',
        RoomCap: 50,
        status: 'pending'
      },
      {
        id: 8416,
        TA_Name: 'Emma',
        CourseTitle: 'Power Electronics',
        Course: 'EEE2020',
        Instructor: 'Bob',
        Time: '2022-02-03T14:34:37.002Z',
        RoomCap: 24,
        status: 'declined'
      },
      {
        id: 1936,
        TA_Name: 'Emma',
        CourseTitle: 'Circuit Analysis',
        Course: 'EEE3030',
        Instructor: 'Grace',
        Time: '2022-08-05T18:16:27.932Z',
        RoomCap: 43,
        status: 'sent'
      },
      {
        id: 1521,
        TA_Name: 'Isabel',
        CourseTitle: 'Electromagnetic Fields',
        Course: 'EEE4040',
        Instructor: 'Emma',
        Time: '2022-07-11T08:52:16.980Z',
        RoomCap: 32,
        status: 'sent'
      },
      {
        id: 2809,
        TA_Name: 'Emma',
        CourseTitle: 'Electromagnetic Fields',
        Course: 'EEE4040',
        Instructor: 'Emma',
        Time: '2022-12-08T12:56:35.144Z',
        RoomCap: 33,
        status: 'pending'
      },
      {
        id: 7965,
        TA_Name: 'Alice',
        CourseTitle: 'Power Electronics',
        Course: 'EEE4040',
        Instructor: 'Isabel',
        Time: '2022-10-12T10:47:33.238Z',
        RoomCap: 50,
        status: 'pending'
      },
      {
        id: 1594,
        TA_Name: 'David',
        CourseTitle: 'Control Systems',
        Course: 'EEE4040',
        Instructor: 'Frank',
        Time: '2023-02-07T02:44:13.755Z',
        RoomCap: 42,
        status: 'declined'
      },
      {
        id: 5548,
        TA_Name: 'Emma',
        CourseTitle: 'Circuit Analysis',
        Course: 'EEE1010',
        Instructor: 'Grace',
        Time: '2022-12-29T01:40:31.865Z',
        RoomCap: 49,
        status: 'pending'
      }
    ]
    
  
};

export default mock;
